import { Container, Stack } from "@mui/material"
import { CustomAppBar } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"


const InstructorsPage = () => {

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>

                    <AppBreadcrumbs/>

                </Stack>
            </Container>
        </>
    )
}

export default InstructorsPage