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
let idDelete=0
let todoBodies= document.querySelectorAll('.todobody')
let  deleteBtn= document.querySelectorAll('tododelete')
todo.addEventListener('submit',(e)=>{
    e.preventDefault()
    const todoBody= document.createElement('div')
    todoBody.classList.add('todobody')
    const todoParagraph = document.createElement('p')
    todoParagraph.classList.add('todoParagraph')
    const addTodo= document.getElementById('add-todos')
    todoParagraph.textContent= addTodo.value
    addTodo.value=''
    const todoBtnContainer= document.createElement('div')
    todoBtnContainer.classList.add('todoBtnContainer')
    const todoDone= document.createElement('button')
    todoDone.classList.add('tododone')
    todoDone.textContent='Done'
    const todoDelete= document.createElement('button')
    todoDelete.classList.add('tododelete')
    todoDelete.setAttribute('coso', idDelete)
    todoDelete.textContent='Delete'
    todoBtnContainer.appendChild(todoDone)
    todoBtnContainer.appendChild(todoDelete)
    todoBody.appendChild(todoParagraph)
    todoBody.appendChild(todoBtnContainer)
    todoList.appendChild(todoBody)
    todoBodies= document.querySelectorAll('.todobody')
    deleteBtn= document.querySelectorAll('.tododelete')
    lol()
    idDelete++
})


const lol=()=>{
    todoBodies.forEach(elem=>{
        elem.addEventListener('click',(e)=>{
                if(e.target.classList.contains('tododelete')){
                    elem.remove()
                }else if(e.target.classList.contains('tododone')){
                    elem.firstChild.style.textDecoration='line-through'
                }
            
        })
    })
}
todoBodies.forEach(elem=>{
    elem.addEventListener('click',(e)=>{
            console.log(e.target);
        
    })
})