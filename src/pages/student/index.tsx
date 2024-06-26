import { Container, Stack } from "@mui/material"
import { CustomAppBar } from "../../components"
import AppBreadcrumbs from "../../components/Breadcrumbs"
import { useEffect, useState } from "react"
import { IAppliedDisciplineGrouped, IPaginated } from "../../interfaces"
import { appliedDisciplineService } from "../../service"

const StudentPage = () => {

    const [disciplines, setDisciplines] = useState<IPaginated<IAppliedDisciplineGrouped>>()
    const [periods, setPeriods] = useState<number[]>([])

    useEffect(() => {
        const retrieveDisciplines = async () => {
            setDisciplines(
                await appliedDisciplineService.getAppliedDisciplines()
            )
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
