import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Container, Divider, Fab, IconButton, List, ListItem, ListItemText, Stack, TextField, Tooltip, Typography } from "@mui/material"
import { ISubmitModeCreation, SubmitMode, SubmitModeList } from "./submits"
import { CustomAppBar, DialogForm, StyledLink } from "../../../../components"
import AppBreadcrumbs from "../../../../components/Breadcrumbs"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IAppliedDiscipline, IStudentGroup } from "../../../../interfaces"
import { appliedDisciplineService, competenceGroupService, competenceService, studentGroupService } from "../../../../service"
import AppToast from "../../../../utils/AppToast"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from "react-hook-form"
import { titleCase } from "../../../../utils/string"

const submitModesPayload:ISubmitModeCreation[] = [
    {
        entity: "competenceGroup",
        action: "create",
        service: competenceGroupService.createCompetenceGroup,
        feedback: "Group created"
    },
    {
        entity: "competence",
        action: "create",
        service: competenceService.createCompetence,
        feedback: "Competence created"
    },
    {
        entity: "competenceGroup",
        action: "edit",
        service: competenceGroupService.updateCompetenceGroup,
        feedback: "Group updated"
    },
    {
        entity: "competence",
        action: "edit",
        service: competenceService.updateCompetence,
        feedback: "Competence updated"
    }
]


const AppliedDisciplinePage = () => {

    const { register, handleSubmit, reset, setValue } = useForm()
    const { idStudentGroup, idAppliedDiscipline } = useParams()
    const [studentGroup, setStudentGroup] = useState<IStudentGroup>()
    const [appliedDiscipline, setAppliedDiscipline] = useState<IAppliedDiscipline>()
    const [pageName, setPageName] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [entityId, setEntityId] = useState<string>("")
    const [render, setRender] = useState<boolean>(false)
    
    const handleClose = () => {
        setOpen(false)
        reset()
        setRender((prev) => !prev)
    }
    const submitModes = new SubmitModeList( submitModesPayload, handleClose)
    const [submitMode, setSubmitMode] = useState<SubmitMode>(submitModes.list[0])

    const handleClickCompetenceGroup = (id:string) => () => {
        setSubmitMode(submitModes.list[0])
        setOpen(true)
        setEntityId(id)
    }
    const handleClickCompetence = (id:string) => () => {
        setSubmitMode(submitModes.list[1])
        setOpen(true)
        setEntityId(id)
    }
    const handleClickCompetenceGroupEdit = (id:string, description:string) => () => {
        setSubmitMode(submitModes.list[2])
        setOpen(true)
        setEntityId(id)
        setValue("description", description)
    }
    const handleClickCompetenceEdit = (id:string, description:string, weight:number) => () => {
        setSubmitMode(submitModes.list[3])
        setOpen(true)
        setEntityId(id)
        setValue("description", description)
        setValue("weight", weight)
    }

    const deleteGroup = async (id:string) => {
        try {
            
        } catch (error) {
            
        }
    }
    const deleteCompetence = async (id:string) => {
        
    }

    useEffect(() => {
        const retrieveGroupAndDiscipline = async () => {
            setLoading(true)
            try {
                setStudentGroup(
                    await studentGroupService
                        .getStudentGroup(idStudentGroup!)
                )
                setAppliedDiscipline(
                    await appliedDisciplineService
                        .getAppliedDiscipline(idAppliedDiscipline!)
                )
            } catch (error) {
                if(error instanceof Error) {
                    AppToast.notifyError(error)
                }
            } finally {
                setLoading(false)
            }
        }
        retrieveGroupAndDiscipline()
    }, [render])

    useEffect(() => {
        if(!loading) {
            setPageName(
                (studentGroup ? studentGroup.name : "Student Group") + " - " +
                (appliedDiscipline ? appliedDiscipline.disciplineName : "Discipline")
            )
        }
    }, [studentGroup, appliedDiscipline])

    return(
        <>
            <CustomAppBar/>

            <Container maxWidth="md">
                <Stack spacing={3}>
                    <AppBreadcrumbs customCurrentPage={pageName}/>

                    <StyledLink to={"/admin/students/"+idStudentGroup}>
                        <IconButton>
                            <ArrowBackIcon/>
                        </IconButton>
                    </StyledLink>

                    <Stack flexDirection="row" gap={2}>
                        <Typography variant="h4">Competence Groups</Typography>
                        <Tooltip title="Add CompetenceGroup">
                                <Fab color="default" size="small" onClick={handleClickCompetenceGroup(idAppliedDiscipline!)}>
                                    <AddIcon/>
                                </Fab>
                        </Tooltip>
                    </Stack>
                    <div>
                    {   
                        appliedDiscipline &&
                        appliedDiscipline.competenceGroups.map((group, groupIndex) =>
                            <Accordion key={groupIndex} disableGutters>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize:"1.2rem" }}>
                                    {group.description}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        <Divider/>
                                        {
                                            group.competences ?
                                            group.competences.map(
                                                (competence, competenceIndex) => 
                                                    <div key={competenceIndex}>
                                                        <ListItem>
                                                            <ListItemText
                                                                primary={competence.description}
                                                                secondary={"Weight: "+competence.weight}
                                                                secondaryTypographyProps={{ align: "center", color: "info.main", marginTop: 1 }}
                                                            />
                                                            <Stack justifyContent="space-around">
                                                                <IconButton 
                                                                    onClick={ handleClickCompetenceEdit(
                                                                        competence.idCompetence,
                                                                        competence.description,
                                                                        competence.weight
                                                                    )}
                                                                >
                                                                    <EditIcon/>
                                                                </IconButton>
                                                                <IconButton>
                                                                    <DeleteIcon/>
                                                                </IconButton>
                                                            </Stack>
                                                        </ListItem>
                                                        <Divider/>
                                                    </div>
                                            ) : <Typography>No competences added</Typography>
                                        }
                                    </List>
                                </AccordionDetails>
                                <AccordionActions>
                                    <IconButton onClick={handleClickCompetence(group.idCompetenceGroup)}>
                                        <AddIcon fontSize="large"/>
                                    </IconButton>
                                    <IconButton onClick={handleClickCompetenceGroupEdit(group.idCompetenceGroup, group.description)}>
                                        <EditIcon fontSize="large"/>
                                    </IconButton>
                                    <IconButton>
                                        <DeleteIcon fontSize="large"/>
                                    </IconButton>
                                </AccordionActions>
                            </Accordion>
                        )
                    }
                    </div>
                </Stack>
            </Container>

            <DialogForm
                title={titleCase(submitMode.action)+" "+titleCase(submitMode.entity)}
                open={open}
                submit={submitMode.callback(entityId)}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
            >
                <TextField
                    label="Description"
                    {...register("description")}
                />
                {
                    submitMode.entity === "competence" &&
                    <TextField
                        label="Weight"
                        {...register("weight")}
                        type="number"
                    />
                }
            </DialogForm>
        </>
    )
}

export default AppliedDisciplinePage