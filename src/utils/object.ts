export const clearEmptyProperties = (obj:{[x: string]: any}) => {
    let k: keyof {[x: string]: any}
    for(k in obj) {
        if(obj[k] === "") {
            obj[k] = undefined
        }
    }
}