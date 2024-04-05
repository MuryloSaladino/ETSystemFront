import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Bosch } from '../../components'
import { FieldValues, useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { StyledLoginContainer, StyledStack } from './styles'
import { login } from '../../service/login'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import AppToast from '../../utils/AppToast'


const Login = () => {

    const [error, setError] = useState<boolean>(false)
    const { buildUser } = useContext(UserContext)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = async (data:FieldValues) => {
        setError(false)
        try {
            await login(data.username, data.password)
            AppToast.notify("Logged in.", "success")
            navigate("/dashboard")
            await buildUser()
        } catch (error) {
            setError(true)
            if(error instanceof Error) {
                AppToast.notifyError(error)
            }
        }
    }

    return (
        <StyledStack>
            <StyledLoginContainer maxWidth="sm">
                <Bosch/>
                <Typography variant="h4" alignSelf="start">Fazer login</Typography>
                <Stack width="100%">
                    <form onSubmit={handleSubmit((data) => submit(data))} style={{ width:"100%", display:"flex", flexDirection:"column", gap:"20px" }}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            {...register("username")}
                            error={error}
                            required/>
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            {...register("password")}
                            error={error}
                            required/>
                        <Button type="submit" size='large' variant="contained" sx={{alignSelf:"end"}}>Login</Button>
                    </form>
                </Stack>
            </StyledLoginContainer>
        </StyledStack>
    )
}

export default Login