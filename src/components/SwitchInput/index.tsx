import { TextField } from "@mui/material"
import { useState } from "react"

const SwitchInput = () => {

    const [edit, setEdit] = useState<boolean>(false)

    return(
        <TextField 
            disabled={!edit}
            onDoubleClick={() => setEdit((prev) => !prev)}/>
    )
}

export default SwitchInput