import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurf} from '../actions'
import {addSmurf} from '../actions'
import {deleteSmurf} from '../actions'


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    newSmurf: {
      name: '',
      age: '',
      height: ''
    }
  };

  componentDidMount(){
    this.props.getSmurf();
}

handleChanges = e => {
  e.persist();
  let value = e.target.value
  this.setState( prevState => ({newSmurf: { ...prevState.newSmurf, [e.target.name]: value }  }))
}

handleSubmit = e => {
  e.preventDefault();
  this.props.addSmurf(this.state.newSmurf)
  this.setState({
    newSmurf: {
      name: '',
      age: '',
      height: '',
    }
  })
}

delSmurf = id => {
  this.props.deleteSmurf(id)
  
};
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <form onSubmit = {this.handleSubmit}> 
          <input type = 'text' name = 'name' value = {this.state.newSmurf.name} onChange = {this.handleChanges} placeholder =  'Smurf Name'></input>
          <input type = 'number' name = 'age' value = {this.state.newSmurf.age} onChange = {this.handleChanges} placeholder =  'Smurf Age'></input>
          <input type = 'number' name = 'height' value = {this.state.newSmurf.height} onChange = {this.handleChanges} placeholder =  'Smurf Height'></input>
          <button> Submit</button>
        </form>
        <div>{this.props.smurfs.map((smurf, id) =>
          <div > 
            <h1> {smurf.name} </h1>
            <p>{smurf.name} smurf is {smurf.height} tall, and is {smurf.age} years old. </p>
            <button onClick = {() => this.delSmurf(smurf.id)} > Destroy Smurf </button>
          </div>
        )}
        </div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {getSmurf, addSmurf, deleteSmurf} 
)(App);
