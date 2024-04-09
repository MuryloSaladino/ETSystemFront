import { Chip, Container, Stack, Typography } from "@mui/material"
import { CustomAppBar } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { useEffect, useState } from "react"
import { IStudentGroup } from "../../../interfaces"
import AppToast from "../../../utils/AppToast"
import { studentGroupService } from "../../../service"
import { useParams } from "react-router-dom"


const StudentGroupPage = () => {

    const { idStudentGroup } = useParams()
    const [studentGroup, setStudentGroup] = useState<IStudentGroup>()
    const [studentGroupName, setStudentGroupName] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)

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
    }, [idStudentGroup])

    useEffect(() => {
        setStudentGroupName(studentGroup ? studentGroup.name : "Student Group")
    }, [studentGroup])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={5}>

                    <AppBreadcrumbs customCurrentPage={studentGroupName}/>

                    <Typography variant="h4">Students</Typography>
                    <Stack flexDirection="row" alignItems="center" gap={2}>
                    {
                        studentGroup &&
                        studentGroup.students.map((student, index) => 
                            <Chip
                                key={index}
                                label={student.idStudent.substring(0, 5)}
                            />
                        )
                    }
                    </Stack>

                </Stack>
            </Container>
        </>
    )
}

export default StudentGroupPage