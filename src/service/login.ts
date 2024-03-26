import api from "./api"

export const login = async (username:string, password:string) => {
    try {
        const response = await api.post("/login", {
            username: username,
            password: password
        })
        const { idUser, token } = response.data

        localStorage.setItem("@IDUSER", idUser)
        localStorage.setItem("@TOKEN", token)
    } catch (error) {
        console.error(error)
    }
}