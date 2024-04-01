import { styled } from "@mui/material";

export const StyledBody = styled("div")`
    padding-top: 130px;
    position: relative;

    display: flex;
    flex-flow: column nowrap;
    gap: 30px;

    ::after{
        content: "";
        background-image: url("../../bosch_colors.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% center;

        width: 100vw;
        height: 6px;
        
        position: absolute;
        left: 0;
        top: 0;
    }
`