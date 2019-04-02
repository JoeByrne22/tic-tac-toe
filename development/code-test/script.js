// const clickButton = document.getElementById('buttonRed');
// const clickButtonBlue = document.getElementById('buttonBlue');
// const test = document.querySelectorAll('button');
const click = document.querySelectorAll('button');



// Game logic, first button clicked will be yellow then red.
const clickCount = [];

// Consecutive goes: yellow starts

const redSquares = [];
const yellowSquares = [];

for (let i = 0; i < click.length; i++) {
  click[i].addEventListener('click', () => {
    clickCount.push('clicked');
    if ( clickCount.length % 2 === 0 ) {
      // red
      redSquares.push(i);
      if (event.target.classList.length === 4) {
        console.log('already clicked');
      } else {
        console.log('Move to clicked section');
        event.target.classList.add('isActive');
        click[i].style.backgroundColor ='#FF0000';
      }
      winLogicRed();
    } else {
      //yellow
      yellowSquares.push(i);
      if (event.target.classList.length === 4) {
        console.log('already clicked');
      } else {
        console.log('Move to clicked section');
        event.target.classList.add('isActive');
        click[i].style.backgroundColor ='#FFFF00';
      }
      winLogicYellow();
    }
  });
}


// Win Logic:
function winLogicRed() {
  if ( redSquares.includes(0) && redSquares.includes(1) && redSquares.includes(2) ) {
    alert('The winner is RED');
  } else if ( redSquares.includes(3) && redSquares.includes(4) && redSquares.includes(5) ) {
    alert('The winner is RED');
  } else if ( redSquares.includes(6) && redSquares.includes(7) && redSquares.includes(8) ) {
    alert('The winner is RED');
  } else if ( redSquares.includes(0) && redSquares.includes(3) && redSquares.includes(6) ) {
    alert('The winner is RED');
  } else if ( redSquares.includes(1) && redSquares.includes(4) && redSquares.includes(7) ) {
    alert('The winner is RED');
  } else if ( redSquares.includes(2) && redSquares.includes(5) && redSquares.includes(8) ) {
    alert('The winner is RED');
  } else if ( redSquares.includes(0) && redSquares.includes(4) && redSquares.includes(8) ) {
    alert('The winner is RED');
  } else if ( redSquares.includes(2) && redSquares.includes(4) && redSquares.includes(6) ) {
    alert('The winner is RED');
  }
}


function winLogicYellow() {
  if ( yellowSquares.includes(0) && yellowSquares.includes(1) && yellowSquares.includes(2) ) {
    alert('The winner is YELLOW');
  } else if ( yellowSquares.includes(3) && yellowSquares.includes(4) && yellowSquares.includes(5) ) {
    alert('The winner is YELLOW');
  } else if ( yellowSquares.includes(6) && yellowSquares.includes(7) && yellowSquares.includes(8) ) {
    alert('The winner is YELLOW');
  } else if ( yellowSquares.includes(0) && yellowSquares.includes(3) && yellowSquares.includes(6) ) {
    alert('The winner is YELLOW');
  } else if ( yellowSquares.includes(1) && yellowSquares.includes(4) && yellowSquares.includes(7) ) {
    alert('The winner is YELLOW');
  } else if ( yellowSquares.includes(2) && yellowSquares.includes(5) && yellowSquares.includes(8) ) {
    alert('The winner is YELLOW');
  } else if ( yellowSquares.includes(0) && yellowSquares.includes(4) && yellowSquares.includes(8) ) {
    alert('The winner is YELLOW');
  } else if ( yellowSquares.includes(2) && yellowSquares.includes(4) && yellowSquares.includes(6) ) {
    alert('The winner is YELLOW');
  }
}


//Cant click the same square twice

// const isActive = [];

// function clickCheck() {
//   for (let i = 0; i < click.length; i++) {
//     console.log('this is click = ', click);
//     console.log('this is click[i] = ', click[i]);
//
//   }
// isActive.push(redSquares);
// // isActive.push(yellowSquares);
// console.log('this is redSquares', redSquares);
// console.log('this is yellowSquares', yellowSquares);
// console.log('this is isActive = ', isActive);




// function clickCheck() {
//   for (let i = 0; i < click.length; i++) {
//   //     console.log('this is click = ', click);
//     console.log('this is click[i] = ', click[i]);
//   }
//   if (event.target.classList.contains === 'isActive') {
//     console.log('already clicked');
//   } else {
//     console.log('Move to clicked section');
//     event.target.classList.add('isActive');
//   }
// }



//
// if (click.className === 'active'){
//   click.className = 'inactive';
//   consol
// } else {
//   click.className = 'active';
// }



// test.addEventListener('click', () => {
//   console.log('you have clicked');
// });
//




//
//
// //RED BUTTON
// const clickCount = [];
// clickButton.addEventListener('click', (clickButton) => {
//   document.body.style.backgroundColor = '#FF0000';
//   clickCount.push('clicked');
//   if ( clickCount.length % 2 === 0 ) {
//     changeContentGreen();
//     console.log(clickButton.innerHTML);
//     return document.body.style.backgroundColor = '#008000';
//   } else {
//     changeContentRed();
//     document.body.style.backgroundColor = '#FF0000';
//   }
// });
//
// function changeContentGreen() {
//   clickButton.innerHTML = 'GREEN';
// }
//
// function changeContentRed() {
//   clickButton.innerHTML = 'RED';
// }
//
// //BLUE BUTTON
// clickButtonBlue.addEventListener('click', () => {
//   document.body.style.backgroundColor = '#0000FF';
//   clickCount.push('clicked');
//   if ( clickCount.length % 2 === 0 ) {
//     changeContentYellow();
//     return document.body.style.backgroundColor = '#FFFF00';
//   } else {
//     changeContentBlue();
//     document.body.style.backgroundColor = '#0000FF';
//   }
// });
//
// function changeContentBlue() {
//   clickButtonBlue.innerHTML = 'BLUE';
// }
//
// function changeContentYellow() {
//   clickButtonBlue.innerHTML = 'YELLOW';
// }
