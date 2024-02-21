import styled from "styled-components";
import { FontType } from "./FontType";


interface ITypographyProps{
    color?: string;
    bold?: boolean;
    font: FontType;
}


export const Title1 = styled.h1<ITypographyProps>`
    font-size: 4rem;
    font-weight: 700;
    color: ${({color}) => color ? color : "var(--color-black)"};

    @media(max-width: 580px) {
        font-size: 2.75rem;
    }
`