import { Container, Stack } from "@mui/material"
import { CustomAppBar } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"

const DisciplinesPage = () => {


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

export default DisciplinesPage