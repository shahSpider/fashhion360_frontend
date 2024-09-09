import React from 'react';
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        alert('You clicked me!');
        setCount(count + 1);
    }

    function greet() {
        alert('Hey welcome to my town.')
    }
    return (
        <>
            <button onClick={handleClick}>
                You Click me {count} times
            </button>
            <button onClick={greet}>Greet me</button>
        </>
    );
}

export default MyButton;