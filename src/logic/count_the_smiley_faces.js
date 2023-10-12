
export const isSmile = (text) => {
    const lastStr = text.slice(-1)
    return lastStr == ")" || lastStr == "D"
}

export const countTheSmileyFaces = (array) => {
    let countSmile = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(isSmile(element)){
            countSmile++
        }
    }
    return countSmile
}
