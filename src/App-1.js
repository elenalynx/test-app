// import React from "react";
import {Component, StrictMode} from "react";
import './App.css';

const Header = () => {
    return <h2>Hiii header</h2>
}

// const Field = () => {
//     const holder = 'Enter here'
//     const styledField = {
//         width: '300px'
//     }
//     return <input
//             placeholder={holder}
//             type="text"
//             style={styledField}/>
// }

class Field extends Component {
    render() {
        const holder = 'Enter here'
        const styledField = {
            width: '300px'
        }

        return <input
                placeholder={holder}
                type="text"
                style={styledField}/>
    }
}

function Btn() {
    const text = 'Log in'
    const logger = true
    return <button>{logger ? 'Enter' : text}</button>


    // const res = () => {
    //     return 'Log in'
    // }
    // const p = <p>Log iinn</p>
    // return <button>{p}</button>
    // return <button>{res()}</button>
}

function App() {
    return (
        <div className="App">
            <StrictMode>
                <Header/>
            </StrictMode>
            <Field/>
            <Btn/>
        </div>
    );
}

// export {Header};
export default App;
