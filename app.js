// attributes from form
const formu = document.getElementById('form');
const forBtn = document.getElementById('form-bt');
const forTask = document.getElementById('form-task');
const listAdd = document.querySelector('.list-ul');
const active = document.querySelector('.active-list');

//attributes from list


// Event listeners
forBtn.addEventListener('click', addElement);
listAdd.addEventListener('click', trash);

//functions
function addElement(event) {
    if (forTask.value == '')
        return;
    //prevent subbmiting for default
    event.preventDefault();
    //div
    const task = document.createElement('div');
    task.classList.add('whole-list');
    //li
    var newTask = document.createElement('li');
    newTask.innerText = forTask.value;
    task.appendChild(newTask);
    forTask.value = "";
    //check
    const btnComplet = document.createElement('button');
    btnComplet.innerHTML = '<i class="fas fa-check"></i>';
    btnComplet.classList.add('btn-checked');
    task.appendChild(btnComplet);
    //trash boton
    const btnTrash = document.createElement('button');
    btnTrash.innerHTML = '<i class="fas fa-trash"></i>';
    btnTrash.classList.add('btn-trash');
    task.appendChild(btnTrash);
    active.scrollTop = 0;
    console.log(active.scrollTop);
    listAdd.appendChild(task);
}




    // formu.onsubmit = function(){
//     
//     var desTask = document.createElement("p");
//     var check = document.createElement("input");
//     var btn = document.createElement("input");
//     var lista = document.getElementById("active-list");

//     check.setAttribute("type", "checkbox");
//     btn.setAttribute("type", "button");

//     desTask.innerHTML += check.outerHTML + btn.outerHTML;
//     task.appendChild(desTask);

//     lista.appendChild(task);
//     // <p class="todo-value">Esta es mi tarea</p>
//     // <input type="checkbox" class="not-checked todo-check">
//     // <input type="button" value="Trash" class="todo-bt"></input>
// }