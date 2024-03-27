import { Container, Divider, Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import EditableInfo from "./EditableInfo";

const SettingsPage = () => {

    const { user } = useContext(UserContext)

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Typography variant="h4">{user?.username} - Informações Básicas</Typography>
                
                <EditableInfo title="Name" propValue={user?.name!}/>
                <Divider/>
            </Container>
        </>
    )
}

export default SettingsPage