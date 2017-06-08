import React from 'react';
import {connect} from 'react-redux';

import {startLogin} from 'actions';

export class Login extends React.Component{
  render(){
    var {dispatch} = this.props;

      return(
        <div>
          <h1 className="pageTitle">Todo App</h1>
          <div className="row">
            <div className="columns small-centered small-10 medium-6 large-4">
              <div className="callout callout-auth">
                <h3>Login</h3>
                <p>
                  Login with Github account
                </p>
                <button className="button" onClick={()=>{dispatch(startLogin())}}>Login with GitHub</button>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default connect()(Login);
