import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { ReactNode } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";


interface ICustomDialogProps {
    title: string;
    open: boolean;
    handleClose: () => void;
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
    submit: (data:FieldValues) => Promise<void>;
    children?: ReactNode;
}

const DialogForm = ({open, handleClose, title, handleSubmit, submit, children}:ICustomDialogProps) => {

    return(
        <Dialog 
            open={open}
            onClose={handleClose}>

            <DialogTitle>{title}</DialogTitle>
            <form onSubmit={handleSubmit((data) => submit(data))}>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Send</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default DialogForm