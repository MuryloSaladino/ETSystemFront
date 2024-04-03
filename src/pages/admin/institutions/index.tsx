import { ChangeEvent, useContext, useEffect, useState } from "react";
import { IInstitution, IPaginated } from "../../../interfaces";
import { useSearchParams } from "react-router-dom";
import { MessageContext } from "../../../context/MessageContext";
import { getInstitutions } from "../../../service/institutions";
import { CustomAppBar } from "../../../components";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


const InstitutionsPage = () => {

    const [institutions, setInstitutions] = useState<IPaginated<IInstitution>>()
    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const { popNotification } = useContext(MessageContext)
    const [open, setOpen] = useState<boolean>(false)
    const [currentInstitution, setCurrentInstitution] = useState<IInstitution|null>(null)

    const handleClick = (institution:IInstitution) => {
        setOpen(true)
        setCurrentInstitution(institution)
    }

    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    };

    useEffect(() => {
        const buildUsers = async () => {
            try {
                const token:string|null = localStorage.getItem("@TOKEN")
                setInstitutions(await getInstitutions(token!, searchParams.get("page")!))
            } catch (error) {
                popNotification("Oops! Something went wrong", "error")
            }
        }
        buildUsers()
    }, [searchParams])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>
                    <Typography variant="h4">Institutions</Typography>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    institutions?.paginatedData.map(institution => 
                                        <TableRow key={institution.idInstitution}>
                                            <TableCell>{institution.name}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={() => handleClick(institution)}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>    
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Pagination 
                        count={institutions?.totalPages} 
                        onChange={handleChange}
                        sx={{ alignSelf:"end" }}/>
                </Stack>
            </Container>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        setOpen(false);
                    },
                }}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default InstitutionsPage