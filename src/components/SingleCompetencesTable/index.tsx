import { ICompetence } from "../../interfaces/competencesInterfaces"
import { StyledList, StyledListItem } from "./styled"


interface ISingleCompetenceTableProps {
    competences: ICompetence[]
}

export const SingleCompetenceTable = ({competences}:ISingleCompetenceTableProps) => {

    return(
        <StyledList>
            {
                competences.map((element) => <StyledListItem status={element.status}></StyledListItem>)
            }
        </StyledList>
    )
}