import { useParams } from "react-router-dom"

const SingleUserView = () => {

    const { idUser } = useParams()

    return(
        <div>{idUser}</div>
    )
}

export default SingleUserView