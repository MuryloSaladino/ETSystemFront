import { TextField } from "@mui/material"
import { forwardRef, useState } from "react"


const SwitchInput = forwardRef((props:any, ref) => {

    const [edit, setEdit] = useState<boolean>(false)

    return(
        <TextField
            inputRef={ref}
            {...props}            
            InputProps={{ readOnly: !edit }}
            onDoubleClick={() => setEdit((prev) => !prev)}
            size="small"
            helperText={edit ? props.helperText : undefined}/>
)})

export default SwitchInput