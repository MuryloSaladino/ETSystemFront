import { Box, IconButton, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { titleCase } from "../../utils/string";


interface EditableInfoProps {
    nameProp: string;
    valueProp: string | null;
    useFormRegister: UseFormRegister<FieldValues>;
    useFormSetValue: UseFormSetValue<FieldValues>;
    pattern: RegExp
} 

const EditableInfo = ({ nameProp, valueProp, useFormRegister, useFormSetValue, pattern }:EditableInfoProps) => {

    const [edit, setEdit] = useState<boolean>(false)
    const handleClick = () => setEdit((prev) => !prev)
    
    useEffect(() => {
        useFormSetValue(nameProp, valueProp || "");
    }, [valueProp, edit])

    return(
        <Box sx={{ margin:"20px 0", display:"flex", justifyContent:"space-between" }}>
            <Typography variant="h6">{titleCase(nameProp)}</Typography>
            <Box sx={{ display:"flex", alignItems:"center", gap:2 }}>
                {
                    edit ?
                    <TextField
                        size="small"
                        {...useFormRegister(nameProp, { pattern: pattern })}
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
        </Box>
    )
}

export default EditableInfo