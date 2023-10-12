export const factorial = (num) => {
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    
    return (num * factorial(num - 1));
}

export const convertStringArrayToArray = (stringArray) => {
    try {
        return JSON.parse(stringArray)
    } catch (error) {
        throw Error("Invalid Input Is Not Array")
    }
}

export const splitStringToArray = (stringArray) => {
    return stringArray.replaceAll(" ", "").split(",")
}