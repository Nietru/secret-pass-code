// Assignment Code
// #generate is the red button.
var generateBtn = document.querySelector("#generate");

// This is inside the dashed bordered box on the webpage that displays Your Secure Password.
function generatePassword() {
      numberChoice = [1,2,3,4,5,6,7,8,9,0].split(',');
      lowercaseChoice = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(',');
      uppercaseChoice = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'].split(',');
      specialChoice = ['!,@,#,$,%,^,&,*,(,)'].split(',');
      
      var charInputArray = []; // to store the user's selected characters.

      var pwLength = getPasswordLength(); //function to figure out users answer on length btwn 8 and 128 characters.
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();      // defined generatePassword() line 6.
  var passwordText = document.querySelector("#password");   // #password is the card.

  passwordText.value = "test";


  // Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
}
