import styled from "styled-components";

export const LoginMain = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 500px;
    max-width: 95%;
    margin: auto;

    padding: 30px 10px;
    border: solid 1px var(--grey-8);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    form{
        width: 70%;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`