import { Container, Pagination, Stack } from "@mui/material"
import { CustomAppBar } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { IDiscipline, IDisciplineGrouped, IPaginated } from "../../../interfaces"
import { useForm } from "react-hook-form"

const DisciplinesPage = () => {

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name" }
    ]

    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const [disciplines, setDiscilpines] = useState<IPaginated<IDisciplineGrouped>>()
    const [open, setOpen] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IDiscipline|null>(null)
    // const { register, handleSubmit, setValue, getValues } = useForm()
    const [loading, setLoading] = useState<boolean>(false)

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>

                    <AppBreadcrumbs/>

                    <DataGrid
                        columns={columns}
                        rowSelection={false}
                        hideFooter
                        disableColumnFilter
                    />

                    <Pagination
                        page={Number(searchParams.get("page"))}
                        count={disciplines?.totalPages} 
                        // onChange={handleChange}
                        sx={{ alignSelf:"end" }}/>

                </Stack>
            </Container>
        </>
    )
}

export default DisciplinesPage