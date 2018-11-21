import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            success:"",
            errors: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((res) => {
            res.json()
                .then(data =>{
                    if(data.success) this.setState({success: data.success})
                    else this.setState({errors: data})

                    let auth = [this.state.username, this.state.success]

                    window.localStorage.setItem('auth', auth)
                })
                .then(()=>{
                    if(this.state.success){
                        setTimeout(()=>{
                          this.props.history.push('/');
                        },2000)
                      }
                })
                .catch(err => console.log(err))
        })
    }

    onChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {errors} = this.state
        let content;
        if(errors){
            content = <small className="text-danger">{errors.message}</small>
        }

        return (   
        <div className="container-fluid bg-white py-3"> 
        <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center mb-4">Login</h3>
              <fieldset>
                {content}
                <div className="form-group has-error">
                  <input onChange={this.onChange} className="form-control input-lg" placeholder="Username" name="username" type="text" />
                </div>
                <div className="form-group has-success">
                  <input onChange={this.onChange} className="form-control input-lg" placeholder="Password" name="password" type="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
        </form>
        </div>
        );
    }
}

export default Login;