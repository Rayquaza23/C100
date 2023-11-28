//TUS ENLACES DE FIREBASE
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
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Inicia código
                  console.log(firebase_message_id);
                  console.log(message_data);
                  name = message_data['name'];
                  message = message_data['message'];
                  like = message_data['like'];
                  name_widht_tag = "<h4>"+ name +"</h4>";
                  }

             });
}); }
getData();
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}