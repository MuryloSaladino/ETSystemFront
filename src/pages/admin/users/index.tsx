import { useEffect, useState } from "react"
import { CustomAppBar } from "../../../components"
import { IUser } from "../../../interfaces"

const UsersPage = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {

    }, [])

    return(
        <>
            <CustomAppBar/>


        </>
    )
}

export default UsersPage