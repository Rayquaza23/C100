const firebaseConfig = {
      apiKey: "AIzaSyDp9loqGW7yCcwrNth5_foUuVsbzU9_lfg",
      authDomain: "kwitter-c100-55018.firebaseapp.com",
      projectId: "kwitter-c100-55018",
      storageBucket: "kwitter-c100-55018.appspot.com",
      messagingSenderId: "1065843223906",
      appId: "1:1065843223906:web:48b49a0c244ef7514b503b"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de la sala"
            });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwiter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("Nombre de la sala" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}