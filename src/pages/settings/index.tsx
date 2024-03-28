import { Box, Container, Divider, Typography } from "@mui/material"
import { CustomAppBar } from "../../components"
import EditableInfo from "./EditableInfo";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { MessageContext } from "../../context/MessageContext";
import { FieldValues, useForm } from "react-hook-form";
import { IUser } from "../../interfaces";
import { updateUser } from "../../service/user";
import { clearEmptyProperties } from "../../utils/object";


const SettingsPage = () => {

    const { user, buildUser } = useContext(UserContext)
    const { popNotification } = useContext(MessageContext)
    const { handleSubmit, register, setValue } = useForm()
    const [infoEditable, setInfoEditable] = useState<string[]>([])

    useEffect(() => {
        if(user) {
            const arr = Object.keys(user).filter((key) => !key.includes("id") && key !== "institution")
            setInfoEditable(arr)
        }
    }, [user])
    
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

                <form onSubmit={handleSubmit((data) => submit(data))}>
                    {
                        user &&
                        infoEditable.map((info, index) =>
                            <Box key={index}>
                                <EditableInfo
                                    nameProp={info}
                                    valueProp={String(user[info as keyof IUser])}
                                    useFormRegister={register}
                                    useFormSetValue={setValue}/>
                                {index === infoEditable.length - 1 ? <></> : <Divider/>}
                            </Box>
                        )
                    }
                </form>
            </Container>
        </>
    )
}

export default SettingsPage