import { Container, Divider, Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import EditableInfo from "./EditableInfo";
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { MessageContext } from "../../context/MessageContext";
import { FieldValues, useForm } from "react-hook-form";
import api from "../../service/api";

const SettingsPage = () => {

    const { user, buildUser } = useContext(UserContext)
    const { popNotification } = useContext(MessageContext)
    const { handleSubmit, register, setValue } = useForm()
    
    const submit = async (data:FieldValues) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            await api.patch("/user/"+user?.idUser, data, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            popNotification("Your data has been updated", "success")
            buildUser()
        } catch (error) {
            popNotification("Oops! Something went wrong", "error")
        }
    }

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Typography variant="h4">{user?.username} - Informações Básicas</Typography>

                <form onSubmit={handleSubmit((data) => submit(data))}>
                    <EditableInfo
                        nameProp="name"
                        valueProp={user?.name!}
                        useFormRegister={register}
                        useFormSetValue={setValue}/>
                    <Divider/>
                </form>
            </Container>
        </>
    )
}

export default SettingsPage