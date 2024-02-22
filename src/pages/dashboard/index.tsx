import Accordion from "react-bootstrap/Accordion"

import { Outlet } from "react-router-dom"

import { ICompetence } from "../../interfaces/competenceInterfaces"
import { IDiscipline } from "../../interfaces/disciplineInterfaces"
import { SingleCompetenceTable } from "../../components/SingleCompetencesTable"

export const DashboardPage = () => {

    const competencesExample:ICompetence[] = [
        {name: "competencia 1", status: "A"},
        {name: "competencia 2", status: "I"},
        {name: "competencia 3", status: "D"},
        {name: "competencia 4", status: "D"},
        {name: "competencia 5", status: "I"},
        {name: "competencia 6", status: "A"},
    ]

    const disciplines:IDiscipline[] = [
        {name: "Discipline 1", competences: competencesExample},
        {name: "Discipline 2", competences: competencesExample},
        {name: "Discipline 3", competences: competencesExample},
        {name: "Discipline 4", competences: competencesExample},
        {name: "Discipline 5", competences: competencesExample},
        {name: "Discipline 6", competences: competencesExample},
    ]
    

    return(
        <>
            <Accordion>
                {
                    disciplines.map((discipline:IDiscipline, index:number) => 
                        <Accordion.Item eventKey={String(index)}>
                            <Accordion.Header>{discipline.name}</Accordion.Header>
                            <Accordion.Body>
                                <SingleCompetenceTable competences={discipline.competences}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                }
            </Accordion>
            <Outlet/>
        </>
    )
}