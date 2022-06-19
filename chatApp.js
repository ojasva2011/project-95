// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC8UQMdqQOwLRDjOQ0HdvGMRKWy5DvyVhU",
  authDomain: "kwitter-project-8f205.firebaseapp.com",
  projectId: "kwitter-project-8f205",
  storageBucket: "kwitter-project-8f205.appspot.com",
  messagingSenderId: "912114277822",
  appId: "1:912114277822:web:dbb6fd0f29fcc332c12def"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding Room Name"
      });
      localStorage.setItem("room_name",room_name);

        window.location="chatApp_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
   console.log("room_name -"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML +=row
  //End code
  });});}
  
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="chatApp_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
