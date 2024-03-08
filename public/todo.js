// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { ref, getDatabase, push, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuegM4YAcyjg8SEUTioDmTb5SgPBVgkGk",
    authDomain: "todo-app-c9e06.firebaseapp.com",
    databaseURL: "https://todo-app-c9e06-default-rtdb.firebaseio.com",
    projectId: "todo-app-c9e06",
    storageBucket: "todo-app-c9e06.appspot.com",
    messagingSenderId: "164983714053",
    appId: "1:164983714053:web:8d16fba07f2c444ee5476c",
    measurementId: "G-88VFY76Y52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth = getAuth();
const main = document.getElementById('main');
const inp = document.getElementById('inp');

window.delAll=function () {
    main.innerHTML = "";
}

window.createElem=function () {
    const p = document.createElement('P');
    const txt = document.createTextNode(inp.value);
    p.appendChild(txt);
    p.setAttribute('class', 'para');
    p.setAttribute('id', 'pl');

    const delBtn = document.createElement("BUTTON");
    const delLabel = document.createTextNode('Delete');
    delBtn.appendChild(delLabel);
    delBtn.setAttribute('onclick', 'delTodo(this)');
    p.appendChild(delBtn);

    var editBtn = document.createElement("BUTTON")
    var editLabel = document.createTextNode('EDIT')
    editBtn.appendChild(editLabel)
    editBtn.setAttribute('onclick','editTodo(this)')
    p.appendChild(editBtn)

    main.appendChild(p);
    inp.value = "";
}

window.delTodo=function (elem) {
    const p = elem.parentNode;
    p.remove();
}
window.editTodo=function(ele){
    var newVal = prompt ("Enter your new value");
    ele.parentNode.firstChild.nodeValue = newVal
    console.log(newVal)


}






// // Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { ref, getDatabase, push, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDuegM4YAcyjg8SEUTioDmTb5SgPBVgkGk",
//     authDomain: "todo-app-c9e06.firebaseapp.com",
//     databaseURL: "https://todo-app-c9e06-default-rtdb.firebaseio.com",
//     projectId: "todo-app-c9e06",
//     storageBucket: "todo-app-c9e06.appspot.com",
//     messagingSenderId: "164983714053",
//     appId: "1:164983714053:web:8d16fba07f2c444ee5476c",
//     measurementId: "G-88VFY76Y52"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase();
// const auth = getAuth();
// const main = document.getElementById('main');
// const inp = document.getElementById('inp');

// // Sample object
// const obj = {
//     text: "", // You should set this to the appropriate value
// };

// // Push data to Firebase and retrieve initial data
// obj.id = push(ref(database, "Tasks/")).key;
// var reference = ref(database, `Tasks/${obj.id}`);
// set(reference, obj);

// // Function to retrieve data from Firebase
// function getData() {
//     var reference = ref(database, "Tasks/");

//     onValue(reference, function (data) {
//         renderList(data.val()); // Update the renderList function to accept the data
//     });
// }

// // Clear all elements in 'main'
// window.delAll = function () {
//     main.innerHTML = "";
// }

// // Create and append a new element
// window.createElem = function () {
//     const p = document.createElement('p');
//     const txt = document.createTextNode(inp.value);
//     p.appendChild(txt);
//     p.setAttribute('class', 'para');
//     p.setAttribute('id', 'pl');

//     const delBtn = document.createElement("button");
//     const delLabel = document.createTextNode('Delete');
//     delBtn.appendChild(delLabel);
//     delBtn.addEventListener('click', function () { delTodo(p); });
//     p.appendChild(delBtn);

//     var editBtn = document.createElement("button")
//     var editLabel = document.createTextNode('EDIT')
//     editBtn.appendChild(editLabel)
//     editBtn.addEventListener('click', function () { editTodo(p); });
//     p.appendChild(editBtn)

//     main.appendChild(p);
//     inp.value = "";

//     // Push new data to Firebase
//     const newObj = {
//         text: inp.value,
//     };

//     newObj.id = push(ref(database, "Tasks/")).key;
//     var newReference = ref(database, `Tasks/${newObj.id}`);
//     set(newReference, newObj);
// }

// // Delete a specific element
// window.delTodo = function (elem) {
//     const p = elem.parentNode;
//     const taskId = p.id; // Assuming each task element has a unique id
//     const taskReference = ref(database, `Tasks/${taskId}`);
//     set(taskReference, null); // Delete the task from Firebase
// }

// // Edit the text of a specific element
// window.editTodo = function (p) {
//     var taskId = p.id; // Assuming each task element has a unique id
//     var newVal = prompt("Enter your new value");
//     if (newVal !== null) {
//         var taskReference = ref(database, `Tasks/${taskId}`);
//         set(taskReference, { text: newVal });
//     }
// }

// // Render the list with the updated data
// function renderList(data) {
//     main.innerHTML = "";
//     if (data) {
//         Object.values(data).forEach(task => {
//             const p = document.createElement('p');
//             p.textContent = task.text;
//             p.setAttribute('class', 'para');
//             p.setAttribute('id', task.id);

//             const delBtn = document.createElement("button");
//             const delLabel = document.createTextNode('Delete');
//             delBtn.appendChild(delLabel);
//             delBtn.addEventListener('click', function () { delTodo(p); });
//             p.appendChild(delBtn);

//             var editBtn = document.createElement("button")
//             var editLabel = document.createTextNode('EDIT')
//             editBtn.appendChild(editLabel)
//             editBtn.addEventListener('click', function () { editTodo(p); });
//             p.appendChild(editBtn);

//             main.appendChild(p);
//         });
//     }
// }

// // Automatically fetch and display todos when the app loads
// getData();
