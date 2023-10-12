import { NOT_FOUND_TRIGGER_COMMANDS_ARGUMENT, NOT_HAVE_LOGIC } from "./src/const.js"
import { countTheSmileyFaces } from "./src/logic/count_the_smiley_faces.js"
import { findTheOddInt } from "./src/logic/find_the_odd_int.js"
import { shuffling } from "./src/logic/shuffling.js"
import { convertStringArrayToArray, splitStringToArray } from "./src/util.js"
import { isHasArgumentInput } from "./src/validate.js"

const main = () => {
    const trigger = process.argv[2]
    const input = process.argv[3]

    // validate
    if(!trigger){
        console.log(NOT_FOUND_TRIGGER_COMMANDS_ARGUMENT)
        return
    }

    if(trigger != "test" && !isHasArgumentInput(input)){
        return
    }

    switch (trigger) {
        case "shuffling":
            console.log(shuffling(input))
            break;
        case "find_the_odd_int":
            console.log(findTheOddInt(convertStringArrayToArray(input)))
            break;
        case "count_the_smiley_faces":
            console.log(countTheSmileyFaces(splitStringToArray(input)))
            break;
        default:
            console.log(NOT_HAVE_LOGIC, trigger)
    }
}

main()