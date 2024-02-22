import Accordion from "react-bootstrap/Accordion"

import { Outlet } from "react-router-dom"

import { ICompetence } from "../../interfaces/competencesInterfaces"

export const DashboardPage = () => {

    const competences:ICompetence[] = [
        {name: "competencia 1", status: "A"},
        {name: "competencia 2", status: "I"},
        {name: "competencia 3", status: "D"},
        {name: "competencia 4", status: "D"},
        {name: "competencia 5", status: "I"},
        {name: "competencia 6", status: "A"},
    ]

    return(
        <>
            <Accordion>
                {
                    competences.map((competence:ICompetence, index:number) => 
                        <Accordion.Item eventKey={String(index)}>

                        </Accordion.Item>
                    )
                }
            </Accordion>
            <Outlet/>
        </>
    )
}