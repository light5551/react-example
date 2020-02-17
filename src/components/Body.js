import React from 'react';
import {Container} from 'reactstrap';
import styles from '../styles/cente.css'
import TodoList from "./Todo/TodoList";

const Body = () => {
    return (
        <Container className={styles.centre}>
            <h1><i>TODO LIST</i></h1>
            <TodoList/>
        </Container>
    );
};

export default Body;