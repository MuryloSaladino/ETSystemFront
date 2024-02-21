import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Homepage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/dashboard");
    }, [])

    return (
        <></>
    )
}