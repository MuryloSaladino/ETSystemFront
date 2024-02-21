import styled from "styled-components";
import { FontType, getFont } from "./FontType";


interface ITypographyProps{
    color?: string;
    bold?: boolean;
    font: FontType;
}


export const Paragraph = styled.p<ITypographyProps>`
    font-size: 1rem;
    font-weight: ${({bold}) => bold ? 400 : 600};
    font-family: ${({font}) => getFont(font)} sans-serif;
    color: ${({color}) => color || "var(--color-black)"};

    @media(max-width: 580px) {
        font-size: 0.875rem;
    }
`