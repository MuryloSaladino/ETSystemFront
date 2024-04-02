import { Stack, styled } from "@mui/material";

export const StyledStack = styled(Stack)`
    min-height: 5rem;
    padding: 0.6rem 0;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
`

export const StyledForm = styled("form")`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    button{
        align-self: flex-end;
    }
`