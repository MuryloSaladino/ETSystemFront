import styled from "styled-components";

const Button = styled.button`
    width: max-content;
    height: 50px;

`

export const PrimaryButton = styled(Button)`
    background-color: var();
    
    color: var();

    &:hover{
        background-color: var();
    
        color: var();
    }
`

export const SecondaryButton = styled(Button)`
    background-color: var();

    color: var();

    
    &:hover{
        background-color: var();

        color: var();
    }
`

export const TertiaryButton = styled(Button)`
    background-color: var();

    color: var();

    &:hover{
        background-color: var();

        color: var();
    }
`

export const IntegratedButton = styled(Button)`
    color: var();

    &:hover{
        color: var();
    }
`

export const ButtonContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`