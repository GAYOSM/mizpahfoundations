// ADMIN EMAIL
const ADMIN_EMAIL = "mizpahfoundations123@gmail.com";


// AUTH CHECK
auth.onAuthStateChanged(user => {

if(!user){

alert("Please login");

window.location="/login.html";

return;

}

if(user.email !== ADMIN_EMAIL){

alert("Access denied");

window.location="/index.html";

return;

}

loadNews();

});



// ADD NEWS
function addNews(){

const title = document.getElementById("title").value.trim();
const content = document.getElementById("content").value.trim();

if(title === "" || content === ""){
alert("Please enter title and content");
return;
}

db.collection("news").add({

title: title,
content: content,
date: firebase.firestore.FieldValue.serverTimestamp()

})
.then((docRef)=>{

alert("✅ News published successfully");

console.log("News ID:", docRef.id);

document.getElementById("title").value="";
document.getElementById("content").value="";

})
.catch((error)=>{

console.error("Error:", error);

alert("❌ Failed: " + error.message);

});

}



// LOAD NEWS
function loadNews(){

db.collection("news")
.orderBy("date","desc")
.onSnapshot(snapshot=>{

const list=document.getElementById("newsList");

list.innerHTML="";

snapshot.forEach(doc=>{

const news=doc.data();

const date=news.date ?
news.date.toDate().toLocaleString():"";

list.innerHTML+=`

<div class="news-card">

<h4>${news.title}</h4>

<p>${news.content}</p>

<small>${date}</small>

<br><br>

<button onclick="deleteNews('${doc.id}')">
Delete
</button>

</div>

`;

});

});

}



// DELETE NEWS
function deleteNews(id){

if(confirm("Delete this news?")){

db.collection("news")
.doc(id)
.delete();

}

}



// LOGOUT
function logout(){

auth.signOut();

window.location="/login.html";

}