export const titleCase = (str:string) => {
    let result= ""

    if(str === str.toLowerCase()) {
        return str[0].toUpperCase() + str.slice(1)
    }

    [...str].forEach((char, index) => {
        if(index === 0) {
            result += char.toUpperCase()
        } else if(char === char.toUpperCase()) {
            result += " "+char
        } else {
            result += char
        }
    });

    return result
}