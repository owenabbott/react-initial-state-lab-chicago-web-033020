// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        let status = this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        return (
            status
        )
    }
}

export default Bomb