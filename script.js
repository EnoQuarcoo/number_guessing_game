function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

const randomly_generated_number = getRandomValue(0, 100);
//console.log(randomly_generated_number)


//if they click submit, it should take the value and compare it randomly_generated_number
guesses_lesser_than = [];
guesses_greater_than = [];

//elemenets we need to grab to compare and display each submission 
const submissionButton = document.getElementById("submission_btn");
const greaterThanContainer = document.querySelector("#greater_than_container");
const lesserThanContainer = document.querySelector("#lesser_than_container");

submissionButton.addEventListener("click", function(){
    //grab the text in the texbox 
    const userInput = document.getElementById("guess");
    const guess = userInput.value;
    
    if (guess == randomly_generated_number){
        //Create and Display winning message 
        const winScreen = document.createElement("div");
        winScreen.classList.add("win-screen");
        winScreen.innerHTML = `
            <h2> You guessed it !! 🎉 </h2>
            <button id="restart-btn"> Play Again </button> 
        `;

        const getMain = document.querySelector("main");
        getMain.replaceWith(winScreen);

        const restartButton = document.querySelector("#restart-btn"); 
        restartButton.addEventListener("click", function(){
            location.reload();
})
        
    }else if (guess < randomly_generated_number){
        guesses_lesser_than.push(guess)
    
    }else{
        guesses_greater_than.push(guess)
    }

    //console.log("lesser than : ", guesses_lesser_than)
    //console.log("greater than : ", guesses_greater_than)
    //update the greater than / less than displays
    updateGuessDisplays();

    //empty text box
    userInput.value = "";
        
})


//function to render the arrays
function updateGuessDisplays(){
    greaterThanContainer.innerHTML = guesses_greater_than.join('<br>');
    lesserThanContainer.innerHTML = guesses_lesser_than.join('<br>');
}

