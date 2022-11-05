import {getDatabase,set,ref , child ,get} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js" ;
import {getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword} from  "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js" ;




export const auth = getAuth();
var email = document.getElementById("email");
var pass = document.getElementById("password");
document.getElementById("loginbttn").onclick = signIN



function signIN(){



    console.log("logging in....")

    signInWithEmailAndPassword(auth,email.value, pass.value).then((userCredential)=>{

        const user = userCredential.user;

       console.log("signed in ")

       window.location.href = "partnerhsip.html"


    

    }).
    catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage)
      });
    


}

// jhsudh


function SignUP(){


    var email = 
    document.getElementById("email").value
    var pass = 
    document.getElementById("password").value
   

    console.log(email)
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        console.log("csigned" + user.uid)


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.localizedMessage;
        
        console.log(errorCode)
      });
    
}








function write(){


console.log("wrirting");
const db = getDatabase();
const reference = ref(db,"users/");

set(reference,
    {
        username : "sdkjbf",
        name : "skbfhb",
        contact :"sfbdkh"

    });

    

};








