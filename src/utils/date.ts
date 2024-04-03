export const getParsedCurrentDate = ():string => {
    const date = new Date()
    return [date.getDate().toString().padStart(2, "0"), (date.getMonth()+1).toString().padStart(2, "0"), date.getFullYear()].join("/")
}

export const datetimeToBrazilDate = (datetime:string):string => {
    const date = datetime.substring(0, 10)
    return date.split("-").reverse().join("/")
}

export const brazilDateToDate = (BRDate:string):string => {
    return BRDate.split("/").reverse().join("-")
} 