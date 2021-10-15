// Generate random number 1 - 6 in order to generate img
const firstRandomNum = Math.floor(Math.random() * 6 ) + 1;
const secondRandomNum = Math.floor(Math.random() * 6 ) + 1;


const firstDiceImg =  'media/dice' + firstRandomNum + '.png';
const secondDiceImg =  'media/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImg)
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImg)

function winningDecider() {
    if (firstRandomNum > secondRandomNum) {
        document.getElementById("winner").innerHTML = "Player 1 wins!";
    } else if (secondRandomNum > firstRandomNum) {
        document.getElementById("winner").innerHTML = "Player 2 wins!";
    } else {
        document.getElementById("winner").innerHTML = "WTH, it's a draw!";
    }
}
addEventListener

document.getElementById("thebutton").addEventListener("click", function reload() {
    reload=location.reload();
  });


winningDecider(firstRandomNum, secondRandomNum)