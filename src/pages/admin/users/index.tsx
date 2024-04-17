import { ChangeEvent, useEffect, useState } from "react"
import { AccessChips, CustomAppBar } from "../../../components"
import { IPaginated, IUser, IUserGrouped } from "../../../interfaces"
import { useSearchParams } from "react-router-dom"
import { Container, Pagination, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import { FieldValues, useForm } from "react-hook-form"
import EditIcon from '@mui/icons-material/Edit';
import DialogForm from "../../../components/DialogForm"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { DateField } from '@mui/x-date-pickers';
import dayjs from "dayjs";
import { retrieveUsers, updateUser } from "../../../service/requests";


interface IUserRow extends IUser {
    id: number;
}

const UsersPage = () => {

    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const [users, setUsers] = useState<IPaginated<IUserGrouped>>()
    const [open, setOpen] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser|null>(null)
    const { register, handleSubmit, setValue, getValues, reset } = useForm()
    const [loading, setLoading] = useState<boolean>(false)
    const [dateOfBirth, setDateOfBirth] = useState<string>()
    
    const columns:GridColDef[] = [
        { field: "username", headerName: "Username", flex: 0.3, sortable: false },
        { 
            field: "access",
            headerName: "Access",
            flex: 0.3,
            sortable: false,
            renderCell: (params) => <AccessChips user={params.row}/>
        },
        {
            field: "actions",
            type: "actions",
            flex: 0.1,
            headerName: "Actions",
            getActions: (row) => {
                return [
                    <GridActionsCellItem
                        icon={<Tooltip title="Edit" placement="right"><EditIcon/></Tooltip>}
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
    }
    const handleClose = () => {
        setOpen(false)
        setCurrentUser(null)
        reset()
    }

    const submit = async (data:FieldValues) => {
        setLoading(true)
        await updateUser(
            currentUser!.idUser,
            {...data, dateOfBirth: dateOfBirth}
        )
        setLoading(false)
        handleClose()
    }

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true)
            setUsers(await retrieveUsers({
                page: searchParams.get("page") || 1,
                limit: 10
            }))
            setLoading(false)
        }
        loadUsers()
    }, [searchParams, open])

    useEffect(() => {
        if(currentUser) {
            const values = Object.keys(getValues())
            Object.keys(currentUser).forEach((prop) => {
                if(values.includes(prop)) {
                    setValue(prop, currentUser[(prop as keyof IUser)])
                }
            })
        }
    }, [currentUser])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>
                    <AppBreadcrumbs/>

                    <Typography variant="h4">Users</Typography>

                    <DataGrid
                        loading={loading}
                        columns={columns}
                        rows={
                            users?.paginatedData.map((user, index) => ({ id: index, ...user })) 
                            || Array.from({ length: 10 }, (value, index) => {return {id: index, value: value}})
                        }
                        rowSelection={false}
                        hideFooter
                        disableColumnFilter
                    />

                    <Pagination
                        page={Number(searchParams.get("page"))}
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
                    label="Username"
                    {...register("username", { pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,}$/ })}
                    helperText="Must start with a letter"
                />
                <TextField
                    label="Name"
                    {...register("name")}
                />
                <TextField
                    label="Email"
                    {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                    helperText="Must be in a valid email format"
                />
                <TextField
                    label="Contact"
                    {...register("contact", { pattern: /^\(\d{2}\)\d{5}-\d{4}$/ })}
                    helperText="(XX)XXXXX-XXXX"
                />
                <DateField
                    format="DD/MM/YYYY"
                    defaultValue={currentUser?.dateOfBirth ? dayjs(currentUser?.dateOfBirth) : null}
                    onChange={(e) => setDateOfBirth(e ? e.format("YYYY-MM-DD") : "")}
                />
                <TextField
                    label="Password"
                    type="password"
                    {...register("password")}
                />
            </DialogForm>
        </>
    )
}

export default UsersPage