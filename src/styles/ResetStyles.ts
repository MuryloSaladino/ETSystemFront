import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 150%;
    }

    ul, ol{
        list-style: none;
    }
`