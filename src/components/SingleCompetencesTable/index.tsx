import { ICompetence } from "../../interfaces/competenceInterfaces"
import { StyledList, StyledListItem } from "./styled"


interface ISingleCompetenceTableProps {
    competences: ICompetence[]
}

export const SingleCompetenceTable = ({competences}:ISingleCompetenceTableProps) => {

    return(
        <StyledList>
            {
                competences.map((element) => <StyledListItem status={element.status}>{element.name}</StyledListItem>)
            }
        </StyledList>
    )
}