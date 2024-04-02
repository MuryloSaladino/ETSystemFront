import { TextField } from "@mui/material"
import { forwardRef, useState } from "react"


const SwitchInput = forwardRef((props, ref) => {

    const [edit, setEdit] = useState<boolean>(false)

    return(
        <TextField
            inputRef={ref}
            {...props}            
            InputProps={{ readOnly: !edit }}
            onDoubleClick={() => setEdit((prev) => !prev)}
            size="small"/>
)})

export default SwitchInput