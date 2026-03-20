const task_input=document.getElementById("taskInput");
const add_btn=document.getElementById("addBtn");
const task_list=document.getElementById("taskList");
add_btn.addEventListener("click",function(){
    const input_value=task_input.value;

    if(input_value===""){
        alert("Please Enter your task");
        return;
     }

const list=document.createElement("li");
const comp_btn=document.createElement("button");
comp_btn.className="complete-btn";

const span_text=document.createElement("span");
span_text.className="task";
span_text.textContent=input_value;

const dlt_btn=document.createElement("button");
dlt_btn.className="delete-btn";
dlt_btn.textContent="👉🏻🗑️";

comp_btn.addEventListener("click",function(){

    if(comp_btn.textContent==="✔"){
        comp_btn.textContent="";
    }
    else{
        comp_btn.textContent="✔";
    }
    comp_btn.classList.toggle("marked");
    span_text.classList.toggle("marked-text");
});
dlt_btn.addEventListener("click",function(){
    task_list.removeChild(list);
});

list.appendChild(comp_btn);
list.appendChild(span_text);
list.appendChild(dlt_btn);

task_list.appendChild(list);
});