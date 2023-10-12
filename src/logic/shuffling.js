import { factorial } from "../util.js"

// ** Find all the probabilities for ensure length of output array should equal probabilities
// ref: https://math.stackexchange.com/questions/2131/permutations-with-duplicates
export const findShufflingProbabilities = (input) => {
    const textFrequency = {}
    for (let i = 0; i < input.length; i++) {
        const character = input[i]
        if(!textFrequency[character]){
            textFrequency[character] = 1
        } else {
            textFrequency[character] = textFrequency[character] + 1
        }
    }
    let duplicates = 1
    let probabilities = factorial(input.length)
    for (const [_, val] of Object.entries(textFrequency)) {
        duplicates = duplicates * factorial(val)
    }

    return probabilities / duplicates
}

export const shuffling = (string) => {
    const result = [];
    const swap = (input, current = "") => {
        if (input.length === 0) {
            result.push(current);
            return
        }
    
        const usedChars = {};
    
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (usedChars[char]) {
                continue;
            }
            usedChars[char] = true
            const remainingChars = input.slice(0, i) + input.slice(i + 1);
            swap(remainingChars, current + char);
        }
    }
  
    swap(string);
    return result;
}
  
