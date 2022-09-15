const prompt = require('prompt-sync')();

let previousGuess = []

const wordsToChooseFrom = ['base', 'queue', 'leak', 'summer', 'occupation', 'fault', 'global', 'title', 'gas', 'loyalty', 
                            'series', 'hardship', 'publication', 'integrated', 'judgment', 'find', 'subject', 'study', 'friend', 'customer']


const getWord = () => {
    let wordIndex = Math.floor(Math.random() * 20); // 0 to 19 random number
    return wordsToChooseFrom[wordIndex]
}


const checkInput = (letter) => {
    if(letter.length > 1){
        throw 'Must be a single letter...do you know how this game works???'
    }
    return letter
}

const checkLetterInWord = (letter, word) => {
    if (previousGuess.includes(letter) == true ){
         return false
    } else {
        previousGuess.push(letter)
        if (word.indexOf(letter) === -1){
            return false
        } else {
            return true
        }
    }
}

const fillStringWithUnderscore = (wordToGuess) => {
    let str = ""
    for(let i = 0; i<wordToGuess.length; i++){
        str += '_'
    }
    return str
}

const replaceUnderscoreWithLetter = (guess, underscoreStr, word) => {
    console.log(underscoreStr.length)
    let indexArr = []
    for(let i = 0; i < word.length; i++){
        if(word.charAt(i) == guess){
            indexArr.push(i)
        }
    }

    underscoreStr = underscoreStr.split('')
    for(const index of indexArr){
        underscoreStr[index] = guess
    }
    underscoreStr = underscoreStr.join('');

    
    return underscoreStr
}


const game = () => {

    let wordToGuess = getWord();

    let underscoreStr = fillStringWithUnderscore(wordToGuess)

    const guessMax = 6

    let guessCount = 0;

    while(underscoreStr.includes('_') == true && guessCount <= guessMax ){
        let guess = prompt('Enter a letter: ');

        guess = checkInput(guess)

        let result = checkLetterInWord(guess, wordToGuess) //returns true or false or letter if letter guessed already

        console.log(result)
        
        if(result == guess){
            console.log("You've already guessed this letter! Try again!") 
            
        } else if (result){
            underscoreStr = replaceUnderscoreWithLetter(guess, underscoreStr, wordToGuess)
            console.log(`Good guess! '${underscoreStr}'`)

        } else {
            guessCount++
            console.log("Bad guess, try again!")
        }

    }

    if(guessCount > guessMax){
        console.log("You ran out of guesses! word was " + wordToGuess)
    } else {
        console.log("You guessed the word!")
    }

}

// game();

module.exports = {
    getWord,
    checkInput,
    checkLetterInWord,
    fillStringWithUnderscore,
    replaceUnderscoreWithLetter
}
