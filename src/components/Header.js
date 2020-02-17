import React from "react";
import {
    Navbar,
    NavbarBrand
} from "reactstrap";

const Header = () => {
    return (
        <div>
            <Navbar light expand="md">
                <NavbarBrand  href="/"><u><i>TODO editor</i></u></NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Header;