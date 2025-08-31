let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let initialState = document.getElementById("initial-state");
let finalState = document.getElementById("final-state");

addBtn.addEventListener("click", ()=>{
    if(parseInt(finalState.innerText) == 0){
        return;
    }
    initialState.innerText = parseInt(initialState.innerText) + 1;
    if(parseInt(finalState.innerText) <= 0){
        finalState.innerText = 0;
    }
    else{
        finalState.innerText = parseInt(finalState.innerText) - 1;
    }
})
subtractBtn.addEventListener("click", ()=>{
    if(parseInt(initialState.innerText) == 0){
        return;
    }
    finalState.innerText = parseInt(finalState.innerText) + 1;
    if(parseInt(initialState.innerText) <= 0){
        initialState.innerText = 0;
    }
    else{
        initialState.innerText = parseInt(initialState.innerText) - 1;
    }
})