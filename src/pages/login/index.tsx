import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Bosch } from '../../components'


const Login = () => {

    return (
        <>
            <Stack height="100vh" width="100vw" direction="column" alignItems="center" justifyContent="center">
                <Stack width="500px" maxWidth="90%" minHeight="40vh" direction="column" alignItems="center" gap="30px">
                    <Bosch/>
                    <Typography variant="h3">Fazer login</Typography>
                    <Stack width="100%" gap="20px">
                        <TextField label="Username" variant="outlined" required/>
                        <TextField label="Password" variant="outlined" type="password" required/>
                    </Stack>
                    <Stack alignSelf="end">
                        <Button size='large' variant="outlined">Login</Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default Login