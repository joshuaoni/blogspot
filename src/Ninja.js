import React from 'react';

const Ninja = () => {

    const passNoParameter = (event) => {
        console.log("no parameter passed", event)
    }
    const passsParameter = (text) => {
        console.log(text)
    }

    //state is a used when we need a reactive parameter - a parameter that changes and
    //React updates the changes

    return ( 
        <>
            <h1>YO!</h1>
            <input onKeyUp={(event) => passsParameter(event)}/>
            {/* adding an event listener to the input tag and passing in a function that accepts
            a parameter - shown above. 
            Here, the event itself is passed as the Parameter. 
            This event parameter is generated anytime an event occurs*/}
            <input onKeyPress={passNoParameter}/>
        </>
    );
}
 
export default Ninja;