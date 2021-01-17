
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
      duplicateData:[],
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
        duplicateData:response.data,
        loading: false
      })
      
    }).catch(function (error) {

      
    })

  }

  handleChange=(event)=>{
    let duplicateData = this.state.duplicateData;
    console.log(event.target.value);
    let data = this.state.covidData.filter(function(val) {
      if(val.country.toLowerCase().indexOf(event.target.value.toLowerCase())!=-1){
        return val;
      }
      
    });
    this.setState({
      duplicateData: data
    })


  };

  render() { 
    return (
      <div>
        <div className='head'>
         <header className='header'>
           <p className="para">Corona Tracer</p>
          <input className='input' type='text' placeholder="search" onChange={this.handleChange} ></input>
         </header>
         </div>

      <div style={{ margin: '20px auto', marginLeft: '20px', marginRight: '20px', padding: '8px'}}>
       
        {this.state.loading?
         <div> data is loading</div> :

        <div>
        
        {
          this.state.duplicateData.map((data)=> 
         < Covidcard data={data} />
          )
        }
        </div>
  } 
        </div>
        <footer></footer>
        </div>
        
       
     
      );
  }
}
 
export default App;


