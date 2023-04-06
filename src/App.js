import {Component, StrictMode} from "react";
import './App.css';

// function WhoAmI (props) {
class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 25,
            text: '+++'
        }
    }

    nextYear = () => {
        // console.log('+++')
      this.setState(state => ({
          years: state.years + 1
      }))
    }

    render() {
        const {name, surname, link} = this.props;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }

}

function App() {
    return (
        <div className="App">
            <StrictMode>
                <WhoAmI name='John' surname="Smith" link="google.com"/>
                <WhoAmI name='Lili' surname="Smith2" link="google.com"/>
            </StrictMode>

        </div>
    );
}

export default App;
