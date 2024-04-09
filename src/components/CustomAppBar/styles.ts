import { AppBar, Box, Toolbar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
    position: fixed;
    top: 6px;

    background-color: rgb(20 20 20);
`

export const StyledToolbar = styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const StyledHeaderBox = styled(Box)`
    display: flex;
    align-items: center;
    gap: 1.125rem;
`