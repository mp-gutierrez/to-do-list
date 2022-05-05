function App(){
    const [toDos, setToDos] = React.useState([ // here I'm creating an initial state
        {
            text: 'learn React',
            isCompleted: false,
        },
        {
            text: 'Zoom meet with clients',
            isCompleted: false,
        },
        {
            text: 'check order status',
            isCompleted: false,
        }
    ]);

    const addToDo = text => {
        const newToDos = [...toDos, {text: text, isCompleted:false}];
        setToDos(newToDos);
    }

    const removeToDo = index => { // the value is now being passed from the component (todo.js)
        let temp = [...toDos];
        temp.splice(index, 1);
        setToDos(temp);
    }
    return (
        <div className='app'>
            <div className='todo-list'>
                {toDos.map((toDo, index) => 
                <ToDo index={index} key={index} toDo={toDo} remove={removeToDo} />)}
                <ToDoForm addToDo={addToDo}/>
            </div>
        </div>
    ); // here, I'm looping through all of those to-dos and creating a div tag, where the key is the index value
};

ReactDOM.render(<App/>, document.getElementById('root'));