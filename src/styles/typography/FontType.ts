export enum FontType{
    PROTEST_RIOT,
    FREDOKA,
    OSWALD,
    ROBOTO
}


export function getFont(font:FontType) {
    switch(font) {
        case FontType.PROTEST_RIOT:
            return '"Protest Riot"'
        case FontType.FREDOKA:
            return '"Fredoka"'
        case FontType.OSWALD:
            return '"Oswald"'
        case FontType.ROBOTO:
        default:
            return '"Roboto"'
    }
} 