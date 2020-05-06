import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState();

    function handleItemClick(e, { name }) {
        setActiveItem(name)
    }

    function popularRepos(e, { name }) {
        setActiveItem(name)
        fetch("https://api.github.com/search/repositories?q=stars:%3E1+language:Ruby&sort=stars&order=desc&type=Repositories%27")
            .then(res => res.json())
            .then(data => console.log(data))

    }

    return (
        <Menu fluid widths={3}>
            <Menu.Item
                name='popularRepos'
                active={activeItem === 'popularRepos'}
                onClick={popularRepos}
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
