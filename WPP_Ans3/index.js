function guessNum(){
    var num = parseInt(Math.random() * 10 + 1);
    var userGuessNum = prompt("Enter a number to guess between 1 to 10");
    if(isNaN(userGuessNum)){
        alert("Please, Enter a number");
    }else{
        if(num == userGuessNum){
            alert("Wow, you guessed it right")
        }else{
            alert(" Number Not match. Number was" + num );
        }
    }
}