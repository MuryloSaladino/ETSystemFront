import { Autocomplete, Chip, Container, IconButton, Pagination, Stack, TextField, Typography } from "@mui/material"
import { CustomAppBar, DialogForm } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import { useSearchParams } from "react-router-dom"
import { ChangeEvent, useEffect, useState } from "react"
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

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name", flex: 0.5, sortable: false },
        { 
            field: "category",
            headerName: "Category",
            flex: 0.3,
            sortable: false,
            renderCell: (params) => <Chip label={params.row.category?.name || "ARRUMAR"}/>
        },
        {
            field: "actions",
            type: "actions",
            flex: 0.1,
            headerName: "Actions",
            getActions: (row) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon/>}
                        onClick={() => handleClick(row.row)}
                        label="Edit"
                    />
                ]
            }
        },
    ]

    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const [disciplines, setDisciplines] = useState<IPaginated<IDisciplineGrouped>>()
    const [open, setOpen] = useState<boolean>(false)
    const [currentDiscipline, setCurrentDiscipline] = useState<IDiscipline|null>(null)
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
    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    };

    useEffect(() => {
        const retrieveDisciplines = async () => {
            try {
                setLoading(true)
                setDisciplines(await disciplineService.getDisciplines(searchParams.get("page")!))
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
    }, [searchParams, open])

    const submit = async (data:FieldValues) => {
        try {
            setLoading(true)
            if(currentDiscipline) {
                await disciplineService.updateDiscipline(
                    currentDiscipline.idDiscipline,
                    clearEmptyProperties(data)
                )
                AppToast.notify("Discipline data has been updated.", "success")
            } else {
                await disciplineService.createDiscipline(
                    clearEmptyProperties({
                        ...data,
                        idCategory: categories?.paginatedData.find(
                            element => element.name === data.category
                        )?.idDisciplineCategory,
                        category: undefined
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
                        hideFooter
                        disableColumnFilter
                    />

                    <Pagination
                        page={Number(searchParams.get("page"))}
                        count={disciplines?.totalPages} 
                        onChange={handleChange}
                        sx={{ alignSelf:"end" }}/>

                </Stack>
            </Container>

            <DialogForm
                title="Edit Discipline"
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                submit={submit}
            >
                <TextField
                    {...register("name")}
                    label="Name"
                />
                {
                    !currentDiscipline &&
                    <Autocomplete
                        disablePortal
                        options={categories?.paginatedData || []}
                        getOptionLabel={option => option.name}
                        isOptionEqualToValue={(option, value) => option.name == value.name}
                        renderInput={(params) => 
                            <TextField 
                                {...params} 
                                {...register("category")}
                                label="Category"
                            />
                        }
                    />
                }
            </DialogForm>
        </>
    )
}

export default DisciplinesPage