import { Accordion, AccordionDetails, AccordionSummary, Container, IconButton, List, ListItem, ListItemText, Stack, Typography } from "@mui/material"
import { CustomAppBar, StyledLink } from "../../../components"
import AppBreadcrumbs from "../../../components/Breadcrumbs"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { IAppliedDiscipline, IStudentGroup } from "../../../interfaces"
import { appliedDisciplineService, studentGroupService } from "../../../service"
import AppToast from "../../../utils/AppToast"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const AppliedDisciplinePage = () => {

    const { idStudentGroup, idAppliedDiscipline } = useParams()
    const [studentGroup, setStudentGroup] = useState<IStudentGroup>()
    const [appliedDiscipline, setAppliedDiscipline] = useState<IAppliedDiscipline>()
    const [pageName, setPageName] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)

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
    }, [])

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

                    <Typography variant="h4">Competence Groups</Typography>
                    <div>
                    {   
                        appliedDiscipline &&
                        appliedDiscipline.competenceGroups.map((group, groupIndex) =>
                            <Accordion key={groupIndex}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize:"1.2rem" }}>
                                    {group.description}
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                        {
                                            group.competences ?
                                            group.competences.map(
                                                (competence, competenceIndex) => 
                                                    <ListItem key={competenceIndex}>
                                                        <ListItemText
                                                            primary={competence.description}
                                                            secondary={"Weight: "+competence.weight}
                                                        />
                                                    </ListItem>
                                            ) : <Typography>No competences added</Typography>
                                        }
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                    </div>
                </Stack>
            </Container>
        </>
    )
}

export default AppliedDisciplinePage