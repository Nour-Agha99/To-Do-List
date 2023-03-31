let textContent =document.querySelector(".inpUserValue");
let descrption =document.querySelector(".descrption");
let bottomClick =document.querySelector(".sub");
let showingSpace =document.querySelector(".showResult");
let deletAll =document.querySelector(".delAll");
//creat list by local
function createList(valueArray,desValue,timeValue){

    //Box 
    let newBox = document.createElement("div");
    newBox.className="parentBox";
    //text content
    let inputBtn = document.createElement("input");
    inputBtn.className="inputBtn";
    inputBtn.setAttribute('disabled', true);
    inputBtn.value = valueArray;
 
    //descrption content
    let desBtn = document.createElement("input");
    desBtn.className="inputBtn";
    desBtn.setAttribute('disabled', true);
    desBtn.value = desValue;
    
    //get date
    let par = document.createElement("p");
    par.innerText=timeValue;

    //delete content
    let deletBtn = document.createElement("button");
    deletBtn.className="delete";
    deletBtn.textContent="delete";
    //done 
    let doneBtn = document.createElement("button");
    doneBtn.className="done";
    doneBtn.textContent="done";

    //edit
    let editBtn = document.createElement("button");
    editBtn.className="edit";
    editBtn.textContent="edit";

 
    //append 
    newBox.appendChild(inputBtn);
    newBox.appendChild(desBtn);
    newBox.appendChild(deletBtn);
    newBox.appendChild(editBtn);
    newBox.appendChild(doneBtn);
    newBox.appendChild(par);
    showingSpace.appendChild(newBox);
    
}
// get values if exist and create elements
 if(localStorage.getItem("tpDoList")){
    let doArray = localStorage.getItem("tpDoList");
    doArray =JSON.parse(doArray);
    console.log(doArray);
    doArray.forEach((b)=>{
        console.log(b.title);
        console.log(b.desc);
        console.log(b.time);
        createList(b.title,b.desc,b.time)  ;
    })

  }

bottomClick.addEventListener("click",()=>{
    //  console.log(/^\s*$/g.test(textContent.value) )
    //  console.log(/^\s*$/g.test(descrption.value) )
    // if (/^\s*$/.test(textContent.value) && /^\s*$/.test(descrption.value) ) {
    console.log(textContent.value.trim()!="") // for testing
    console.log(descrption.value.trim()!="")  // for testing

    //in the input not empty
    if (textContent.value.trim()!="" && descrption.value.trim()!="" ) {
    //Box 
    let newBox = document.createElement("div");
    newBox.className="parentBox";
    //text content
    let inputBtn = document.createElement("input");
    inputBtn.className="inputBtn";
    inputBtn.setAttribute('disabled', true);
    inputBtn.value = textContent.value;

    
    //descrption content
    let desBtn = document.createElement("input");
    desBtn.className="inputBtn";
    desBtn.setAttribute('disabled', true);
    desBtn.value = descrption.value;
    
    
    //get date
    let par = document.createElement("p");
    par.innerText=new Date();

    //delete content
    let deletBtn = document.createElement("button");
    deletBtn.className="delete";
    deletBtn.textContent="delete";
    //done 
    let doneBtn = document.createElement("button");
    doneBtn.className="done";
    doneBtn.textContent="done";

    //edit
    let editBtn = document.createElement("button");
    editBtn.className="edit";
    editBtn.textContent="edit";

 
    //append 
    newBox.appendChild(inputBtn);
    newBox.appendChild(desBtn);
    newBox.appendChild(deletBtn);
    newBox.appendChild(editBtn);
    newBox.appendChild(doneBtn);
    newBox.appendChild(par);
    showingSpace.appendChild(newBox);
    
    //to empty text
    textContent.value="";
    descrption.value="";
    getArray();
}
else 
{
    //when the user is leave the inputs empty

}
})
document.addEventListener("click",(e)=>{
        if (e.target.className == "delete"){
            e.target.parentElement.remove(); 
            getArray()
        }
        if (e.target.className == "delAll"){
            showingSpace.innerHTML="";
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
         //set values in array
    let boxes = Array.from(document.querySelectorAll(".parentBox"))
    console.log("hello")
    console.log(boxes)

    let boxesArray =[];
    boxes.forEach((box)=>{
     boxesArray.push({"title": box.firstChild.value, "time":box.lastChild.innerText, "desc":box.childNodes[1].value, "isComplete":"uncompleted" });
    })
    localStorage.setItem("tpDoList",JSON.stringify(boxesArray));
    }