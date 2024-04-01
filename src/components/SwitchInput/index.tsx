import { TextField } from "@mui/material"
import { forwardRef, useState } from "react"


const SwitchInput = forwardRef(() => {

    const [edit, setEdit] = useState<boolean>(false)

    return(
        <TextField
            disabled={!edit}
            onDoubleClick={() => setEdit((prev) => !prev)}/>
)})

export default SwitchInput