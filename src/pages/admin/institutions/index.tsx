import { ChangeEvent, useContext, useEffect, useState } from "react";
import { IInstitution, IPaginated } from "../../../interfaces";
import { useSearchParams } from "react-router-dom";
import { MessageContext } from "../../../context/MessageContext";
import { getInstitutions } from "../../../service/institutions";
import { CustomAppBar } from "../../../components";
import { Container, Pagination, Stack, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DialogForm from "../../../components/DialogForm";
import { FieldValues, useForm } from "react-hook-form";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";


interface IInstitutionRow extends IInstitution {
    id: number;
}

const InstitutionsPage = () => {

    const [institutions, setInstitutions] = useState<IPaginated<IInstitution>>()
    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const [open, setOpen] = useState<boolean>(false)
    const [currentInstitution, setCurrentInstitution] = useState<IInstitution|null>(null)
    const { popNotification } = useContext(MessageContext)
    const { register, handleSubmit, setValue } = useForm()

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name", flex: 0.5, sortable: false },
        {
            field: "actions",
            type: "actions",
            flex: 0.1,
            headerName: "Actions",
            getActions: (row) => {
                return [
                    <GridActionsCellItem
                        icon={<EditIcon/>}
                        onClick={() => handleClick(row.row)}
                        label="Edit"
                    />
                ]
            }
        },
    ]
    

    const handleClick = (institution:IInstitutionRow) => {
        setOpen(true)
        setCurrentInstitution(institution)
        setValue("name", institution.name)
    }

    const handleClose = () => {
        setOpen(false)
        setCurrentInstitution(null)
    }

    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    };

    const submit = async (data:FieldValues) => {
        popNotification("nlbalvas")
    }

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

                    {
                        institutions ? 
                        <DataGrid
                            columns={columns}
                            rows={institutions.paginatedData.map((institution, index) =>
                                ({
                                    id: index, 
                                    ...institution
                                })
                            )}
                            rowSelection={false}
                            hideFooter
                        /> :
                        <div>Tem nada ai</div>
                    }

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
                submit={submit}
            >
                <TextField
                    {...register("name")}
                    label="Name"
                />
            </DialogForm>
        </>
    )
}

export default InstitutionsPage