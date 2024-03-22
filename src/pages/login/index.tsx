import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Bosch } from '../../components'
import { useState, ChangeEvent } from 'react'


interface IInputs {
    username: string;
    password: string;
}

const Login = () => {

    const [inputs, setInputs] = useState<IInputs>({
        username: '',
        password: ''
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value 
        }))
    }


    return (
        <>
            <Stack height="100vh" width="100vw" direction="column" alignItems="center" justifyContent="center">
                <Stack width="500px" maxWidth="90%" minHeight="40vh" direction="column" alignItems="center" gap="30px">
                    <Bosch/>
                    <Typography variant="h3">Fazer login</Typography>
                    <Stack width="100%">
                        <form style={{ width:"100%", display:"flex", flexDirection:"column", gap:"20px" }}>
                            <TextField
                                name="username"
                                label="Username"
                                variant="outlined"
                                required
                                onChange={handleChange}/>
                            <TextField
                                name="password"
                                label="Password"
                                variant="outlined"
                                type="password" required
                                onChange={handleChange}/>
                            <Button size='large' variant="contained" sx={{alignSelf:"end"}}>Login</Button>
                        </form>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Login