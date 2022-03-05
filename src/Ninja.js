import React from 'react';
import WriteUp from './WriteUp';

const Ninja = () => {

    const passNoParameter = (event) => {
        console.log("no parameter passed", event)
    }
    const passsParameter = (param) => {
        console.log(param)
    }

    // the useEffect hook runs a fxn after every render of a component. The component re-renders
    // anytime the state changes
    // Usually, useEffect hooks are used for fetching data, communicating w/ an authentication
    // service (these are called side effects)

    // props are a way to pass data from a parent component to a child component

    // state is a used when we need a reactive parameter - a parameter that changes and
    // React can update the changes as they occur by 'setting the state' 

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



