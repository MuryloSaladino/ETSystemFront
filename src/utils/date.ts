export const getParsedDate = ():string => {
    const date = new Date()
    const dateParsed = [date.getDate().toString().padStart(2, "0"), (date.getMonth()+1).toString().padStart(2, "0"), date.getFullYear()].join("/")
    
    return dateParsed
}