import { AppBar, Box, Toolbar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
    position: fixed;
    top: 6px;

    background-color: var(--bs-gray-100);
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

export const StyledDrawerBox = styled(Box)`
    position: relative;
    padding: 50px 20px;
`