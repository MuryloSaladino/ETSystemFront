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

        // toastify-color-variables
        --toastify-color-light: #fff;
        --toastify-color-dark: #000000;
        --toastify-color-info: #007bc0;
        --toastify-color-success: #00884a;
        --toastify-color-warning: #ffcf00;
        --toastify-color-error: #ed0007;
        --toastify-color-transparent: rgba(255, 255, 255, 0.7);

        --toastify-icon-color-info: var(--toastify-color-info);
        --toastify-icon-color-success: var(--toastify-color-success);
        --toastify-icon-color-warning: var(--toastify-color-warning);
        --toastify-icon-color-error: var(--toastify-color-error);

        --toastify-toast-width: 320px;
        --toastify-toast-background: #fff;
        --toastify-toast-min-height: 64px;
        --toastify-toast-max-height: 800px;
        --toastify-font-family: sans-serif;
        --toastify-z-index: 9999;

        --toastify-text-color-light: #71767c;
        --toastify-text-color-dark: #fff;

        //Used only for colored theme
        --toastify-text-color-info: #fff;
        --toastify-text-color-success: #fff;
        --toastify-text-color-warning: #fff;
        --toastify-text-color-error: #fff;

        --toastify-spinner-color: #595e62;
        --toastify-spinner-color-empty-area: #e0e2e5;

        // Used when no type is provided
        // toast("**hello**")
        --toastify-color-progress-light: linear-gradient(
            to right,
            #952432,
            #b12739,
            #d42027,
            #69388d,
            #2f3c7e,
            #2a3886,
            #265ea2,
            #307eb6,
            #3aa4cb,
            #05a5ca,
            #0a9c5d,
            #89bc6e,
            #62b16e,
            #328d46,
        );
        // Used when no type is provided
        --toastify-color-progress-dark: #bb86fc;
        --toastify-color-progress-info: var(--toastify-color-info);
        --toastify-color-progress-success: var(--toastify-color-success);
        --toastify-color-progress-warning: var(--toastify-color-warning);
        --toastify-color-progress-error: var(--toastify-color-error);

        // used to control the opacity of the progress trail
        --toastify-color-progress-bgo: .2;
    }

    body{
        font-family: "Roboto" sans-serif;
        background-color: var(--grey-10);
    }
`