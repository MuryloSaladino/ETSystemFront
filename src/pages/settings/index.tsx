import { Container, Divider, Typography } from "@mui/material"
import { CustomAppBar, SwitchInput } from "../../components"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { MessageContext } from "../../context/MessageContext";
import { FieldValues, useForm } from "react-hook-form";
import { updateUser } from "../../service/user";
import { clearEmptyProperties } from "../../utils/object";


const SettingsPage = () => {

    const { user, buildUser } = useContext(UserContext)
    const { popNotification } = useContext(MessageContext)
    const { handleSubmit, register, setValue } = useForm()

    const submit = async (data:FieldValues) => {
        const token = localStorage.getItem("@TOKEN")
        if(user && token) {
            try {
                await updateUser(user.idUser, token, clearEmptyProperties(data))
                popNotification("Your data has been updated", "success")
                buildUser()
            } catch (error) {
                popNotification("Oops! Something went wrong", "error")
            }
        }
    }

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Typography variant="h4">Informações Básicas</Typography>

                <form onSubmit={handleSubmit((data) => submit(data))}>
                    <SwitchInput 
                        {...register("username", { pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,}$/ })}/>
                    <Divider/>
                    <SwitchInput 
                        {...register("name", { pattern: /^[a-zA-Z ]+$/ })}/>
                    <Divider/>
                    <SwitchInput 
                        {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}/>
                    <Divider/>
                    <SwitchInput 
                        {...register("contact", { pattern: /^\(\d{2}\)\d{5}-\d{4}$/ })}/>
                    <Divider/>
                    <SwitchInput 
                        {...register("dateOfBirth", { pattern: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/ })}/>
                </form>
            </Container>
        </>
    )
}

export default SettingsPage