import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IUser } from "../../../interfaces"
import { MessageContext } from "../../../context/MessageContext"
import { getUser, updateUser } from "../../../service/user"
import { CustomAppBar, SwitchInput } from "../../../components"
import { Button, Container, Divider, Typography } from "@mui/material"
import { StyledForm, StyledStack } from "./styles"
import { FieldValues, useForm } from "react-hook-form"
import { clearEmptyProperties } from "../../../utils/object"


const SingleUserView = () => {

    const { handleSubmit, register, setValue, getValues } = useForm()
    const [user, setUser] = useState<IUser|null>()
    const { popNotification } = useContext(MessageContext)
    const { idUser } = useParams()

    
    const submit = async (data:FieldValues) => {
        const token = localStorage.getItem("@TOKEN")
        if(user && token) {
            try {
                setUser(await updateUser(user.idUser, token, clearEmptyProperties(data)))
                popNotification("User data has been updated", "success")
            } catch (error) {
                popNotification("Oops! Something went wrong", "error")
            }
        }
    }

    useEffect(() => {
        if(user) {
            const values = Object.keys(getValues())
            Object.keys(user).forEach((prop) => {
                if(values.includes(prop)) {
                    setValue(prop, user[(prop as keyof IUser)])
                }
            })
        }
    }, [user])

    useEffect(() => {
        const buildUser = async () => {
            const token = localStorage.getItem("@TOKEN")
            if(idUser && token) {
                try {
                    setUser(await getUser(idUser, token))
                } catch (error) {
                    popNotification("User not found", "error")
                }
            } else {
                popNotification("Oops! Something went wrong", "error")
            }
        }
        buildUser()
    }, [idUser])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Typography variant="h4" sx={{ margin:"1rem 0" }}>Informações Básicas</Typography>

                <StyledForm onSubmit={handleSubmit((data) => submit(data))}>
                    <StyledStack>
                        <Typography variant="h6">Username:</Typography>
                        <SwitchInput
                            {...register("username", { pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,}$/ })}
                            helperText="Must start with a letter"/>
                    </StyledStack>
                    <Divider/>
                    <StyledStack>
                        <Typography variant="h6">Name:</Typography>
                        <SwitchInput
                            {...register("name")}/>
                    </StyledStack>
                    <Divider/>
                    <StyledStack>
                        <Typography variant="h6">Email:</Typography>
                        <SwitchInput
                            {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                            helperText="Must be in a valid email format"/>
                    </StyledStack>
                    <Divider/>
                    <StyledStack>
                        <Typography variant="h6">Contact:</Typography>
                        <SwitchInput
                            {...register("contact", { pattern: /^\(\d{2}\)\d{5}-\d{4}$/ })}
                            helperText="(XX)XXXXX-XXXX"/>
                    </StyledStack>
                    <Divider/>
                    <StyledStack>
                        <Typography variant="h6">Date Of Birth:</Typography>
                        <SwitchInput
                            {...register("dateOfBirth", { pattern: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/ })}
                            helperText="DD/MM/YYYY"/>
                    </StyledStack>
                    <Button
                        variant="contained"
                        type="submit">
                        Save
                    </Button>
                </StyledForm>
            </Container>
        </>
    )
}

export default SingleUserView