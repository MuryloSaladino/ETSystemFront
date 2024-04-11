import { Chip, Container, IconButton, MenuItem, Select, Stack, TextField, Theme, Typography, useTheme } from "@mui/material"
import { CustomAppBar, DialogForm } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { IDiscipline, IDisciplineCategory, IDisciplineGrouped, IPaginated } from "../../../interfaces"
import { FieldValues, useForm } from "react-hook-form"
import { disciplineCategoryService, disciplineService } from "../../../service"
import AppToast from "../../../utils/AppToast"
import EditIcon from '@mui/icons-material/Edit';
import { clearEmptyProperties } from "../../../utils/object"
import AddIcon from '@mui/icons-material/Add';


interface IDisciplineRow extends IDiscipline {
    id: number;
}

const DisciplinesPage = () => {

    const theme:Theme = useTheme()

    const categoryColors:Record<string, string> = {
        "T.I.": theme.palette.info[theme.palette.mode],
        "Mecatrônica": theme.palette.secondary[theme.palette.mode],
    }

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name", flex: 0.5, sortable: false },
        { 
            field: "category",
            headerName: "Category",
            flex: 0.3,
            sortable: false,
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
                    />
                ]
            }
        },
    ]

    const [disciplines, setDisciplines] = useState<IPaginated<IDisciplineGrouped>>()
    const [open, setOpen] = useState<boolean>(false)
    const [currentDiscipline, setCurrentDiscipline] = useState<IDiscipline|null>(null)
    const [currentCategory, setCurrentCategory] = useState<string>("")
    const { register, handleSubmit, setValue } = useForm()
    const [loading, setLoading] = useState<boolean>(false)
    const [categories, setCategories] = useState<IPaginated<IDisciplineCategory>>()

    const handleClick = (discipline:IDisciplineRow) => {
        setOpen(true)
        setCurrentDiscipline(discipline)
        setValue("name", discipline.name)
    }
    const handleClose = () => {
        setOpen(false)
        setCurrentDiscipline(null)
        setValue("name", "")
    }

    useEffect(() => {
        const retrieveDisciplines = async () => {
            try {
                setLoading(true)
                setDisciplines(await disciplineService.getDisciplines("1"))
                setCategories(await disciplineCategoryService.getDisciplineCategories())
            } catch (error) {
                if(error instanceof Error) {
                    AppToast.notifyError(error)
                }
            } finally {
                setLoading(false)
            }
        }
        retrieveDisciplines()
    }, [open])

    const submit = async (data:FieldValues) => {
        try {
            setLoading(true)
            if(currentDiscipline) {
                await disciplineService.updateDiscipline(
                    currentDiscipline.idDiscipline,
                    clearEmptyProperties({
                        ...data,
                        idCategory: currentCategory
                    })
                )
                AppToast.notify("Discipline data has been updated.", "success")
            } else {
                await disciplineService.createDiscipline(
                    clearEmptyProperties({
                        ...data,
                        idCategory: currentCategory
                    })
                )
                AppToast.notify("Discipline created.", "success")
            }
        } catch (error) {
            if(error instanceof Error)
                AppToast.notifyError(error)
        } finally {
            handleClose()
            setLoading(false)
        }
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
                        disableColumnFilter
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