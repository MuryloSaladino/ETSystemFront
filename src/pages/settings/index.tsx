import { Button, Container, Divider, Typography } from "@mui/material"
import { CustomAppBar, SwitchInput } from "../../components"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { FieldValues, useForm } from "react-hook-form";
import { userService } from "../../service";
import { clearEmptyProperties } from "../../utils/object";
import { IUser } from "../../interfaces";
import { StyledForm, StyledStack } from "./styles";
import AppToast from "../../utils/AppToast";
import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";


const SettingsPage = () => {

    const { user, buildUser } = useContext(UserContext)
    const { handleSubmit, register, setValue, getValues } = useForm()
    const [dateOfBirth, setDateOfBirth] = useState<string>()

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
        if(user) {
            const filteredUser = {
                ...user,
                administrator: undefined,
                instructor: undefined,
                student: undefined
            }
            if(Object.values(filteredUser).includes(null))
                AppToast.notify("You must update your info before using the website!", "warning")
        }
    }, [])

    const submit = async (data:FieldValues) => {
        const token = localStorage.getItem("@TOKEN")
        if(user && token) {
            try {
                await userService.updateUser(
                    user.idUser,
                    clearEmptyProperties({
                        ...data,
                        dateOfBirth: dateOfBirth
                    })
                )
                AppToast.notify("Data has been updated!", "success")
                buildUser()
            } catch (error) {
                if(error instanceof Error)
                    AppToast.notifyError(error)
            }
        }
    }

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Typography variant="h4" sx={{ margin:"1rem 0" }}>Informações Básicas</Typography>

                {
                    user &&
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
                                {...register("name", { pattern: /^[a-zA-Z ]+$/ })}
                                helperText="Only letters"/>
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
                            <DateField
                                size="medium"
                                format="DD/MM/YYYY"
                                defaultValue={user?.dateOfBirth ? dayjs(user?.dateOfBirth) : null}
                                onChange={(e) => setDateOfBirth(e ? e.format("YYYY-MM-DD") : "")}
                            />
                        </StyledStack>
                        <Button
                            variant="contained"
                            type="submit">
                            Save
                        </Button>
                    </StyledForm>
                }
            </Container>
        </>
    )
}

export default SettingsPage