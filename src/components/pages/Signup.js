import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Signup extends Component {
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
                <div id="signupFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                    <div className="col-md-6">   
                        <h3>Register with us?</h3>                             
                        <h2 className="bold">GET CONNECTED!</h2> 
                        <hr/><br/>                         
                    </div>
                    <div className="col-md-6">
                        
                    </div>
                    </div>        
                </div>
                <div id="loginSecondSection" className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 partOne">
                            <p>Thank you for your interest in joining the NOGIG community.<br/><br/> You will have access to our the online community, including forums, our newsletters, resources, the event calendar, and more.  You will also receive email communications from NOGIG.<br/><br/><h5 className="bold">HOW TO JOIN</h5>
                            The step to joining the community is to Sign Up. <br/><br/>You will know that you have been officially approved as a member when you receive an acceptance notification via email - this email will also include a member welcome packet and additional information.<br/><br/>
                            If you have any questions, please contact us at <a href="mailto:membership@nogig.com">membership@nogig.com</a> </p> 
                        </div>
                        <div className="col-md-6 partTwo">
                            <h3 className="bold">BECOME A MEMBER</h3>
                            <h5>Please enter your details</h5>
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
                                    <input type="checkbox"/> i'm not a robot
                                </div>
                            </div>
                            <div className="row push">
                                <div className="col-md-12">
                                    <input type="submit" value="Sign Up"/>
                                </div>
                            </div>
                            <div className="row push">
                                <div className="col-md-12">
                                   <p className="left">Already have an account? <Link to="/login">Login</Link></p>                                 
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

export default Signup;
