import { Chip, Container, IconButton, MenuItem, Select, Stack, TextField, Theme, Typography, useTheme } from "@mui/material"
import { CustomAppBar, DialogForm } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { IDiscipline, IDisciplineCategory, IPaginated } from "../../../interfaces"
import { FieldValues, useForm } from "react-hook-form"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { createDiscipline, deleteDiscipline, retrieveDisciplineCategories, retrieveDisciplines, updateDiscipline } from "../../../service/requests"


interface IDisciplineRow extends IDiscipline {
    id: number;
}

const DisciplinesPage = () => {

    const theme:Theme = useTheme()

    const categoryColors:Record<string, string> = {
        "Programming": theme.palette.info[theme.palette.mode],
        "Mechatronic": theme.palette.secondary[theme.palette.mode],
        "Administrative": theme.palette.success[theme.palette.mode],
        "Mechanic": theme.palette.warning[theme.palette.mode],
    }

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name", flex: 0.5 },
        { 
            field: "category",
            headerName: "Category",
            flex: 0.3,
            renderCell: (params) => (
                <Chip
                    label={params.row.category?.name}
                    sx={{ backgroundColor: categoryColors[params.row.category?.name] }}
                />
            )
        },
        {
            field: "actions",
            type: "actions",
            flex: 0.1,
            headerName: "Actions",
            sortable: false,
            getActions: (params) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon/>}
                        onClick={() => handleClick(params.row)}
                        label="Edit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon/>}
                        onClick={() => submitDeleteDiscipline(params.row.idDiscipline)}
                        label="Delete"
                    />
                ]
            }
        },
    ]

    const [disciplines, setDisciplines] = useState<IPaginated<IDiscipline>>()
    const [open, setOpen] = useState<boolean>(false)
    const [render, setRender] = useState<boolean>(false)
    const [currentDiscipline, setCurrentDiscipline] = useState<IDiscipline|null>(null)
    const [currentCategory, setCurrentCategory] = useState<string>("")
    const { register, handleSubmit, setValue } = useForm()
    const [loading, setLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<IPaginated<IDisciplineCategory>>()

    const handleClick = (discipline:IDisciplineRow) => {
        setOpen(true)
        setCurrentDiscipline(discipline)
        setCurrentCategory(discipline.category.idDisciplineCategory)
        setValue("name", discipline.name)
    }
    const handleClose = () => {
        setOpen(false)
        setCurrentDiscipline(null)
        setValue("name", "")
    }

    useEffect(() => {
        const loadDisciplines = async () => {
            setLoading(true)
            setCategories(await retrieveDisciplineCategories({
                page: 1,
                limit: 1000
            }))
            setDisciplines(await retrieveDisciplines({
                page: 1,
                limit: 10000
            }))
            setLoading(false)
        }
        loadDisciplines()
    }, [render])

    const submit = async (data:FieldValues) => {
        setLoading(true)

        if(currentDiscipline) {
            await updateDiscipline(
                currentDiscipline.idDiscipline,
                {
                    ...data,
                    idCategory: currentCategory
                }
            )
        } else {
            await createDiscipline({
                ...data,
                idCategory: currentCategory
            })
        }

        handleClose()
        setLoading(false)
        setRender(prev => !prev)
    }

    const submitDeleteDiscipline = async (idDiscipline:string) => {
        await deleteDiscipline(idDiscipline)
        setRender(prev => !prev)
    }

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>

                    <AppBreadcrumbs/>

                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography variant="h4">Disciplines</Typography>
                        <IconButton size="large" onClick={() => setOpen(true)}><AddIcon fontSize="large"/></IconButton>
                    </Stack>

                    <DataGrid
                        loading={loading}
                        columns={columns}
                        rows={disciplines?.paginatedData.map((institution, index) =>
                            ({
                                id: index, 
                                ...institution
                            })
                        ) || Array.from({ length: 10 }, (value, index) => {return {id: index, value: value}})}
                        rowSelection={false}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 10 } },
                        }}
                        pageSizeOptions={[10, 25]}
                    />
                </Stack>
            </Container>

            <DialogForm
                title={(currentDiscipline ? "Edit" : "Create")+" Discipline"}
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                submit={submit}
            >
                <TextField
                    {...register("name")}
                    label="Discipline Name"
                    required
                />
                <Stack gap={1}>
                    <Typography variant="caption">Category</Typography>
                    <Select
                        value={currentCategory}
                        onChange={(e) => setCurrentCategory(e.target.value)}
                    >
                        {
                            categories?.paginatedData.map((category, index) => 
                                <MenuItem
                                    value={category.idDisciplineCategory}
                                    key={index}
                                >{category.name}</MenuItem>
                            )
                        }
                    </Select>
                </Stack>
            </DialogForm>
        </>
    )
}

export default DisciplinesPage