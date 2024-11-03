import { Component } from "react";

class User extends Component{
    constructor(props){
        super(props)
        this. state={
            count:1,
            count1:2,
        }
       console.log("constructor Called");
    }
   
    Increment=()=>{
        const {count}=this.state
        this.setState((prevState)=>({ count:prevState.count+1}))
        console.log(count);
    }
    componentDidMount(){
        console.log("component did mount is called");
    }
    
    
    render(){
       const {name}=this.props
       const {count}=this.state
       console.log("render is called");
        return(
            <div>
                <h2>{name}:Goals</h2>
                <button onClick={this.Increment}>{count}</button>
                <p>Need to achieve lot more in life and need to become sd1 Software well reputated company </p>
                <p>Belive in hard work pays off </p>
            </div>
        )
    }
}

export default User