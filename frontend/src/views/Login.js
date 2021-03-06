import React, { Component } from 'react';
import Image from '../components/elements/Image';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Login extends Component {

state={
  email:null,
  password:null
}

changeHandle=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
}

SubmitHandle=(e)=>{
  e.preventDefault();
  console.log(this.state);
  axios.post('http://localhost:8080/hsp/login',this.state).then((res)=>{
    if(res.data.login){
      console.log(this.props);
      this.props.history.push("/hospital/dashboard")
    }

  })
  .catch((err)=>{
    console.log(err);
  });
}


  render(){
  return (
    <>
      <section className="section center-content">
        <div className="container">
          <div className="section-inner">
            <div className="split-wrap invert-mobile invert-desktop">
              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Login</h3>
                  <p className="m-0">For Hospitals</p>
                  <form  onSubmit={this.SubmitHandle} style={{color:"white"}}>
                    <fieldset>
                      <div className="mb-16">
                        <label className="form-label white-text" htmlFor="email">Email</label>
                        <div className="has-icon-left white-text">
                          <input className="form-input white-text" id="email" type="text" placeholder="Username" onChange={this.changeHandle}/>
                          
                        </div>
                      </div>
                      <div className="mb-16">
                        <label className="form-label" htmlFor="password">Password</label>
                        <div className="has-icon-left">
                          <input className="form-input white-text" id="password" type="password" placeholder="Password" onChange={this.changeHandle}/>
                          
                        </div>
                      </div>
                      <div className="mt-24">
                        <div className="button-group">
                          <Link to="/hosdash"><button className="button button-primary">Submit</button></Link>
                        </div> 
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div className="split-item-image">
                  <Image
                    className="has-shadow"
                    src={require('../assets/images/hos_blue.png')}
                    alt="Hostpital"
                    width={900}
                    height={700} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
}

export default Login;