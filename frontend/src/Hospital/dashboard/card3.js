import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'; 
import 'materialize-css/dist/css/materialize.min.css';
import './dashboard.css';


class Card3 extends Component {
  componentDidMount() { 
    M.AutoInit();
  }
  render(){
    return(
        
         <div className="card" id="dashboardcard1" >
            
              <h5 className="black-text">Users Visited</h5>
              <div className="row">
              <div className="col s7">
                <h4 className="black-text"><span>4500k</span></h4>
              </div>    
              <div className="col s5">
                <div className="card icon" id= "das_c_c3">
                   <i className="fas fa-user small"></i>
                </div>
              </div>
              
              </div>
          </div>
        
      );
  }
  
}

export default Card3;  