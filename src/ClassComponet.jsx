import React from "react";

export class ClassComponet extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            age: 0
        }
    }

    
    render(){
        const changeAge = (sign) => {
            let newage =  this.state.age + 1
            if (sign === '-') {
                newage = this.state.age -  1
            }
            this.setState({age: newage})
        }
        return(
            <div>
                <h1>Class Component</h1><br/>
                <input value={this.state.name} onChange={e=>this.setState({name: e.target.value})}/>
                <br/>
                <br/>
                <button onClick={()=>changeAge('-')}>-</button>{this.state.age}<button onClick={()=>changeAge('+')}>+</button>
                <br/>
                <br/>
                <label>My name is {this.state.name} and I am {this.state.age} years old</label>
            </div>
        )
    }
}