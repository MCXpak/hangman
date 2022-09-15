const hangman = require('./hangman')

describe('hangman tests', () => {

    describe('Get words from array (wordsToChooseFrom)', () => {

        let getWord = hangman.getWord
        
        it("Exists", () => {
            expect(getWord).toBeDefined()
        })


        it("Returns a string", () => {
            expect(typeof(getWord())).toBe("string")
        })

    })

    describe("Check user input", () => {
        
        let checkInput = hangman.checkInput

        it("Must be a single letter", () => {
            expect(checkInput("a").length).toBe(1)
        })

        it("Throws an error when letter length is not 1", () => {
            expect(() => {
                checkInput("ab")
               }).toThrowError(new Error("Must be a single letter...do you know how this game works???"))
            
        })
    })

    describe("Check if letter in word", () => {

        let checkLetterInWord = hangman.checkLetterInWord

        it("Must return true if letter is a match", () => {
            expect(checkLetterInWord("o","dog")).toEqual(true)
        })

        it("Must return false if letter not in word", () => {
            expect(checkLetterInWord("o","cat")).toEqual(false)
        })

    })

    describe("Create string with correct amount of underscores", () => {
        
        let fillStringWithUnderscore = hangman.fillStringWithUnderscore

        it("Must return underscores equal to length of word", () => {
            expect(fillStringWithUnderscore("testing")).toBe('_______')
        })
    })

    describe("Insert letter in string of underscores if it exists in the word", () => {
        
        let replaceUnderscoreWithLetter = hangman.replaceUnderscoreWithLetter

        it("Must change underscore at index position of letter guessed if that letter is in the word to guess", () => {
            expect(replaceUnderscoreWithLetter('p', '____', 'spin')).toBe('_p__')
        })
    })

})
