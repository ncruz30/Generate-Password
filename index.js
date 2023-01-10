//const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
//connecting to html
var genPassword = document.getElementById("gen-password");
var password1 = document.getElementById("password1");
var password2 = document.getElementById("password2");

//onclick button 
function createPassword(){
    
    var characters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
 
     var passwordLength = "15";
     // var password needs to be empty
     var password = "";
// writing i=1 assures that you get 15 . If you write 0, you would get 16
//for loop, is a keyword which notates control flow.
for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length)
    password += characters[randomNumber]
    }
    document.getElementById("password1").value = password; // connects so that the random password shows in the assigned box 


 //copy for loop inside of the same function and reassign to second box. When the function is called, it will call it twice automatically. Providing two separate passwords.
     var password = "";

for (var i = 1; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length)
    password += characters[randomNumber]
    }
   
    document.getElementById("password2").value = password;
};




function copyContent(){
    var myInp = document.getElementById("password1");
    
    var btnCopy = document.getElementById("btn-pss1");
    
myInp.select();
document.execCommand("Copy");
}

// second copy button
function copy(){
 var myInp2 = document.getElementById("password2");
    
    var btnCopy2 = document.getElementById("btn-pss2");
    
myInp2.select();
document.execCommand("Copy");
    }
   
   






















