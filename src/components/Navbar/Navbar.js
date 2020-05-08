import React, { useState } from 'react';
import { Menu, Segment, Loader, Dimmer } from 'semantic-ui-react'
import PopularCards from '../PopularCards/PopularCards';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("");
    const [popularRepos, setPopularRepos] = useState("");
    const [navClicked, setNavClicked] = useState(false);
    const [loading, setLoading] = useState(false);


    function handleItemClick(e, { name }) {
        setLoading(true)
        setActiveItem(name)
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${name}&sort=stars&order=desc&type=Repositories%27`)
            .then(res => res.json())
            .then(data => {
                setPopularRepos(data)
                setNavClicked(true)
                setLoading(false)
            }
            )


        console.log(popularRepos);

    }

    return (
        <>
            <h2>Search for Popular Repositories</h2>
            <Menu fluid widths={3}>
                <Menu.Item
                    name='Javascript'
                    active={activeItem === 'Javascript'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='Ruby'
                    active={activeItem === 'Ruby'}
                    onClick={handleItemClick}
                />

                <Menu.Item
                    name='C++'
                    active={activeItem === 'C++'}
                    onClick={handleItemClick}
                />
            </Menu>
            {navClicked ? <PopularCards popularRepos={popularRepos} /> : null}
            {loading ? <Segment>
                <Dimmer active style={{ zIndex: 1 }}>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>

            </Segment> : null}
        </>
    );
}

export default Navbar;
