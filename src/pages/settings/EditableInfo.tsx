import { Box, Container, IconButton, TextField, Typography } from "@mui/material"
import { MutableRefObject, useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";


interface EditableInfoProps {
    nameProp: string;
    valueProp: string;
    useFormRegister: UseFormRegister<FieldValues>;
    useFormSetValue: UseFormSetValue<FieldValues>;
} 

const EditableInfo = ({ nameProp, valueProp, useFormRegister, useFormSetValue }:EditableInfoProps) => {

    const [edit, setEdit] = useState<boolean>(false)

    const handleClick = () => setEdit((prev) => !prev)
    
    useEffect(() => {
        useFormSetValue(nameProp, valueProp);
    }, [valueProp, edit])

    return(
        <Container sx={{ margin:"30px 0 10px", display:"flex", justifyContent:"space-between" }}>
            <Typography variant="h6">{nameProp}</Typography>
            <Box sx={{ display:"flex", alignItems:"center", gap:2 }}>
                {
                    edit ?
                    <TextField
                        size="small"
                        {...useFormRegister(nameProp)}
                    /> :
                    <Typography variant="h6">
                        {valueProp || "Não definido"}
                    </Typography>
                }
                {
                    edit ?
                    <Box>
                        <IconButton type="submit">
                            <CheckIcon/>
                        </IconButton>
                        <IconButton onClick={handleClick}>
                            <CancelIcon/>
                        </IconButton>
                    </Box> :
                    <IconButton onClick={handleClick}>
                        <EditIcon/>
                    </IconButton>
                }
            </Box>
        </Container>
    )
}

export default EditableInfo