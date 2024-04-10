import { Breadcrumbs, Typography } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect, useState } from "react";
import { StyledLink } from "..";
import { titleCase } from "../../utils/string";

interface AppBreadcrumbsProps {
    customCurrentPage?: string;
    customPath?: string;
} 


const AppBreadcrumbs = ({ customCurrentPage, customPath }:AppBreadcrumbsProps) => {

    const [links, setLinks] = useState<string[]>([])
    const [currentPage, setCurrentPage] = useState<string>()

    useEffect(() => {
        const windowLinks = customPath 
            ? customPath.split("/") 
            : window.location.pathname.split("/")
        windowLinks.shift()
        const popedString = windowLinks.pop()!
        setCurrentPage(popedString)
        setLinks(windowLinks)
    }, [customCurrentPage, customPath])

    const handleLink = (link:string):string => {
        const location = window.location.pathname
        return location.substring(0, location.indexOf("/", location.indexOf(link)))
    }

    return(
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <StyledLink to={"/"}>
                <Typography>{"Home"}</Typography>
            </StyledLink>
            {
                links.filter(link => link.length != 36).map((link, index) => 
                    <StyledLink 
                        to={handleLink(link)} 
                        key={index}
                    >
                        <Typography>{titleCase(link)}</Typography>
                    </StyledLink>
                )
            }
            {
                currentPage &&
                <Typography
                    fontWeight={600}
                    sx={{ textDecoration: "underline" }}
                >
                    {customCurrentPage || titleCase(currentPage)}
                </Typography>
            }
        </Breadcrumbs>
    )
}

export default AppBreadcrumbs