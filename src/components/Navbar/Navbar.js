import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState();

    function handleItemClick(e, { name }) {
        setActiveItem(name)
    }

    return (
        <Menu fluid widths={3}>
            <Menu.Item
                name='popularRepos'
                active={activeItem === 'popularRepos'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='MostCommittedRepos'
                active={activeItem === 'MostCommittedRepos'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='MostRecentRepos'
                active={activeItem === 'MostRecentRepos'}
                onClick={handleItemClick}
            />
        </Menu>
    );
}

export default Navbar;
