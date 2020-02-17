import React, {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {C} from "./Reducer";

const FilterTodo = ({dispatch}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>
            <br/>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Фильтр
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem onClick={() => dispatch({type: C.SHOW_ALL})}>Без фильтра</DropdownItem>
                <DropdownItem onClick={() => dispatch({type: C.SHOW_WORK})}>Работа</DropdownItem>
                <DropdownItem onClick={() => dispatch({type: C.SHOW_PERSONAL})}>Личное</DropdownItem>
                <DropdownItem onClick={() => dispatch({type: C.SHOW_STUDY})}>Учеба</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </>
    );
}

export default FilterTodo