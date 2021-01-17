
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Covidcard from './covid';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      covidData: [],
      loading: true
    }
  }

  componentDidMount(){
    this.getRemoteDta();
  }

  getRemoteDta=( ) => {
    let self = this;
    axios.get(' https://coronavirus-19-api.herokuapp.com/countries')
    .then(function (response) {
      self.setState({
        covidData:response.data,
        loading: false
      })
      
    }).catch(function (error) {

      
    })

  }
  render() { 
    return (
      <div style={{maxWidth:600, margin: '20px auto'}}>
        {this.state.loading? <div> data is loading</div> :
        <div>
        {
          this.state.covidData.map((data)=> 
         < Covidcard data={data} />
          )
        }
        </div>
  }
        
        </div>
        
       
     
      );
  }
}
 
export default App;


