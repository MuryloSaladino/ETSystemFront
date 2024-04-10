import { Container, IconButton, Stack } from "@mui/material"
import { CustomAppBar } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IAppliedDiscipline, IStudentGroup } from "../../../interfaces"
import { appliedDisciplineService, studentGroupService } from "../../../service"
import AppToast from "../../../utils/AppToast"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AppliedDisciplinePage = () => {

    const { idStudentGroup, idAppliedDiscipline } = useParams()
    const [studentGroup, setStudentGroup] = useState<IStudentGroup>()
    const [studentGroupName, setStudentGroupName] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    // const [appliedDiscipline, setAppliedDiscipline] = useState<IAppliedDiscipline>()

    useEffect(() => {
        const retrieveGroupAndDiscipline = async () => {
            try {
                setStudentGroup(
                    await studentGroupService
                        .getStudentGroup(idStudentGroup!)
                )
                // setAppliedDiscipline(
                //     await appliedDisciplineService
                //         .getAppliedDiscipline(idAppliedDiscipline!)
                // )
            } catch (error) {
                if(error instanceof Error) {
                    AppToast.notifyError(error)
                }
            } finally {
            }
        }
        retrieveGroupAndDiscipline()
    }, [])

    useEffect(() => {
        setStudentGroupName(studentGroup ? studentGroup.name : "Student Group")
    }, [studentGroup])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack>
                    <AppBreadcrumbs customCurrentPage={studentGroupName}/>

                </Stack>
            </Container>
        </>
    )
}

export default AppliedDisciplinePage