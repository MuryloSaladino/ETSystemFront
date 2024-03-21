import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --grey-0: #ffffff;
        --grey-1: #eff1f2;
        --grey-2: #e0e2e5;
        --grey-3: #c1c7cc;
        --grey-4: #a4abb3;
        --grey-5: #8a9097;
        --grey-6: #71767c;
        --grey-7: #595e62;
        --grey-8: #4e5256;
        --grey-9: #2e3033;
        --grey-10: #000000;

        --brand-blue-0: #007bc0;
        --brand-blue-10: #00629a;
        --brand-blue-20: #004975;

        --brand-purple-0: #9e2896;
        --brand-purple-10: #791d73;
        --brand-purple-20: #551151;

        --brand-turquoise-0: #18837e;
        --brand-turquoise-10: #116864;
        --brand-turquoise-20: #0a4f4b;

        --brand-green-0: #00884a;
        --brand-green-10: #006c3a;
        --brand-green-20: #00512a;

        --success-0: #00884a;
        --success-10: #006c3a;
        --success-20: #00512a;

        --alert-1: #ffcf00;
        --alert-10: #deb300;
        --alert-20: #bd9900;

        --warning-0: #ed0007;
        --warning-10: #be0004;
        --warning-20: #920002;

        // toastify-color-variables
        --toastify-color-light: #fff;
        --toastify-color-dark: #2e3033;
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
        background-color: var(--grey-1  );
    }
`