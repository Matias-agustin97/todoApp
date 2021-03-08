const mobile = document.getElementById('mobileMenu')
const navBar = document.getElementById('navbar')
const bar1 = document.querySelector('.bar1')
const bar2= document.querySelector('.bar2')
const bar3= document.querySelector('.bar3')
const todo= document.getElementById('todo')

const todoList= document.getElementById('todo-list')

mobile.addEventListener('click',()=>{
    navBar.classList.toggle('nav-active')
    if(navBar.classList.contains('nav-active')){
        navBar.style.transform= 'translateX(0vw)';
        bar1.classList.toggle('bar1-animation')
        bar2.classList.toggle('bar2-animation')
        bar3.classList.toggle('bar3-animation')
    }else{
        navBar.style.transform='translateX(-50vw)';
        bar1.classList.toggle('bar1-animation')
        bar2.classList.toggle('bar2-animation')
        bar3.classList.toggle('bar3-animation')
    }
})



todo.addEventListener('submit',(e)=>{
    e.preventDefault()
    const todoBody= document.createElement('div')
    todoBody.classList.add('todobody')
    const addTodoText= document.getElementById('add-todos')
    todoBody.textContent= addTodoText.value
    addTodoText.value=''
    const todoDone= document.createElement('button')
    todoDone.classList.add('tododone')
    todoDone.textContent='Done'
    const todoDelete= document.createElement('button')
    todoDelete.classList.add('tododelete')
    todoDelete.textContent='Delete'
    todoBody.appendChild(todoDone)
    todoBody.appendChild(todoDelete)
    todoList.appendChild(todoBody)
})