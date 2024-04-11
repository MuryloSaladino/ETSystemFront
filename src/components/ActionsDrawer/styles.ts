import { Box, IconButton, ListItemButton, styled } from "@mui/material";


export const StyledDrawerBox = styled(Box)`
    position: relative;
    padding: 50px 0;
`

export const StyledListItemButton = styled(ListItemButton)`
    display: flex;
    gap: 15px;
    padding: 13px 30px;
`

export const StyledCloseButton = styled(IconButton)`
    position: absolute;
    top: 10px;
    right: 10px;
`