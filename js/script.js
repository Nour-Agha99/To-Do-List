let textContent =document.querySelector(".inpUserValue");
let descrption =document.querySelector(".descrption");
let bottomClick =document.querySelector(".sub");
let showingSpace =document.querySelector(".showResult");
let deletAll =document.querySelector(".delAll");
function createList(valueArray,desValue,timeValue){

    let newBox = document.createElement("div");
    newBox.className="parentBox";
    let inputBtn = document.createElement("input");
    inputBtn.className="inputBtn";
    inputBtn.setAttribute('disabled', true);
    inputBtn.value = valueArray;
 
    let desBtn = document.createElement("input");
    desBtn.className="inputBtn";
    desBtn.setAttribute('disabled', true);
    desBtn.value = desValue;
    
    let par = document.createElement("p");
    par.innerText=timeValue;

    let deletBtn = document.createElement("button");
    deletBtn.className="delete";
    deletBtn.textContent="delete";

    let doneBtn = document.createElement("button");
    doneBtn.className="done";
    doneBtn.textContent="done";

    let editBtn = document.createElement("button");
    editBtn.className="edit";
    editBtn.textContent="edit";
 
    newBox.appendChild(inputBtn);
    newBox.appendChild(desBtn);
    newBox.appendChild(deletBtn);
    newBox.appendChild(editBtn);
    newBox.appendChild(doneBtn);
    newBox.appendChild(par);
    showingSpace.appendChild(newBox);
    
}
 if(localStorage.getItem("tpDoList")){
    let doArray = localStorage.getItem("tpDoList");
    doArray =JSON.parse(doArray);
    doArray.forEach((b)=>{
        createList(b.title,b.desc,b.time)  ;
    })

  }

bottomClick.addEventListener("click",()=>{
    if (textContent.value.trim()!="" && descrption.value.trim()!="" ) {
    let newBox = document.createElement("div");
    newBox.className="parentBox";
    let inputBtn = document.createElement("input");
    inputBtn.className="inputBtn";
    inputBtn.setAttribute('disabled', true);
    inputBtn.value = textContent.value;

    
    let desBtn = document.createElement("input");
    desBtn.className="inputBtn";
    desBtn.setAttribute('disabled', true);
    desBtn.value = descrption.value;
    
    
    let par = document.createElement("p");
    date = `${new Date()}`;
    par.textContent=date.slice(4,24) ;

    let deletBtn = document.createElement("button");
    deletBtn.className="delete";
    deletBtn.textContent="delete";
    let doneBtn = document.createElement("button");
    doneBtn.className="done";
    doneBtn.textContent="done";

    let editBtn = document.createElement("button");
    editBtn.className="edit";
    editBtn.textContent="edit";
 
    newBox.appendChild(inputBtn);
    newBox.appendChild(desBtn);
    newBox.appendChild(deletBtn);
    newBox.appendChild(editBtn);
    newBox.appendChild(doneBtn);
    newBox.appendChild(par);
    showingSpace.appendChild(newBox);

    textContent.value="";
    descrption.value="";
    getArray();
}
})
document.addEventListener("click",(e)=>{
        if (e.target.className == "delete"){
            e.target.parentElement.remove(); 
            getArray()
        }
        if (e.target.className == "delAll"){
            showingSpace.textContent="";
            getArray()
        }
        if (e.target.className == "edit"){
            e.target.parentElement.firstChild.removeAttribute("disabled");
            getArray()
        }
        if (e.target.className == "done"){
            e.target.parentElement.firstChild.setAttribute('disabled', true);
            getArray()
        }
    })  


    function getArray(){
    let boxes = Array.from(document.querySelectorAll(".parentBox"))

    let boxesArray =[];
    boxes.forEach((box)=>{
     boxesArray.push({"title": box.firstChild.value, "time":box.lastChild.textContent, "desc":box.childNodes[1].value, "isComplete":"uncompleted" });
    })
    localStorage.setItem("tpDoList",JSON.stringify(boxesArray));
    }