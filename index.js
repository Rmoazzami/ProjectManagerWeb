/*(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyDf1RqQ-smDIMASFAlQrc9i7adGYGrJVOQ",
        authDomain: "prime-byway-240323.firebaseapp.com",
        databaseURL: "https://prime-byway-240323.firebaseio.com",
        projectId: "prime-byway-240323",
        storageBucket: "prime-byway-240323.appspot.com",
        messagingSenderId: "749076008763",
        appId: "1:749076008763:web:6477a0257835733a"
        };
    // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        const txtEmail = document.getElementById("email_field");
        const txtPassword = document.getElementById("password_field");
        const btnLogin = document.getElementById("btnLogin");
        const btnSignUp= document.getElementById("btnSignUp");
        const btnLogout = document.getElementById("btnLogout");


        btnLogin.addEventListener('click', e=> {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();

            //sign in

            const promise = auth.signInWithEmailAndPassword(email, pass);

            promise.catch( e => console.log(e.message));
        })

}());


*/







firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null) {
        var email_id = user.email;

        document.getElementById("user_paragraph").innerHTML = "Welcome User : " +email_id;
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});


function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    // ...
    });

}

function signUp(){

}

function logout() {
    firebase.auth().signOut();
}

