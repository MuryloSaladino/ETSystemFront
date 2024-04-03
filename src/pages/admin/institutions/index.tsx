import { ChangeEvent, useContext, useEffect, useState } from "react";
import { IInstitution, IPaginated } from "../../../interfaces";
import { useSearchParams } from "react-router-dom";
import { MessageContext } from "../../../context/MessageContext";
import { getInstitutions } from "../../../service/institutions";
import { CustomAppBar } from "../../../components";
import { Container, IconButton, Pagination, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DialogForm from "../../../components/DialogForm";


const InstitutionsPage = () => {

    const [institutions, setInstitutions] = useState<IPaginated<IInstitution>>()
    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const { popNotification } = useContext(MessageContext)
    const [open, setOpen] = useState<boolean>(false)
    const [currentInstitution, setCurrentInstitution] = useState<IInstitution|null>(null)

    const handleSubmit = async () => {

    }

    const handleClick = (institution:IInstitution) => {
        setOpen(true)
        setCurrentInstitution(institution)
    }

    const handleClose = () => {
        setOpen(false)
        setCurrentInstitution(null)
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

            <DialogForm
                title="Edit Institution"
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                institution={currentInstitution!}
                formInputs={[
                    {
                        name: "name",
                        Component: () => <TextField/>
                    },
                ]}
            />
        </>
    )
}

export default InstitutionsPage