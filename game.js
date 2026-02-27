let secretNumber;
let guessCount;
let allguesses=[];
function gameStart()
{
secretNumber =Math.floor(Math.random()*100)+1;
guessCount =0;
allguesses=[];
document.getElementById('message').textContent = "Game Started! Make your first guess.";
document.getElementById('guessInput').value = "";
document.getElementById('guessHistory').textContent = "";
}
function submitGuess()
{
    let playerGuess= Number(document.getElementById('guessInput').value);
    if(!playerGuess||playerGuess<1||playerGuess>100)
    {
        document.getElementById('message').textContent="Please Enter a Number btetween 1 and 100.";
        return;
    }
    guessCount++;
    allguesses.push(playerGuess);
    if(playerGuess===secretNumber)
    {
        document.getElementById('message').textContent=`Correct! You got it in  ${guessCount} guesses!`;
        document.getElementById('message').style.color="green";
    }
    else if(playerGuess>secretNumber)
    {
        document.getElementById('message').textContent=`Too High! Try again.(Guess #${guessCount})`;
        document.getElementById('message').style.color="red";
    }
    else
    {
        document.getElementById('message').textContent=`Too Low! Try again(Guess #${guessCount}).`;
        document.getElementById('message').style.color="red";
    }
    document.getElementById('guessHistory').textContent=`Your Guesses: ${allguesses.join(',')}`;
    document.getElementById('guessInput').value="";
    document.getElementById('guessInput').focus();
}
gameStart();