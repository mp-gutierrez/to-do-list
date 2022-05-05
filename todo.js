function ToDo({toDo, index, remove}){
    function handle(){
        remove(index);
    }
    return <div className='todo' onClick={handle}>{toDo.text} (X) </div>;
}