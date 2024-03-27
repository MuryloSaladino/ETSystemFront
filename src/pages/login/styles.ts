import { Container, Stack, styled } from "@mui/material"

export const StyledStack = styled(Stack)`
    width: 100vw;
    height: 80vh;
`

export const StyledLoginContainer = styled(Container)`
    max-width: 99%;
    margin: 0 auto;

    padding: 40px 15px;
    border: 1px solid var(--bs-gray-400);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`