import React, { useState } from 'react';

import Output from "./Output";

function Greeting() {
    const [changedText, setChangedText] = useState(false);

    function changeTextHandler() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello World</h2>
            {!changedText ? <Output>It's good</Output> : null}
            {changedText ? <Output>Changed</Output> : null}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
}

export default Greeting;
