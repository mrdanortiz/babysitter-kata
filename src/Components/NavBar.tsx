import React, { FunctionComponent } from "react";
import { Container, Menu } from "semantic-ui-react";

export const NavBar: FunctionComponent = () => (
    <Menu inverted={true} data-testid="navbar">
        <Container>
            <Menu.Item header={true}>
                Babysitter Kata
            </Menu.Item>
            <Menu.Item href="https://github.com/mrdanortiz/babysitter-kata" target="_blank">
                Source Code
            </Menu.Item>
        </Container>
    </Menu>
);

export default NavBar;
