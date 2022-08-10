const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
let currentPlayer = X_IMAGE_URL;
const restartButton = document.querySelector(".resetbtn");
const gridItems = document.querySelectorAll('#grid div');

for (const item of gridItems) {
  item.addEventListener('click', onClick)
  console.log(item)
    
}

function onClick(event) {
  // Element that was clicked
  const element = event.target;
  // if imageX is created now imageO turn 
  function playerChange() {
    if (currentPlayer === X_IMAGE_URL) {
        element.innerHTML = `<img src="${X_IMAGE_URL}" />`;
        currentPlayer = O_IMAGE_URL;
    } 
    else if (currentPlayer === O_IMAGE_URL) {}
 {
        let generateSpot = Math.floor(Math.random() * gridItems.length);
        //check if item is taken
          gridItems[generateSpot].innerHTML = `<img src="${O_IMAGE_URL}" />`;
          currentPlayer = X_IMAGE_URL;
        
        //  element.innerHTML = `<img src="${O_IMAGE_URL}" />`;
    
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

// function aI use math random, math floor
// for loop, loop through gridItems

// function compPlayer(){
  //   for(const item of gridItems){
    //     if(item.innerHTML === '' && item.innerHTML !== X_IMAGE_URL){
//       for(const item of gridItems){
  //         generateSpot = Math.floor(Math.random() + item.length)  
  //       }
  //     }
  //   }
  // }
  
// loop through gridItems and find empty spots
function randomSpot(){
    let generateSpot = Math.floor(Math.random() * gridItems.length);
    element[generateSpot].innerHTML = `<img src="${currentPlayer}" />`;
    
}




// currentPlayer = currentPlayer === X_IMAGE_URL ? O_IMAGE_URL : X_IMAGE_URL;
// element.innerHTML = `<img src="${currentPlayer}" />`;
  
  
  // if(currentPlayer === X_IMAGE_URL) {
  //   imageX = document.createElement('img');
  //   imageX.src = X_IMAGE_URL;
  //   element.appendChild(imageX);
  //   currentPlayer = O_IMAGE_URL;
  // }  else if(currentPlayer === O_IMAGE_URL){
  // imageO = document.createElement('img');
  // imageO.src = O_IMAGE_URL;
  // element.appendChild(imageO);
  // currentPlayer = X_IMAGE_URL;
  // }
