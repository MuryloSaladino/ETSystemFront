import styled from "styled-components";
import { FontType, getFont } from "./FontType";


interface ITypographyProps{
    color?: string;
    bold?: boolean;
    font?: FontType;
}

export const Title1 = styled.h1<ITypographyProps>`
    font-size: 4rem;
    font-weight: 600;
    font-family: ${({font}) => font ? getFont(font) : "Roboto"}, sans-serif;
    color: ${({color}) => color || "var(--color-black)"};

    @media(max-width: 580px) {
        font-size: 2.75rem;
    }
`
export const Title2 = styled.h2<ITypographyProps>`
    font-size: 2.5rem;
    font-weight: 600;
    font-family: ${({font}) => font ? getFont(font) : "Roboto"}, sans-serif;
    color: ${({color}) => color || "var(--color-black)"};

    @media(max-width: 580px) {
        font-size: 1.875rem;
    }
`
export const Title3 = styled.h3<ITypographyProps>`
    font-size: 1.5rem;
    font-weight: 600;
    font-family: ${({font}) => font ? getFont(font) : "Roboto"}, sans-serif;
    color: ${({color}) => color || "var(--color-black)"};

    @media(max-width: 580px) {
        font-size: 1rem;
    }
`