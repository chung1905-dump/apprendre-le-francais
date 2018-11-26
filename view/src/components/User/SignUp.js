import React, {Component} from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      status: ""
    }
  }

  handleSubmit = (e) => {
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
    }).then((res) => {
      res.json()
        .then(data => {
          this.setState({
            message: data.message,
            status: data.status
          });
        })
        .then(() => {
          if (this.state.status) {
            setTimeout(() => {
              this.props.history.push('/login')
            }, 2000)
          }
        })
        .catch(err => console.log(err))
    });

    if (this.state.status) {
      setTimeout(() => {
        this.props.history.push('/login')
      }, 2000)
    }
  };

  render() {
    const {message, status} = this.state;
    let alert;
    if (!status) {
      alert = <div className="alert alert-danger">
        <p className="close font-weight-light" data-dismiss="alert">×</p>{message}
      </div>
    } else {
      alert = <div className="alert alert-success">
        <p className="close font-weight-light" data-dismiss="alert">×</p>{message}
      </div>
    }
    return (
      <div className="container-fluid bg-white py-3">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card card-body">
                <h3 className="text-center mb-4">Sign-up</h3>
                {message ? alert : null}
                <fieldset>
                  <div className="form-group has-error">
                    <input className="form-control input-lg" placeholder="Username" name="username" type="text"
                           required/>
                  </div>
                  <div className="form-group has-success">
                    <input className="form-control input-lg" placeholder="Password" name="pwd" type="password"
                           required/>
                  </div>
                  <div className="form-group has-success">
                    <input className="form-control input-lg" placeholder="Confirm Password" name="pwd-repeat"
                           type="password"/>
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
