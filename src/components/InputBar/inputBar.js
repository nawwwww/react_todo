import React from 'react';

export default class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.state = {
            inputValue: ''
        }
    }

    handleInputChange(e) {
        this.props.inputBarStateLift(e.target.value);
        this.setState({
            inputValue: e.target.value
        });
    }

    handleButtonClick() {
        this.props.addToTaskList(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <p>Task input</p>
                <div className="userInputComponent">
                    <input onChange={this.handleInputChange}></input>
                    <button onClick={this.handleButtonClick}>Add to task list</button>
                </div>
            </div>
        )
    }
}

