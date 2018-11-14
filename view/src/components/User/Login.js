import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
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
        }).then((res) => res.json())
        .then(data => this.setState({errors: data}))
        .catch(err => console.log(err))
    }

    onChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    render() {
        const error = this.state.errors.message
        let content;
        if(error){
            content = <small className="text-danger">{error}</small>
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={this.onChange} name="username" type="text" className="form-control" placeholder="Enter username"/>
                        <small className="form-text text-muted">We'll never share your account with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input onChange={this.onChange} name="password" type="password" className="form-control" placeholder="Password" />
                        {content}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;