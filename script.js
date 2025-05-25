const firebaseConfig = {
  apiKey: "AIzaSyC9nuNPpBolARZV8eLcV1l3CuQjLoC5B4Q",
  authDomain: "herenowapp.firebaseapp.com",
  projectId: "herenowapp",
  storageBucket: "herenowapp.appspot.com",
  messagingSenderId: "871984569829",
  appId: "1:871984569829:web:7f6f8a798eafe78adc630c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      document.getElementById("user-info").innerHTML = `
        <p>Hello, ${user.displayName}</p>
        <p>Email: ${user.email}</p>
      `;
    })
    .catch((error) => {
      console.error("Login error:", error);
    });
}
