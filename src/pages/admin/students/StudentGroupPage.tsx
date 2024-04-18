import { Chip, Container, Fab, IconButton, MenuItem, Select, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { CustomAppBar, DialogForm, SkeletonList, StyledLink } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { useContext, useEffect, useState } from "react"
import { IAppliedDisciplineGrouped, IDiscipline, IInstructor, IPaginated, IStudentGroup } from "../../../interfaces"
import { studentGroupService } from "../../../service"
import { useParams } from "react-router-dom"
import AddIcon from '@mui/icons-material/Add';
import { FieldValues, useForm } from "react-hook-form"
import { UserContext } from "../../../context/UserContext"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { clearEmptyProperties } from "../../../utils/object"
import { createAppliedDiscipline, createStudent, createUser, retrieveAppliedDisciplines, retrieveDisciplines, retrieveInstructors } from "../../../service/requests"


const StudentGroupPage = () => {

    const columns:GridColDef[] = [
        { field: "disciplineName", headerName: "Discipline", flex: 0.3, sortable: false },
        { field: "totalHours", headerName: "Total Hours", flex: 0.3, sortable: false },
        { field: "period", headerName: "Period", flex: 0.3 },
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
    const [pageName, setPageName] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [addOpen, setAddOpen] = useState<boolean>(false)
    const [applyOpen, setApplyOpen] = useState<boolean>(false)
    const [render, setRender] = useState<boolean>(false)
    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(UserContext)
    const [appliedDisciplines, setAppliedDisciplines] = useState<IPaginated<IAppliedDisciplineGrouped>>()
    const [instructors, setInstructors] = useState<IInstructor[]>()
    const [disciplines, setDisciplines] = useState<IPaginated<IDiscipline>>()
    const [idInstructor, setIdInstructor] = useState<string>("")
    const [idDiscipline, setIdDiscipline] = useState<string>("")

    const handleClose = () => {
        setAddOpen(false)
        setApplyOpen(false)
        reset()
    }

    const submitNewStudent = async (data:FieldValues) => {
        const newUser = await createUser({ 
            ...data,
            idInstitution: user?.institution.idInstitution
        })
        await createStudent(
            newUser.idUser,
            { idStudentGroup: idStudentGroup }
        )
        setRender((prev) => !prev)
        reset()
    }

    const submitApplyDiscipline = async (data:FieldValues) => {
        await createAppliedDiscipline({
            ...clearEmptyProperties(data),
            idInstructor: idInstructor,
            idDiscipline: idDiscipline,
            idStudentGroup: idStudentGroup
        })
        
        setRender((prev) => !prev)
        reset()
    }

    useEffect(() => {
        const loadStudentGroupAndDisciplines = async () => {
            setLoading(true)
            setStudentGroup(
                await studentGroupService.getStudentGroup(idStudentGroup!)
            )
            setAppliedDisciplines(
                await retrieveAppliedDisciplines({
                    idStudentGroup: idStudentGroup!,
                    page: 1,
                    limit: 9999
                })
            )
            setLoading(false)
        }
        loadStudentGroupAndDisciplines()
    }, [render])

    useEffect(() => {
        const loadInstructorsAndDisciplines = async () => {
            setInstructors(await retrieveInstructors())
            setDisciplines(await retrieveDisciplines({ page: 1, limit: 10000 }))
        }
        if(applyOpen) loadInstructorsAndDisciplines()
    }, [applyOpen])

    useEffect(() => {
        if(!loading) setPageName(studentGroup ? studentGroup.name : "Student Group")
    }, [studentGroup])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={5}>

                    <AppBreadcrumbs customCurrentPage={pageName}/>

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
                            !loading ?
                            (
                                studentGroup &&
                                studentGroup.students.length > 0 ?
                                studentGroup.students.map((student, index) => 
                                    <Chip
                                        key={index}
                                        label={student.username}
                                    />
                                ) : <Chip label="No students added"/>
                            ) : <SkeletonList length={7} width={100} heigth={32}/> 
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
                            appliedDisciplines?.paginatedData.sort((a, b) => a.period - b.period).map((user, index) => ({ id: index, ...user })) 
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
                <Stack>
                    <Typography>Instructor</Typography>
                    <Select value={idInstructor} onChange={(e) => setIdInstructor(e.target.value)}>
                        {
                            instructors?.map((instructor, index) => 
                                <MenuItem key={index} value={instructor.idInstructor}>
                                    {instructor.username}
                                    {"  |  " && instructor.name}
                                </MenuItem>
                            )
                        }
                    </Select>
                </Stack>
                <Stack>
                    <Typography>Discipline</Typography>
                    <Select value={idDiscipline} onChange={(e) => setIdDiscipline(e.target.value)}>
                        {
                            disciplines?.paginatedData.map((discipline, index) => 
                                <MenuItem key={index} value={discipline.idDiscipline}>
                                    {discipline.name}
                                </MenuItem>
                            )
                        }
                    </Select>
                </Stack>
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