import { ChangeEvent, useEffect, useState } from "react"
import { CustomAppBar } from "../../../components"
import { IPaginated, IUser, IUserGrouped } from "../../../interfaces"
// import { getUsers } from "../../../service/user"
import { userService } from "../../../service";
import { useSearchParams } from "react-router-dom"
import { Container, Pagination, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import { FieldValues, useForm } from "react-hook-form"
import EditIcon from '@mui/icons-material/Edit';
import DialogForm from "../../../components/DialogForm"
import { datetimeToBrazilDate } from "../../../utils/date"


interface IUserRow extends IUser {
    id: number;
}

const UsersPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const [users, setUsers] = useState<IPaginated<IUserGrouped>>()
    const [open, setOpen] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser|null>(null)
    const { register, handleSubmit, setValue, getValues } = useForm()
    

    const columns:GridColDef[] = [
        { field: "username", headerName: "Username", flex: 0.3, sortable: false },
        { field: "email", headerName: "Email", flex: 0.3, sortable: false },
        {
            field: "actions",
            type: "actions",
            flex: 0.1,
            headerName: "Actions",
            getActions: (row) => {
                return [
                    <GridActionsCellItem
                        icon={<Tooltip title="Edit"><EditIcon/></Tooltip>}
                        onClick={() => handleClick(row.row)}
                        label="Edit"
                    />
                ]
            }
        },
    ]

    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    }
    const handleClick = (user:IUserRow) => {
        setOpen(true)
        setCurrentUser(user)
        setValue("name", user.name)
    }
    const handleClose = () => {
        setOpen(false)
        setCurrentUser(null)
    }

    const submit = async (data:FieldValues) => {
        console.log(data)
        console.log(currentUser)
    }

    useEffect(() => {
        const retrieveUsers = async () => {
            try {
                const token:string|null = localStorage.getItem("@TOKEN")
                setUsers(await userService.getUsers(Number(searchParams.get("page"))!));
            } catch (error) {

            }
        }
        retrieveUsers()
    }, [searchParams])

    useEffect(() => {
        if(currentUser) {
            const values = Object.keys(getValues())
            Object.keys(currentUser).forEach((prop) => {
                if(values.includes(prop)) {
                    setValue(prop, currentUser[(prop as keyof IUser)])
                }
                if(currentUser.dateOfBirth) {
                    setValue("dateOfBirth", datetimeToBrazilDate(currentUser.dateOfBirth))
                }
            })
        }
    }, [currentUser])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>
                    <Typography variant="h4">Users</Typography>

                    {
                        users &&
                        <DataGrid
                            columns={columns}
                            rows={users.paginatedData.map((user, index) =>
                                ({
                                    id: index, 
                                    ...user
                                })
                            )}
                            rowSelection={false}
                            hideFooter
                        />
                    }

                    <Pagination 
                        count={users?.totalPages} 
                        onChange={handleChange}
                        sx={{ alignSelf:"end" }}/>
                </Stack>
            </Container>

            <DialogForm
                title="Edit User"
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                submit={submit}
            >
                <TextField 
                    {...register("username", { pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,}$/ })}
                    helperText="Must start with a letter"/>
                <TextField
                    {...register("name")}/>
                <TextField
                    {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                    helperText="Must be in a valid email format"/>
                <TextField
                    {...register("contact", { pattern: /^\(\d{2}\)\d{5}-\d{4}$/ })}
                    helperText="(XX)XXXXX-XXXX"/>
                <TextField
                    {...register("dateOfBirth", { pattern: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/ })}
                    helperText="DD/MM/YYYY"/>
            </DialogForm>
        </>
    )
}

export default UsersPage