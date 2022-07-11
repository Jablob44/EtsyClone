import React from "react";

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
  
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user);
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

    render(){
        return(
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update("username")}/>
                    </label>
                    <br/>
                    <label>Email:
                        <input type="text" className="input-feild" value={this.state.email} onChange={this.update("email")}/>
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" className="input-feild" value={this.state.password} onChange={this.update("password")}/>
                    </label>
                    <br/>
                    <input type="submit" className="submit-button" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        )
    }
  }

  export default SessionForm;