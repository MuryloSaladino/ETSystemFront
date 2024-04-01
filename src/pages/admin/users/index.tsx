import { ChangeEvent, useContext, useEffect, useState } from "react"
import { CustomAppBar } from "../../../components"
import { IPaginated, IUserGrouped } from "../../../interfaces"
import { getUsers } from "../../../service/user"
import { MessageContext } from "../../../context/MessageContext"
import { Link, useSearchParams } from "react-router-dom"
import { Container, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const UsersPage = () => {

    const [users, setUsers] = useState<IPaginated<IUserGrouped>>()
    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const { popNotification } = useContext(MessageContext)

    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    };

    useEffect(() => {
        const buildUsers = async () => {
            try {
                const token:string|null = localStorage.getItem("@TOKEN")
                setUsers(await getUsers(token!, searchParams.get("page")!))
            } catch (error) {
                popNotification("Oops! Something went wrong", "error")
            }
        }
        buildUsers()
    }, [searchParams])

    console.log(users)

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>
                    <Typography variant="h4">Users</Typography>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Username</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="right">More Info</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    users?.paginatedData.map(user => 
                                        <TableRow key={user.idUser}>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.email || "Not defined"}</TableCell>
                                            <TableCell align="right"><Link to={user.idUser}><ArrowForwardIcon/></Link></TableCell>
                                        </TableRow>    
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Pagination 
                        count={users?.totalPages} 
                        onChange={handleChange}
                        sx={{ alignSelf:"end" }}/>
                </Stack>
            </Container>

        </>
    )
}

export default UsersPage