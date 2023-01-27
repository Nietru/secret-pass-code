// Assignment Code
// #generate is the red button.
var generateBtn = document.querySelector("#generate");



var passcode = document.getElementById("passcode");

function generatePasscode() {
    // all possibly characters to be randomly chosen from after clicking generate passcode.
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+`~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passcode = "";
  var passcodeLength = 8;
    // will repeat through randomly choosing from var chars for each passcode character.
  for (var i = 0; i < passcodeLength; i++) {
    var passcodeText = Math.floor(Math.random() * chars.length);
    passcode += chars.substring(passcodeText, passcodeText + 1);
  }
}

// This is inside the dashed bordered box on the webpage that displays Your Secure Password.
// function generatePasscode() {
//       lowercaseChoice = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(',');
//       uppercaseChoice = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'].split(',');
//       specialChoice = ['!,@,#,$,%,^,&,*,(,)'].split(',');
//       numberChoice = [1,2,3,4,5,6,7,8,9,0].split(',');
//       var charArray = []; // to store the user's selected characters.

//   };

// not really working but closer.
var passcodeLength = window.confirm(prompt("Please pick a numerical value, 8 - 128, for your passcode length: "));
  if ((passcodeLength < 8) || (passcodeLength > 128)) {
    alert("Invalid!");
    confirm(prompt("Please pick a numerical value, 8 - 128, for your passcode length: "));
  } 
  else {
  var userChoice = passcodeLength;
  }



// Write password to the #password input
function writePasscode() {
  var passcode = generatePasscode();      // defined generatePasscode()
  var passcodeText = document.querySelector("#passcode");   // #passcode is the card.

  passcodeText.value = passcode;



  // Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePasscode);
}
