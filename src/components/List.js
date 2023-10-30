import React from 'react';

function List() {
    const people = ['John', 'Paul', 'Mary'];
    const listItems = people.map(person =>
        <li>{person}</li>);
        return <ul>{listItems}</ul>
}

export default List.js;