import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './css/Header.css'



class IronMan extends Component {
    constructor(){
        super()        
        this.state={hello: "",
        username: ""
    }
        
    }
    onChangeHandle = (event) =>{
       const myname = event.target.name;
       const myvalue = event.target.value;
      this.setState({ [myname]: myvalue })
    }
    onSubmitHandle = (event) =>{
        alert( this.state.fname, this.state.username)
    }
    render() {
        return(
            <div>
             <h3> Form Example:</h3>
                <h4> Username: {this.state.username}</h4>
                <h4> First Name: {this.state.fname}</h4>
             <form onSubmit={this.onSubmitHandle}>
                 <input onChange={this.onChangeHandle} name="username" type="text" placeholder="enter name" className="input-group"></input> 
                 <input onChange={this.onChangeHandle} name="fname" type="text" placeholder="enter first name" className="input-group"></input>      
                <button className="btn btn-info">Submit</button>
            </form>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        )
    }
}
export default IronMan