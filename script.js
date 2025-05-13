function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

const randomly_generated_number = getRandomValue(0, 100);
console.log(randomly_generated_number)

//if they click submit, it should take the value and compare it randomly_generated_number
guesses_lesser_than = []
guesses_greater_than = []
const submissionButton = document.getElementById("submission_btn")
submissionButton.addEventListener("click", function(){
    //grab the text in the texbox 
    const userInput = document.getElementById("guess");
    const guess = userInput.value;

    if (guess == randomly_generated_number){
        alert("You got it!")
    }else if (guess < randomly_generated_number){
        guesses_lesser_than.push(guess)
    }else{
        guesses_greater_than.push(guess)
    }

    console.log("lesser than : ", guesses_lesser_than)
    console.log("greater than : ", guesses_greater_than)
        
})
