import React, {useReducer} from "react";
import reducer from "./Reducer";
import data from "./TodoData";
import TodoItem from "./TodoItem";
import {Container, Row} from "reactstrap";
import v4 from "uuid"
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";


const TodoList = (initialList=data) => {
    const [state, dispatch] = useReducer(reducer, {todos: data})
    const result = []
    state.todos.filter(todo => todo.show).map((todo, index) => {
        result.push(<TodoItem key={v4()} {...todo}/>)
    })
    return (
            <Container>
                <AddTodo dispatch={dispatch}/>
                <Row xs={3}>
                    {result}
                </Row>
                <FilterTodo dispatch={dispatch}/>
            </Container>
    )

}

export default TodoList