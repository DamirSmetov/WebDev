const inputBox = document.getElementById("task");
const listTasks = document.getElementById("task-list");

function addTask(){
    if(inputBox.value === ''){
        alert("Write something");
    }
    else{
        const html = `
            <li>
                <input type="checkbox" onclick="done()">
                <span class="task-text">${inputBox.value}</span>
                <button class="delete-btn" onclick="deleteTask(this)">🗑</button>
            </li>
        `;
        listTasks.insertAdjacentHTML("afterbegin", html);
    }
    inputBox.value='';
};


listTasks.addEventListener("click", function(e){
    if(e.target.tagName === "INPUT"){
        e.target.nextElementSibling.classList.toggle("completed");
            
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
});

