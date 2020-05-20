import React, { useState } from 'react';
import { Menu, Header } from 'semantic-ui-react'
import PopularCards from '../PopularCards/PopularCards';
import "../../App.css"
import UseAnimations from 'react-useanimations';

const Navbar = (props) => {
    const [activeItem, setActiveItem] = useState("");
    const [popularRepos, setPopularRepos] = useState("");
    const [navClicked, setNavClicked] = useState(false);
    const [loading, setLoading] = useState(false);


    function handleItemClick(e, { name }) {
        props.setUserUndefined(false)
        setLoading(true)
        setActiveItem(name)
        setTimeout(() => {
            fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${name}&sort=stars&order=desc&type=Repositories%27`)
                .then(res => res.json())
                .then(data => {
                    setPopularRepos(data)
                    setNavClicked(true)
                    setLoading(false)
                }
                )
        }, 200);
    }
    if (loading === true) {
        props.parentFunc(true)
    } else { props.parentFunc(false) }

    return (
        <>
            <Header as='h2' icon textAlign='center'>
                <UseAnimations animationKey="github" size={60} style={{
                    margin: "auto"
                }} />
                <Header.Content>Search for Popular Repositories</Header.Content>
            </Header>
            <Menu pointing secondary>
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
                <Menu.Item
                    name='Java'
                    active={activeItem === 'Java'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='PHP'
                    active={activeItem === 'PHP'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Python'
                    active={activeItem === 'Python'}
                    onClick={handleItemClick}
                />
            </Menu>
            {navClicked && <PopularCards popularRepos={popularRepos} />}

        </>
    );
}

export default Navbar;
