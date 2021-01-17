import React, { Component } from 'react';
import './covid.css';
class Covidcard extends Component {
    state = {  }
    render() { 
        let item =this.props.data;
        return ( 
            <div className='design' style={{background: '#f5f5f5'}}>
               <p> { item.country} </p>
               <div style={{display:'flex', justifyContent: 'space-between'}}>
               <div>New Cases</div>
               <div>Recovered</div>
               <div>Death</div>
               </div>
               <div style={{display:'flex', justifyContent: 'space-between',}}>
               <div style={{color: 'blue'}}>{item.cases}</div>
               <div style={{color: 'green'}}>{item.recovered}</div>
               <div style={{color: 'red'}}>{item.deaths}</div>
               </div>
               <div style={{height:20}}> </div>
                   <hr></hr>
                <div style={{height:20}}> </div>

               <div style={{display:'flex', justifyContent: 'space-between'}}>
               <div>Total New Cases</div>
               <div>Active</div>
               <div>Today Death</div>
               </div>
               <div style={{display:'flex', justifyContent: 'space-between',}}>
               <div style={{color: 'blue'}}>{item.todayCases}</div>
               <div style={{color: 'green'}}>{item.active}</div>
               <div style={{color: 'red'}}>{item.todayDeaths}</div>
               </div>

               <div style={{height:20}}> </div>
                   <hr></hr>
                <div style={{height:20}}> </div>
                <div style={{textAlign:'center'}}> Critical Patients</div>
                <div style={{textAlign:'center'}}>{item.critical}</div>


            </div>
         );
    }
}
 
export default Covidcard;