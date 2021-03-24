import React from 'react';

const LoginForm = (props) => {
  return (
    <form>
      <fieldset>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-email">Email</label>
          <div className="has-icon-left">
            <input className="form-input white-text" id="form-email" type="text" placeholder="Username" />
            
          </div>
        </div>
        <div className="mb-16">
          <label className="form-label" htmlFor="form-pass">Password</label>
          <div className="has-icon-left">
            <input className="form-input white-text" id="form-pass" type="password" placeholder="Password" />
            
          </div>
        </div>
        <div className="mt-24">
          <div className="button-group">
            <button className="button button-primary"><a to="/lab"></a>Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )
}

export default LoginForm;