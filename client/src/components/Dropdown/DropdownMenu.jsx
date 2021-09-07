import React from 'react';

const DropdownMenu = () => {
    return (

        <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="/about">ReparApp</Dropdown.Item>
            <Dropdown.Item href="#/contacto">Contacto</Dropdown.Item>
            {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownMenu;


