import { Container, Divider, Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import EditableInfo from "./EditableInfo";
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
        try {
            await updateUser(user!.idUser, token!, clearEmptyProperties(data))
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
                <Typography variant="h4">Informações Básicas</Typography>

                {
                    user &&
                    <form onSubmit={handleSubmit((data) => submit(data))}>
                        <EditableInfo
                            nameProp={"username"} valueProp={user.username}
                            useFormRegister={register} useFormSetValue={setValue}
                            pattern={/^[a-zA-Z][a-zA-Z0-9_]{3,}$/}/>
                        <Divider/>
                        <EditableInfo
                            nameProp={"name"} valueProp={user.name}
                            useFormRegister={register} useFormSetValue={setValue}
                            pattern={/^[a-zA-Z ]+$/}/>
                        <Divider/>
                        <EditableInfo
                            nameProp={"email"} valueProp={user.email}
                            useFormRegister={register} useFormSetValue={setValue}
                            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}/>
                        <Divider/>
                        <EditableInfo
                            nameProp={"contact"} valueProp={user.contact}
                            useFormRegister={register} useFormSetValue={setValue}
                            pattern={/^\(\d{2}\)\d{5}-\d{4}$/}/>
                        <Divider/>
                        <EditableInfo
                            nameProp={"dateOfBirth"} valueProp={user.dateOfBirth}
                            useFormRegister={register} useFormSetValue={setValue}
                            pattern={/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/}/>
                    </form>
                }
            </Container>
        </>
    )
}

export default SettingsPage