import React from "react";
import {Col, Toast, ToastBody, ToastHeader} from "reactstrap";
import styles from '../../styles/TodoItem.css';

const CustomIcon = {
    work: "primary",
    personal: "danger",
    study: "success"

}

const CUSTOM_HEADER = {
    work: "РАБОТА",
    personal: "ЛИЧНОЕ",
    study: "УЧЕБА"
}

const TodoItem = ({name, body, type}) => {
    return (
        <Col xs={4} className={styles.col4}>
            <Toast>
                <ToastHeader icon={CustomIcon[type]}>
                    {CUSTOM_HEADER[type]}
                </ToastHeader>
                <ToastBody>
                    {body}
                </ToastBody>
            </Toast>
        </Col>

    )
}

export default TodoItem