// Check admin login
auth.onAuthStateChanged(user => {

if(!user){

window.location = "/login.html";
return;

}

loadNews();

});


// Add news
function addNews(){

const text = document.getElementById("newsText").value;

if(text === ""){
alert("Enter news");
return;
}

db.collection("news").add({

text: text,
date: new Date()

});

document.getElementById("newsText").value="";

}


// Load news
function loadNews(){

db.collection("news")
.orderBy("date","desc")
.onSnapshot(snapshot => {

const list = document.getElementById("newsList");

list.innerHTML="";

snapshot.forEach(doc => {

const div = document.createElement("div");

div.className="news-item";

div.innerHTML = `

<span>${doc.data().text}</span>

<button onclick="deleteNews('${doc.id}')">Delete</button>

`;

list.appendChild(div);

});

});

}


// Delete news
function deleteNews(id){

db.collection("news").doc(id).delete();

}


// Logout
function logout(){

auth.signOut();

window.location="/login.html";

}