import { ChangeEvent, useContext, useEffect, useState } from "react";
import { IInstitution, IPaginated } from "../../../interfaces";
import { useSearchParams } from "react-router-dom";
import { CustomAppBar } from "../../../components";
import { Chip, Container, FormControlLabel, FormLabel, IconButton, Pagination, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DialogForm from "../../../components/DialogForm";
import { FieldValues, useForm } from "react-hook-form";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import AppBreadcrumbs from "../../../components/Breadcrumbs";
import AddIcon from '@mui/icons-material/Add';
import { UserContext } from "../../../context/UserContext";
import { createInstitution, retrieveInstitutions, updateInstitution } from "../../../service/requests";


interface IInstitutionRow extends IInstitution {
    id: number;
}

const InstitutionsPage = () => {

    const [institutions, setInstitutions] = useState<IPaginated<IInstitution>>()
    const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
    const [open, setOpen] = useState<boolean>(false)
    const [currentInstitution, setCurrentInstitution] = useState<IInstitution|null>(null)
    const { register, handleSubmit, setValue } = useForm()
    const { user } = useContext(UserContext)
    const [isBosch, setIsBosch] = useState<boolean>(false)

    const columns:GridColDef[] = [
        { field: "name", headerName: "Name", flex: 0.5, sortable: false },
        {
            field: "origin",
            headerName: "Origin",
            flex: 0.3,
            renderCell: (params) => params.row.isBosch ? <Chip label="Bosch" color="primary"/> : ""
        },
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
        setIsBosch(institution.isBosch)
        setValue("name", institution.name)
    }
    const handleClose = () => {
        setOpen(false)
        setCurrentInstitution(null)
        setValue("name", "")
    }
    const handleChange = (e:ChangeEvent<unknown>, value:number) => {
        e.preventDefault()
        setSearchParams({ page: String(value) });
    };

    const submit = async (data:FieldValues) => {
        if(currentInstitution) {
            await updateInstitution(currentInstitution.idInstitution, data)
        } else {
            await createInstitution({...data, isBosch: isBosch})
        }
        handleClose()
    }

    useEffect(() => {
        const loadInstitutions = async () => {
            setInstitutions(await retrieveInstitutions({
                page: searchParams.get("page") || 1,
                limit: 10
            }))
        }
        loadInstitutions()
    }, [searchParams, open])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>
                    <AppBreadcrumbs/>
                    
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography variant="h4">Institutions</Typography>
                        {
                            user?.institution.isBosch &&
                            <IconButton size="large" onClick={() => setOpen(true)}><AddIcon fontSize="large"/></IconButton>
                        }
                    </Stack>


                    <DataGrid
                        columns={columns}
                        rows={institutions?.paginatedData.map((institution, index) =>
                            ({
                                id: index, 
                                ...institution
                            })
                        ) || Array.from({ length: 10 }, (value, index) => {return {id: index, value: value}})}
                        rowSelection={false}
                        hideFooter
                        disableColumnFilter
                    />
                    

                    <Pagination 
                        page={Number(searchParams.get("page"))}
                        count={institutions?.totalPages} 
                        onChange={handleChange}
                        sx={{ alignSelf:"end" }}/>
                </Stack>
            </Container>

            <DialogForm
                title={(currentInstitution ? "Edit" : "Create")+" Institution"}
                open={open}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                submit={submit}
            >
                <TextField
                    {...register("name")}
                    label="Name"
                    required
                />
                {
                    user?.institution.isBosch &&
                    <RadioGroup defaultValue={isBosch} onChange={(e) => setIsBosch(Boolean(e.target.value))}>
                        <FormLabel>Institution Origin</FormLabel>
                        <FormControlLabel value={true} control={<Radio/>} label="Bosch"/>
                        <FormControlLabel value={false} control={<Radio/>} label="Other"/>
                    </RadioGroup>
                }
            </DialogForm>
        </>
    )
}

export default InstitutionsPage