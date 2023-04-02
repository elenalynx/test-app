// import {Component, StrictMode} from "react";
import './App.css';

// function WhoAmI (props) {
function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <StrictMode>
                {/*<WhoAmI name="John" surname="Smith" link="google.com"/>*/}
                <WhoAmI name={() => {return "John"}} surname="Smith" link="google.com"/>
                <WhoAmI name={() => {return "Lili"}} surname="Mili" link="google.com"/>
            </StrictMode>

        </div>
    );
}

export default App;
