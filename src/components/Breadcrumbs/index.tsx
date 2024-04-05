import { Breadcrumbs, Typography } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect, useState } from "react";
import { StyledLink } from "..";
import { titleCase } from "../../utils/string";


const AppBreadcrumbs = () => {

    const [links, setLinks] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState<string>("")

    useEffect(() => {
        const windowLinks = window.location.pathname.split("/")
        windowLinks.shift()
        setCurrentPage(windowLinks.pop()!)
        setLinks(windowLinks)
    }, [])

    const handleLink = (link:string):string => {
        const location = window.location.pathname
        return location.substring(0, location.indexOf(link))
    }

    return(
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            {
                links.map((link, index) => 
                    <StyledLink 
                        to={handleLink(link)} 
                        key={index}
                    >
                        {titleCase(link)}
                    </StyledLink>
                )
            }
            {
                currentPage &&
                <Typography fontWeight={600}>{titleCase(currentPage)}</Typography>
            }
        </Breadcrumbs>
    )
}

export default AppBreadcrumbs