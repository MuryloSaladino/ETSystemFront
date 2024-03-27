import { Box, styled } from "@mui/material";

export const StyledHeaderBox = styled(Box)(({theme}) => ({
    width: '100vw',
    borderBottom: `1px solid ${theme.palette.grey[700]}99`,
    borderTop: `1px solid ${theme.palette.grey[700]}99`,
    padding: '20px 10px',
    display: 'flex',
    justifyContent: 'space-around'
}))