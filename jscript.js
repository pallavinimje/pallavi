
    fetch('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
var mainContainer = document.getElementById("users");
for (var i = 0; i < data.length; i++) {
    var li = document.createElement("li");
    li.innerHTML =  data[i].username;

    li.dataset.userId = data[i].id;
    
    li.addEventListener('click', (event) => getPosts(event))
    mainContainer.appendChild(li);
}

}

function getPosts(event) {

var userId = event.target.dataset.userId;

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .then(json => renderPosts(json))
}

function renderPosts(posts) {
var titleContainer = document.getElementById("postTitle");
var bodyContainer = document.getElementById("postBody");
for (var i = 0; i < posts.length; i++) {
    var liTitle = document.createElement("li");
    var liBody = document.createElement("li");

    liTitle.innerHTML =  posts[i].title;
    liBody.innerHTML = posts[i].body;

    titleContainer.appendChild(liTitle);
    bodyContainer.appendChild(liBody);

//var title = posts.data.title;
//var body = posts.data.body;
//document.getElementById("postTitle").innerHTML = titleContainer;
//document.getElementById("postBody").innerHTML = bodyContainer;
}
}