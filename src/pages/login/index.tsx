import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Bosch } from '../../components'
import { FieldValues, useForm } from 'react-hook-form'
import { useState } from 'react'
import { loginContainerStyles, stackStyles } from './styles'
import { Container } from '@mui/material'


const Login = () => {

    const { register, handleSubmit } = useForm()
    const [error, setError] = useState<boolean>(false)

    const login = (data:FieldValues) => {
        console.log(data)

    }

    return (
        <>
            <Stack sx={stackStyles}>
                <Container sx={loginContainerStyles} maxWidth="sm">
                    <Bosch/>
                    <Typography variant="h3">Fazer login</Typography>
                    <Stack width="100%">
                        <form onSubmit={handleSubmit((data) => login(data))} style={{ width:"100%", display:"flex", flexDirection:"column", gap:"20px" }}>
                            <TextField
                                label="Username"
                                variant="outlined"
                                {...register("username")}
                                error={error}/>
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                {...register("password")}
                                error={error}/>
                            <Button type="submit" size='large' variant="contained" sx={{alignSelf:"end"}}>Login</Button>
                        </form>
                    </Stack>
                </Container>
            </Stack>
        </>
    )
}

export default Login