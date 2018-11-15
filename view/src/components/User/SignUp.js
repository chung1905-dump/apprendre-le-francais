import React, {Component} from 'react';

class SignUp extends Component {
  static handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    fetch('/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <form style={{border: '1px solid #ccc'}} onSubmit={SignUp.handleSubmit}>
          <div className="container">
            <div>
              <h1>Sign Up</h1>
              <p>Please fill in this form to create an account.</p>
              <hr/>
            </div>
            <div>
              <label htmlFor="user"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="username" required/>
            </div>
            <div>
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="pwd" required/>
            </div>
            <div>
              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="pwd-repeat" required/>
            </div>
            <div className="clearfix">
              <button type="button" className="cancelbtn">Cancel</button>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;