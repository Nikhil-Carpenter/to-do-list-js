//SELECTORS
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-btn");



const todoList=document.querySelector(".todo-list");

//EVENT-LISTENER

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteTodo);


//FUNTIONS

function addTodo(event){
	//prevent form submission
	event.preventDefault();
	// console.log("hello");
	// Create new todo div
	const todoDiv=document.createElement("div");
	todoDiv.classList.add("todo");
	//create li
	const newTodo=document.createElement("li");
	newTodo.innerText= todoInput.value;
	newTodo.classList.add("todo-item");
	// add li into div
	todoDiv.appendChild(newTodo);
	//Check mark button
	const completedButton = document.createElement("button");
	completedButton.innerHTML=`<i class="fas fa-check"></i>`;
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	//trash button
	const trashButton = document.createElement("button");
	trashButton.innerHTML=`<i class="fas fa-trash"></i>`;
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);
	//Append to list
	todoList.appendChild(todoDiv);
	//clear value
	todoInput.value="";
}

//deleteCheck Function
	function deleteTodo(event){
		// console.log(e.target);
		const item=event.target;
		// event.target.parentElement.remove();
		if(item.classList[0] === "trash-btn")
		{
		const todo=item.parentElement;
		//animation
		todo.classList.add("fall");	
		todo.addEventListener("transitionend",function(){
			todo.remove();
		})

		}

		if(item.classList[0] === "complete-btn")
		{
		const todo=item.parentElement;
		todo.classList.toggle("completed");
		console.log(todo);
		}
	}
