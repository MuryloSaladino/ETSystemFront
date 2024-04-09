import { Chip, Container, IconButton, Pagination, Stack, TextField, Typography } from "@mui/material"
import { CustomAppBar, DialogForm, StyledLink } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import { IPaginated, IStudentGroup, IStudentGroupGrouped } from "../../../interfaces";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useSearchParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import AddIcon from '@mui/icons-material/Add';
import AppToast from "../../../utils/AppToast";
import { studentGroupService } from "../../../service";


interface IStudentGroupRow extends IStudentGroup {
    id: number;
}

const StudentsPage = () => {

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name", flex: 0.5, sortable: false },
        { 
            field: "workPeriod",
            headerName: "Work Period",
            flex: 0.3,
            sortable: false,
            renderCell: (params) => <Chip label={params.row.workPeriod}/>
        },
        {
            field: "actions",
            flex: 0.1,
            headerName: "Actions",
            sortable: false,
            renderCell: (params) => 
                <StyledLink to={params.row.idStudentGroup}>
                    <IconButton>
                        <NavigateNextIcon/>
                    </IconButton>
                </StyledLink>
        },
    ]

    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const [studentGroups, setStudentGroups] = useState<IPaginated<IStudentGroupGrouped>>()
    const [open, setOpen] = useState<boolean>(false)
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = useState<boolean>(false)

    const handleClose = () => {
        setOpen(false)
        reset()
    }
    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    };

    const submit = async (data:FieldValues) => {
        console.log(data)
    }

    useEffect(() => {
        const retrieveStudentGroups = async () => {
            try {
                setLoading(true)
                setStudentGroups(await studentGroupService.getStudentGroups(searchParams.get("page") || "1"))
            } catch (error) {
                if(error instanceof Error) {
                    AppToast.notifyError(error)
                }
            } finally {
                setLoading(false)
            }
        }
        retrieveStudentGroups()
    }, [open])


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
                        rows={
                            studentGroups?.paginatedData.map((studentGroup, index) => ({ id: index, ...studentGroup })) 
                            || Array.from({ length: 10 }, (value, index) => {return {id: index, value: value}})
                        }
                        rowSelection={false}
                        hideFooter
                        disableColumnFilter
                    />

                    <Pagination
                        page={Number(searchParams.get("page"))}
                        count={studentGroups?.totalPages} 
                        onChange={handleChange}
                        sx={{ alignSelf:"end" }}
                    />

                </Stack>
            </Container>

            <DialogForm
                title={"Create Student Group"}
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                submit={submit}
            >
                <TextField
                    {...register("name")}
                    label="Student Group Name"
                    required
                />
            </DialogForm>
        </>
    )
}

export default StudentsPage