import { Container, Stack } from "@mui/material"
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
                <Stack spacing={3}>

                    <AppBreadcrumbs customCurrentPage={studentGroupName}/>

                    

                </Stack>
            </Container>
        </>
    )
}

export default StudentGroupPage