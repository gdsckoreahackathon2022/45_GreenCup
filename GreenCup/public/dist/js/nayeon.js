// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB8N3tVMocL4OW4cVjrNXDEgD3ej-liZi4",
    authDomain: "greencup-458a9.firebaseapp.com",
    projectId: "greencup-458a9",
    storageBucket: "greencup-458a9.appspot.com",
    messagingSenderId: "748336399433",
    appId: "1:748336399433:web:e239a37339408290332b98"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

$(document).ready(function ($) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        $("#profile").css("display", "block");
        $("#profile_img").attr("src", user.photoURL);
        $("#profile_info").css("display", "block");
        $("#profile_name").text(user.displayName);
        $("#login").css("display", "none");
        $("#logout").css("display", "block");
      } else {
        console.log("not login");
        $("#profile").css("display", "none");
        $("#profile_img").attr("src", "");
        $("#profile_info").css("display", "none");
        $("#profile_name").text("");
        $("#login").css("display", "block");
        $("#logout").css("display", "none");
      }
    });
  });
  
  function logout() {
    firebase
      .auth()
      .signOut()
      .the(
        function () {},
        function (error) {}
      );
  }
  
  function googlelogIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/plus.login");
    provider.setCustomParameters({
      prompt: "select_account",
    });
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then(function (result) {
        firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
          })
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            // The email of the user's account used.
            var email = error.email;
          });
      });
  }