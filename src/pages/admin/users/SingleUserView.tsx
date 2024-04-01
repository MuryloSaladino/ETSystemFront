import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IUser } from "../../../interfaces"
import { MessageContext } from "../../../context/MessageContext"
import { getUser } from "../../../service/user"
import { CustomAppBar } from "../../../components"
import { Container, Typography } from "@mui/material"

const SingleUserView = () => {

    const [user, setUser] = useState<IUser|null>()
    const { popNotification } = useContext(MessageContext)
    const { idUser } = useParams()

    useEffect(() => {
        const buildUser = async () => {
            const token = localStorage.getItem("@TOKEN")
            if(idUser && token) {
                try {
                    setUser(await getUser(idUser, token))
                } catch (error) {
                    popNotification("User not found", "error")
                }
            } else {
                popNotification("Oops! Something went wrong", "error")
            }
        }
        buildUser()
    }, [idUser])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Typography>{user?.username}</Typography>
            </Container>
        </>
    )
}

export default SingleUserView