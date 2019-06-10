import React from 'react';

class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    };

    login = () => {
        localStorage.setItem('username', (this.state.username))
        localStorage.setItem('password', (this.state.password))
    }

    inputHandler = e => {
        this.setState(
            {[e.target.name]: e.target.value})             
        }
    

    render() {
        return(
            <div>
                <h2>Please Enter Username and Password</h2>
                <form className="login-form" onSubmit={this.login}>
                    <input className="Username" onChange={this.inputHandler} type="text" name="username" value={this.state.username} />

                    <input className="Password"  onChange={this.inputHandler} type="password" name="password" value={this.state.password} placeholder="type here" />
                    <button> Log In </button>
                </form>
            </div>
        )
    }
}
export default LoginPage;