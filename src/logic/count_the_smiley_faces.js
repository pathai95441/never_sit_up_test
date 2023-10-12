const isEye = (input) => {
    return (input == ':' || input == ';')
}

const isNose = (input) => {
    return (input == '-' || input == '~')
}

const isMouthSmile = (input) => {
    return (input == ')' || input == 'D')
}

export const isSmile = (text) => {
    if(text.length == 2) {
        return isEye(text[0]) && isMouthSmile(text[1])
    }
    if(text.length == 3) {
        return isEye(text[0]) && isNose(text[1]) && isMouthSmile(text[2])
    }
    return false
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
