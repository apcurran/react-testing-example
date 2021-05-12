import React, { useState } from 'react'

function Greeting() {
    const [changedText, setChangedText] = useState(false);

    function changeTextHandler() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello World</h2>
            {!changedText ? <p>It's good</p> : null}
            {changedText ? <p>Changed</p> : null}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
}

export default Greeting;
