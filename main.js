const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
let currentPlayer = X_IMAGE_URL;
const restartButton = document.querySelector(".resetbtn");
const gridItems = document.querySelectorAll('#grid div');

for (const item of gridItems) {
  item.addEventListener('click', onClick)
  console.log(item);
}

function onClick(event) {
  // Element that was clicked
  const element = event.target;
  // if imageX is created now imageO turn 
  function playerChange() {
    // currentPlayer = currentPlayer === X_IMAGE_URL ? O_IMAGE_URL : X_IMAGE_URL;
    // element.innerHTML = `<img src="${currentPlayer}" />`;
    if (currentPlayer === X_IMAGE_URL) {
        element.innerHTML = `<img src="${X_IMAGE_URL}" />`;
        playerWon();
        currentPlayer = O_IMAGE_URL;
    } 
    if (currentPlayer === O_IMAGE_URL){
        //check if gridItems.innerHTML is empty and !== x
        if(gridItems.innerHTML !== `<img src="${X_IMAGE_URL}" />`|| gridItems.innerHTML === ''){
            
            let generateSpot = Math.floor(Math.random() * gridItems.length);
          gridItems[generateSpot].innerHTML = `<img src="${O_IMAGE_URL}" />`;
        }
      currentPlayer = X_IMAGE_URL;
    }
}
playerChange();
  }
//clear board with function
// make element.innerHTML = '';
restartButton.addEventListener('click', clearBoard);
function clearBoard() {
  for (const item of gridItems) {
    item.innerHTML = '';
  }
}

// check for win

function playerWon(){
    if(gridItems[0].innerHTML === `<img src="${X_IMAGE_URL}"/>`){
        if(gridItems[1].innerHTML === `<img src="${X_IMAGE_URL}"/>` && gridItems[2].innerHTML === `<img src="${X_IMAGE_URL}"/>`){
          return alert('winner')
          console.log('hello')
        }
    }
    if(gridItems[0].innerHTML === `<img src="${X_IMAGE_URL}"/>`){
        if(gridItems[3].innerHTML === `<img src="${X_IMAGE_URL}"/>` && gridItems[6].innerHTML === `<img src="${X_IMAGE_URL}"/>`){
            console.log('hello')
            return alert('winner')
        }
    }
    if(gridItems[0].innerHTML === `<img src="${X_IMAGE_URL}"/>`){
        if(gridItems[4].innerHTML === `<img src="${X_IMAGE_URL}"/>` && gridItems[8].innerHTML === `<img src="${X_IMAGE_URL}"/>`){
            console.log('hello')
            return alert('winner')
        }
    }
}

  
