export const TodoListItem = (props) => {
    return <li>
           <input type="checkbox" checked={props.item.isCompleted}
            onChange={(event) =>     props.handOnTaskChange(event) }/>  
        {props.item.name}</li>;
}