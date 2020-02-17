import React, {useState} from "react";
import {
    Button,
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, Form, FormGroup,
    Input,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import '../../styles/addtodo.css'
import {C, WORK, STUDY, PERSONAL} from "./Reducer";

const COLOR_TYPE = {
    work: "primary",
    personal: "danger",
    study: "success"
}

const AddTodo = ({dispatch}) => {

    const [isOpen, setOpen] = useState(false)
    const [typeColor, setColor]  = useState(WORK)
    const [todoText, setTodoText] = useState('')
    const toggle = () => setOpen(!isOpen)

    return (
        <Form onSubmit={(e) => {
            e.preventDefault()
            dispatch(
                {
                    body: {
                        body: todoText,
                        type: typeColor
                    },
                    type: C.ADD
                }
            )
            console.log(todoText)
        }}>
            <FormGroup>
                <InputGroup className={'add-todo'}>
                    <Input id={'todo_input'} onChange={e => setTodoText(e.target.value)} placeholder="Write here your TODO :)"  />
                    <InputGroupAddon addonType="append">
                        <ButtonDropdown isOpen={isOpen} toggle={toggle}>
                            <Button
                                type={'submit'}
                                id="caret"
                                color={COLOR_TYPE[typeColor]}>
                                ADD TODO
                            </Button>
                            <DropdownToggle caret color={COLOR_TYPE[typeColor]} />
                            <DropdownMenu>
                                <DropdownItem onClick={() => setColor(WORK)}>Work</DropdownItem>
                                <DropdownItem onClick={() => setColor(STUDY)}>Study</DropdownItem>
                                <DropdownItem onClick={() => setColor(PERSONAL)}>Personal</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>

    )
}

export default AddTodo