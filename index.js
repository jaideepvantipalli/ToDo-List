const todoList=[{
        name:'make dinner',
        duedate:'2024-06-01'
    },{
        name:'go to the gym',
        duedate:'2024-06-02'
    }
];
renderTodoList();

function addtask(){
    const taskname=document.querySelector('.js-task-name');
    const taskdate=document.querySelector('.js-due-date');

    const name=taskname.value;
    const duedate=taskdate.value;
    todoList.push({
        //'name':name,
        //'duedate':duedate
        name,
        duedate
    });

    taskname.value='';

    renderTodoList();
}

function renderTodoList(){
    let todolistHTML='';

    for(let i=0;i<todoList.length;i++){
        const task=todoList[i];
        //const name=task.name;
        //const duedate=task.duedate;
        const { name ,duedate } = task;
        const html=`
        <div>${name}</div>
        <div>${duedate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();"
            class="delete-button">Delete</button>
        `;
        todolistHTML+=html;
    }
    document.querySelector('.todo-list').innerHTML=todolistHTML;
}