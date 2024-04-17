import { Container, Stack } from "@mui/material"
import { CustomAppBar } from "../../components"
import AppBreadcrumbs from "../../components/Breadcrumbs"
import { useContext, useEffect, useState } from "react"
import { IAppliedDisciplineGrouped, IPaginated } from "../../interfaces"
import { retrieveAppliedDisciplines } from "../../service/requests"
import { UserContext } from "../../context/UserContext"

const StudentPage = () => {

    const [disciplines, setDisciplines] = useState<IPaginated<IAppliedDisciplineGrouped>>()
    const [periods, setPeriods] = useState<number[]>([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        const retrieveDisciplines = async () => {
            setDisciplines(await retrieveAppliedDisciplines({
                page: 1,
                limit: 9999,
                idStudentGroup: user?.student?.idStudentGroup!
            }))

            disciplines?.paginatedData.forEach((discipline) => {
                if(!periods.includes(discipline.period)) {
                    setPeriods((prev) => [...prev, discipline.period])
                }
            })
        }
        retrieveDisciplines()
    }, [])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack>
                    <AppBreadcrumbs/>


                </Stack>
            </Container>
        </>
    )
}

export default StudentPage
