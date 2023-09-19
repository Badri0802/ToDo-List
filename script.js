const input = document.getElementById("inputform");
const task = document.getElementById("taskcontainer");
function addtask(){
    if (input.value.length == 0){
        alert("Enter a task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        task.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value='';
    savedata();
}
taskcontainer.addEventListener("click",function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata() {
    localStorage.setItem("data",taskcontainer.innerHTML);
}
function showdata(){
    taskcontainer.innerHTML = localStorage.getItem('data');
}
showdata();