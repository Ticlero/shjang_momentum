const toDoFrom = document.querySelector(".js-todoForm"),
    toDoInput = toDoFrom.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';
let toDos =[];


const deleteToDo = (event) =>{
    console.dir(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    console.log(li.id);
    const cleanToDos = toDos.filter((toDo) =>{
        console.log(toDo.id);
        return toDo.id !== parseInt(li.id);
    });

    toDos = cleanToDos;
    saveToDos();
}

const completeToDo = (event) =>{
    const btn = event.target;
    const li = btn.parentNode;
    //li.className = "complete";
    console.log(btn);
    if(btn.innerText === "📖"){
        btn.innerText = "🆗"
    }else if(btn.innerText === "🆗"){
        btn.innerText = "📖"
    }

    li.classList.toggle("complete");
}


const loadFromSavedData = (toDo) =>{
    paintToDo(toDo.text);
}
const loadToDos = () => {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(loadFromSavedData);
    }
}

const saveToDos = () =>{
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

const paintToDo = (text) => {
    //console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const comBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    
    delBtn.innerText = "❌"
    delBtn.addEventListener("click", deleteToDo);

    comBtn.innerText = "📖";
    comBtn.addEventListener("click", completeToDo);

    span.innerText = text;

    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(comBtn);

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId,
    };

    toDos.push(toDoObj);
    saveToDos();
}

const toDoInit = () => {
    loadToDos();
    toDoFrom.addEventListener("submit", (event) => {
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    });
}

toDoInit();