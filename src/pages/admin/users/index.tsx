import { ChangeEvent, useContext, useEffect, useState } from "react"
import { CustomAppBar } from "../../../components"
import { IPaginated, IUserGrouped } from "../../../interfaces"
import { getUsers } from "../../../service/user"
import { MessageContext } from "../../../context/MessageContext"
import { useSearchParams } from "react-router-dom"
import { Pagination } from "@mui/material"

const UsersPage = () => {

    const [users, setUsers] = useState<IPaginated<IUserGrouped>>()
    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const { popNotification } = useContext(MessageContext)

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
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

            <Pagination count={users?.totalPages} onChange={handleChange}/>
        </>
    )
}

export default UsersPage