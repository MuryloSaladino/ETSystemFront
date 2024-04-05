import { TextField } from "@mui/material"
import { forwardRef, useState } from "react"


const SwitchInput = forwardRef((props:any, ref) => {

    const [edit, setEdit] = useState<boolean>(false)

    return(
        <TextField
            size="small"
            inputRef={ref}
            {...props}            
            onFocus={() => setEdit((prev) => !prev)}
            onBlur={() => setEdit(false)}
            InputProps={{ readOnly: !edit }}
            helperText={edit ? props.helperText : undefined}/>
)})

export default SwitchInput