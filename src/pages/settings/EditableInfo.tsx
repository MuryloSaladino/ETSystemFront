import { Container, IconButton, TextField, Typography } from "@mui/material"
import { useState } from "react"
import EditIcon from '@mui/icons-material/Edit';


interface EditableInfoProps {
    title: string;
    propValue: string;
} 

const EditableInfo = ({ title, propValue }:EditableInfoProps) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(propValue) 

    return(
        <Container sx={{ margin:"30px 0 10px", display:"flex", justifyContent:"space-between" }}>
            <Typography variant="h6">{title}</Typography>
            {
                edit ?
                
                <form>
                    <TextField value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </form> :

                <Typography variant="h6">
                    {propValue || "Não definido"}
                </Typography>
            }
            <IconButton onClick={() => setEdit((prev) => !prev)}>
                <EditIcon/>
            </IconButton>
        </Container>
    )
}

export default EditableInfo