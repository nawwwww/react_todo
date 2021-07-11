import React from 'react';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }
    handleRemove(someId) {
        const temp = this.props.list.filter((el) => {
            return el.id != someId
        })
        this.props.deleteButtonStateLift(temp);
    }

    handleDone(e, someId){
        e.stopPropagation();
        let temp = this.props.list.map((el) => {
            if (el.id == someId) {
                el.doneState = !el.doneState;
            }
            return el;
        })
        this.props.handleDoneStateLift(temp);
    }

    render() {
        return (
            <ol className="list">
                {this.props.list.map((listElem) => {
                    let key = Math.random() * 10000;
                    let showDone = listElem.doneState == true ? "imgOn" : "imgOff";
                    return (
                        <div className="listItemWrapper" key={key}>
                            <img className={showDone} src={"https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/done.svg"} />
                            <li id={listElem.id} onClick={(e) => this.handleDone(e, listElem.id)}>
                                {listElem.content}
                            </li>
                            <button onClick={() => this.handleRemove(listElem.id)}>
                                    delete
                            </button>
                        </div>
                    )
                })}
            </ol>

        )
    }
}