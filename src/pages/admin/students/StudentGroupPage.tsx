import { Container, Stack } from "@mui/material"
import { CustomAppBar } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { IStudentGroup } from "../../../interfaces"
import AppToast from "../../../utils/AppToast"

interface StudentGroupPageProps {
    idStudentGroup: string;
}

const StudentGroupPage = ({ idStudentGroup }:StudentGroupPageProps) => {

    const [searchParams, setSearchParams] = useSearchParams({ idStudentGroup: idStudentGroup })
    const [studentGroup, setStudentGroup] = useState<IStudentGroup>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const retrieveStudentGroup = async () => {
            try {
                setLoading(true)
                
            } catch (error) {
                if(error instanceof Error) {
                    AppToast.notifyError(error)
                }
            } finally {
                setLoading(false)
            }
        }
        retrieveStudentGroup()
    }, [searchParams])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>

                    <AppBreadcrumbs customCurrentPage={studentGroup?.name || "Student Group"}/>

                    

                </Stack>
            </Container>
        </>
    )
}

export default StudentGroupPage