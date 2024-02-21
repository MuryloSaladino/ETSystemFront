import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --grey-0: #0b090a;
        --grey-1: #161a1d;
        --grey-2: #212529;
        --grey-3: #343A40;
        --grey-4: #495057;
        --grey-5: #6C757D;
        --grey-6: #ADB5BD;
        --grey-7: #CED4DA;
        --grey-8: #DEE2E6;
        --grey-9: #E9ECEF;
        --grey-10: #F8F9FA;

        --notification: #118ab2;
        --success: #06d6a0;
        --alert: #ffd166;
        --warning: #ef476f;
    }

    body{
        background-color: var(--grey-10);
    }
`