import { Chip, Container, Fab, IconButton, Skeleton, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { CustomAppBar, DialogForm, SkeletonList, StyledLink } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { useContext, useEffect, useState } from "react"
import { IAppliedDisciplineGrouped, IPaginated, IStudentGroup } from "../../../interfaces"
import AppToast from "../../../utils/AppToast"
import { appliedDisciplineService, studentGroupService, userService } from "../../../service"
import { useParams } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { FieldValues, useForm } from "react-hook-form"
import { UserContext } from "../../../context/UserContext"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { clearEmptyProperties } from "../../../utils/object"


const StudentGroupPage = () => {

    const columns:GridColDef[] = [
        { field: "disciplineName", headerName: "Discipline", flex: 0.3, sortable: false },
        { field: "totalHours", headerName: "Total Hours", flex: 0.3, sortable: false },
        {
            field: "link",
            flex: 0.12,
            headerName: "Single View",
            sortable: false,
            renderCell: (params) => 
                <StyledLink to={params.row.idAppliedDiscipline}>
                    <IconButton>
                        <NavigateNextIcon/>
                    </IconButton>
                </StyledLink>
        },
    ]

    const { idStudentGroup } = useParams()
    const [studentGroup, setStudentGroup] = useState<IStudentGroup>()
    const [studentGroupName, setStudentGroupName] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [addOpen, setAddOpen] = useState<boolean>(false)
    const [applyOpen, setApplyOpen] = useState<boolean>(false)
    const [render, setRender] = useState<boolean>(false)
    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(UserContext)
    const [disciplines, setDisciplines] = useState<IPaginated<IAppliedDisciplineGrouped>>()

    const handleClose = () => {
        setAddOpen(false)
        setApplyOpen(false)
        reset()
    }

    const submitNewStudent = async (data:FieldValues) => {
        try {
            const newUser = await userService.createUser({
                ...clearEmptyProperties(data),
                idInstitution: user?.institution.idInstitution
            })
            await userService.createStudent(
                newUser.idUser,
                { idStudentGroup: idStudentGroup }
            )
            AppToast.notify("Student Created.", "success")
            setRender((prev) => !prev)
            reset()
        } catch (error) {
            if(error instanceof Error) {
                AppToast.notifyError(error)
            }
        }
    }

    const submitApplyDiscipline = async (data:FieldValues) => {
        try {
            console.log(clearEmptyProperties(data))
            setRender((prev) => !prev)
            reset()
        } catch (error) {
            if(error instanceof Error) {
                AppToast.notifyError(error)
            }
        }
    }

    useEffect(() => {
        const retrieveAppliedDisciplines = async () => {
            setDisciplines(
                await appliedDisciplineService.getAppliedDisciplines({
                    idStudentGroup: idStudentGroup!
                })
            )
        }
        retrieveAppliedDisciplines()
    }, [])

    useEffect(() => {
        const retrieveStudentGroup = async () => {
            try {
                setLoading(true)
                setStudentGroup(
                    await studentGroupService.getStudentGroup(idStudentGroup!)
                )
            } catch (error) {
                if(error instanceof Error) {
                    AppToast.notifyError(error)
                }
            } finally {
                setLoading(false)
            }
        }
        retrieveStudentGroup()
    }, [idStudentGroup, render])

    useEffect(() => {
        setStudentGroupName(studentGroup ? studentGroup.name : "Student Group")
    }, [studentGroup])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={5}>

                    <AppBreadcrumbs customCurrentPage={studentGroupName}/>

                    <Stack flexDirection="row" gap={2}>
                        <Typography variant="h4">Students</Typography>
                        <Tooltip title="Add Student">
                            <Fab color="default" size="small" onClick={() => setAddOpen(true)}>
                                <AddIcon/>
                            </Fab>
                        </Tooltip>
                    </Stack>

                    <Stack flexDirection="row" alignItems="center" gap={2} flexWrap="wrap">
                        {
                            loading 
                            ? <SkeletonList length={5} width={150} heigth={32}/> 
                            : studentGroup?.students.map((student, index) => 
                                <Chip
                                    key={index}
                                    label={student.username}
                                />
                            )
                        }
                    </Stack>

                    <Stack flexDirection="row" gap={2}>
                        <Typography variant="h4">Applied Disciplines</Typography>
                        <Tooltip title="Add Discipline">
                                <Fab color="default" size="small" onClick={() => setApplyOpen(true)}>
                                    <AddIcon/>
                                </Fab>
                        </Tooltip>
                    </Stack>
                    <DataGrid
                        loading={loading}
                        columns={columns}
                        rows={
                            disciplines?.paginatedData.sort((a, b) => a.period - b.period).map((user, index) => ({ id: index, ...user })) 
                            || Array.from({ length: 10 }, (value, index) => {return {id: index, value: value}})
                        }
                        rowSelection={false}
                        hideFooter
                        disableColumnFilter
                    />

                </Stack>
            </Container>

            <DialogForm
                open={addOpen}
                title="Add user"
                submit={submitNewStudent}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
            >
                <TextField
                    label="Username"
                    {...register("username")}
                    helperText="A new user will be created and added to this student group."
                />
            </DialogForm>

            <DialogForm
                open={applyOpen}
                title="Apply Discipline"
                submit={submitApplyDiscipline}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
            >
                <TextField
                    type="number"
                    {...register("period")}
                    label="Period"
                />
                <TextField
                    type="number"
                    {...register("totalHours")}
                    label="Total Hours"
                />
            </DialogForm>
        </>
    )
}

export default StudentGroupPage