import {Component, StrictMode} from "react";
// import {Component, Fragment, StrictMode} from "react";

import './App.css';

// function WhoAmI (props) {
class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 25,
            text: '+++',
            position: ''
        }
        // this.nextYear = this.nextYear.bind(this)
    }

    // 2, 3 variant
    // nextYear() {
    //     // console.log('+++')
    //   this.setState(state => ({
    //       years: state.years + 1
    //   }))
    // }

    nextYear = () => {
        // console.log('+++')
      this.setState(state => ({
          years: state.years + 1
      }))
    }

    commitInputChanges = (e, color) => {
        // console.log(e.target.value)
        console.log(color)
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            // <Fragment>
            <>
                {/*<button onClick={() => this.nextYear()}>{this.state.text}</button>*/}
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    {/*<input type="text" onChange={this.commitInputChanges} />*/}
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </>
            // </Fragment>
        )
    }

}

// React.Fragment key="33"

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
