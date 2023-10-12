import { ARRAY_NOT_HAVE_OCCURS_ODD_TIME } from "../const.js"

export const findTheOddInt = (array) => {
    const frequency = {}

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if(!frequency[element]){
            frequency[element] = 1
        } else {
            frequency[element] = frequency[element] + 1
        }
    }

    for (const [key, val] of Object.entries(frequency)) {
        if(parseInt(val) % 2 != 0) {
            return { number: parseInt(key), frequency: val }
        }
    }

    return ARRAY_NOT_HAVE_OCCURS_ODD_TIME
}