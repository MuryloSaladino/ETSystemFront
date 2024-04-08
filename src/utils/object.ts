export const clearEmptyProperties = (obj:{[x: string]: any}) => {
    const newObj:{[x: string]: any} = {}
    let k: keyof {[x: string]: any}
    for(k in obj) {
        if(!(obj[k] === "" || !obj[k])) {
            newObj[k] = obj[k]
        }
    }
    return newObj
}