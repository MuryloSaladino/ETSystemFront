import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { IInstitution } from "../../interfaces";
import React from "react";

interface IInputGeneration {
    name: string;
    Component: () => React.JSX.Element;
}

interface ICustomDialogProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: () => Promise<void>
    formInputs: IInputGeneration[];
    title: string;
    institution: IInstitution;
}

const DialogForm = ({open, handleClose, formInputs, title, institution, handleSubmit}:ICustomDialogProps) => {



    return(
        <Dialog 
            open={open}
            onClose={handleClose}>

            <DialogTitle>{title}</DialogTitle>
            <form>
                <DialogContent>
                    {
                        formInputs.map(FormInput => 
                            <FormInput.Component key={FormInput.name} />
                        )
                    }
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