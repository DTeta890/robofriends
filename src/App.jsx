import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json();
            })
            .then((users) => setRobots(users));
    }, []);
    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };
    const filteredRobots = robots.filter((robot) => robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));
    return !robots.length ? (
        <h1>Loading...</h1>
    ) : (
        <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
};

export default App;
