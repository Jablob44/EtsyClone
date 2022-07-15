import React from "react";
import { withRouter } from "react-router-dom";
class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillUnmount(){
      this.props.clearSessionErrors();
    }
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(this.props.closeModal);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    renderErrors() {
        console.log(this.props.errors)
        if (this.props.errors){
            return(
              <ul>
                {this.props.errors.map((error, i) => (
                  <li key={`error-${i}`}>
                    {error}
                  </li>
                ))}
              </ul>
            );
        }
        else{
            return null
        }
      }

    loginDemoUser(){
      this.setState({username: "demo", email: "demotheuser", password: "123456"})
      const demoUser = Object.assign({}, this.state);
      this.props.action(demoUser)
    }

    render(){
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1>Welcome!</h1>
                    <br/>
                    Please {this.props.formType} or {this.props.otherForm}
                    {/* <div onClick={this.props.closeModal} className="close-modal">X</div> */}
                    {this.renderErrors()}
                    <div className="login-form">
                    <label>Username:
                        <br/>
                        <input type="text" className="input-feild" value={this.state.username} onChange={this.update("username")}/>
                    </label>
                    <br/>
                    <label>Email:
                        <br/>
                        <input type="text" className="input-feild" value={this.state.email} onChange={this.update("email")}/>
                    </label>
                    <br/>
                    <label>Password:
                        <br/>
                        <input type="password" className="input-feild" value={this.state.password} onChange={this.update("password")}/>
                    </label>
                    <br/>
                    <input type="submit" className="submit-button" value={this.props.formType}/>
                    {
                      this.props.formType === "login" ?
                        <button onClick={() => this.loginDemoUser()}>Demo User</button> : null
                      
                    }
                    </div>
                </form>
            </div>
        )
    }
  }

  export default withRouter(SessionForm);