import { NOT_FOUND_INPUT_VALUE } from "./const.js"

export const isHasArgumentInput = (input) => {
    if(!input){
        console.log(NOT_FOUND_INPUT_VALUE)
    }
    return !!input
}