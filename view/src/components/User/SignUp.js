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
      <div className="container-fluid bg-light py-3">
        <form onSubmit={SignUp.handleSubmit}>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center mb-4">Sign-up</h3>
              <div className="alert alert-danger">
                <a className="close font-weight-light" data-dismiss="alert">×</a>Password is too short.
              </div>
              <fieldset>
                <div className="form-group has-error">
                  <input className="form-control input-lg" placeholder="Username" name="username" type="text" />
                </div>
                <div className="form-group has-success">
                  <input className="form-control input-lg" placeholder="Password" name="pwd" defaultValue type="password" />
                </div>
                <div className="form-group has-success">
                  <input className="form-control input-lg" placeholder="Confirm Password" name="pwd-repeat" defaultValue type="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </fieldset>
            </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

export default SignUp;