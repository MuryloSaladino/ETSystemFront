import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --grey-: #ffffff;
        --grey-: #eff1f2;
        --grey-: #e0e2e5;
        --grey-: #c1c7cc;
        --grey-: #a4abb3;
        --grey-: #8a9097;
        --grey-: #71767c;
        --grey-: #595e62;
        --grey-: #4e5256;
        --grey-: #2e3033;
        --grey-: #000000;

        --brand-blue-0: #007bc0;
        --brand-blue-10: #00629a;
        --brand-blue-20: #004975;

        --brand-purple-: #9e2896;
        --brand-purple-: #791d73;
        --brand-purple-: #551151;

        --brand-turquoise-: #18837e;
        --brand-turquoise-: #116864;
        --brand-turquoise-: #0a4f4b;

        --brand-green-: #00884a;
        --brand-green-: #006c3a;
        --brand-green-: #00512a;

        --success-: #00884a;
        --success-: #006c3a;
        --success-: #00512a;

        --alert-: #ffcf00;
        --alert-: #deb300;
        --alert-: #bd9900;

        --warning-: #ed0007;
        --warning-: #be0004;
        --warning-: #920002;
    }

    body{
        font-family: "Roboto" sans-serif;
        background-color: var(--grey-10);
    }
`