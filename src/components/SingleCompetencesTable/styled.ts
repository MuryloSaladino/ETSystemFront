import styled from "styled-components";

const getColorByStatus = (status:string) => {
    const colors:string[] = ["var(--success)","var(--alert)", "var(--warning)"]
    const statusTypes:string = "ADI"
    return colors[statusTypes.indexOf(status)]
}


export const StyledList = styled.ul`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
`

export const StyledListItem = styled.li<{ status: string }>`
    background-color: ${({status}) => getColorByStatus(status)};
    padding: 15px 30px;

    color: var(--grey-1);

    display: flex;
    justify-content: center;
    align-items: center;
`