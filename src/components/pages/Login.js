import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props){
        super(props);  
        this.state={
            value:''
        };   
        this.handleChange=this.handleChange.bind(this);   
    }
    async handleChange(event){
      await this.setState({
            value:event.target.value
      });    
    }
    render(){           
        return (
            <>
                <div id="loginFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                    <div className="col-md-6">   
                        <h3>Already a Member?</h3>                             
                        <h2 className="bold">LOGIN</h2> 
                        <hr/><br/>                         
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                    </div>        
                </div>
                <div id="loginSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 partOne">
                            <p>Welcome to NOGIG. In order to access our membership platform, an account is required. It's easy! If you are a member, simply sign in with your username and password below.<br/><br/>
                                If you are not a member, you can gain access to NOGIG by joining us!<br/><br/>
                                The process is simple, and we encourage you to apply to join us.  Click on the "Click here to Sign Up" link below and fill out the application that follows.  We'll get back to you in order to welcome you to our community!
                                <br/><br/>If you have an issues regards the process, please send us an email at: membership@nogig.com
                            </p>
                        </div>
                        <div className="col-md-6 partTwo">
                            <h3 className="bold">LOGIN</h3>
                            <h5>Please enter your email and password</h5>
                            <div className="row push">
                                <div className="col-md-12">
                                    <input type="email" placeholder="Enter Email" required/>
                                </div>
                            </div>
                            <div className="row push">
                                <div className="col-md-12">
                                    <input type="password" placeholder="Enter Password" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 left">
                                    <input type="checkbox"/> Remember Me?
                                </div>
                            </div>
                            <div className="row push">
                                <div className="col-md-12">
                                    <input type="submit" value="Login"/>
                                </div>
                            </div>
                            <div className="row push">
                                <div className="col-md-12">
                                   <p className="left">Forgot your password? <Link to="/forgotPassword">Click here</Link></p>
                                   <p className="left push2">Don't have an account yet? <Link to="/signup">Click here to Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contactThirdSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="bold">FOLLOW US</h2>
                            <hr/><br/>
                            <div className="row">
                                <div className="col-md-12">
                                <img src={require('../../assets/img/facebook icons.png')} alt="social media"/> <img src={require('../../assets/img/linkedln icon.png')} alt="social media"/> <img src={require('../../assets/img/pintrest icons.png')} alt="social media"/> <img src={require('../../assets/img/twitter icons.png')} alt="social media"/>  <img src={require('../../assets/img/youtube icons.png')} alt="social media"/> <img src={require('../../assets/img/instagram icons.png')} alt="social media"/>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>   
  
            </>
        );
    }
  
}

export default Login;
