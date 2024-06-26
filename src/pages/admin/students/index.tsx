import { Chip, Container, IconButton, MenuItem, Pagination, Select, Stack, TextField, Theme, Typography, useTheme } from "@mui/material"
import { CustomAppBar, DialogForm, StyledLink } from "../../../components"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { IPaginated, IStudentGroupGrouped } from "../../../interfaces";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { studentGroupService } from "../../../service";
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddIcon from '@mui/icons-material/Add';
import AppToast from "../../../utils/AppToast";
import { DateField } from "@mui/x-date-pickers";


const StudentsPage = () => {

    const theme:Theme = useTheme()

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name", flex: 0.5, sortable: false },
        { 
            field: "workPeriod",
            headerName: "Work Period (at Bosch)",
            flex: 0.3,
            sortable: false,
            renderCell: (params) => (
                <Chip
                    label={params.row.workPeriod === "a" ? "Afternoon" : "Morning"}
                    sx={{
                        backgroundColor: params.row.workPeriod === "a"
                        ? theme.palette.warning[theme.palette.mode]
                        : theme.palette.info[theme.palette.mode]
                    }}
                />
            )
        },
        {
            field: "link",
            flex: 0.12,
            headerName: "Single View",
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
    const [date, setDate] = useState<string>("")
    const [period, setPeriod] = useState<string>("a")

    const handleClose = () => {
        setOpen(false)
        reset()
    }
    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    };

    const submit = async (data:FieldValues) => {
        try {
            await studentGroupService.createStudentGroup(
                {
                    ...data,
                    dateOfStart: date,
                    workPeriod: period
                })
            AppToast.notify("Group created.", "success")
            setOpen(false)
        } catch (error) {
            if(error instanceof Error) {
                AppToast.notifyError(error)
            }
        }
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
                        <Typography variant="h4">Student Groups</Typography>
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
                <Stack>
                    <Typography>Date of Start:</Typography>
                    <DateField
                        format="DD/MM/YYYY"
                        onChange={(e) => setDate(e ? e.format("YYYY-MM-DD") : "")}
                    />
                </Stack>
                <Stack>
                    <Typography>Work Period (at Bosch):</Typography>
                    <Select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                    >
                        <MenuItem value={"m"}>Morning</MenuItem>
                        <MenuItem value={"a"}>Afternoon</MenuItem>
                    </Select>
                </Stack>
            </DialogForm>
        </>
    )
}

export default StudentsPage