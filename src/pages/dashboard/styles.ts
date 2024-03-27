import { Box, Container, styled } from "@mui/material";

export const StyledHeaderBox = styled(Box)(({theme}) => ({
    width: '100vw',
    padding: '20px 0',
    borderBottom: `1px solid ${theme.palette.grey[700]}99`,
    borderTop: `1px solid ${theme.palette.grey[700]}99`,
}))

export const StyledHeaderContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`