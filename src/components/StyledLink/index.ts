import { styled } from "@mui/material"
import { Link } from "react-router-dom"

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    max-width: max-content;

    :hover{
        text-decoration: underline;
    }
`

export default StyledLink