import React, {Component} from 'react';

class Register extends Component {
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
                <div id="registerFirstSection" className="container-fluid relative">
                    <div className="overlay"></div>
                    <div className="row">
                        <div className="col-md-6">   
                            <h3>Want to be part of the event?</h3>                             
                            <h2 className="bold">PARTICIPANT'S ENTRY FORM 2020</h2> 
                            <hr/><br/>                         
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>        
                </div>
                <div id="registerSecondSection" className="container-fluid">
                    <div className="row">
                        <form>
                            <div className="col-md-12">
                                <p>Please fill in your details to register and participate in our competition. <br/>Note: All Fields are required. Please ensure that your details are correct.</p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Surname" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Other Names" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Position/Job Title" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Department/Workgroup" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Date of Employment" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="text" placeholder="Employment No." required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="email" placeholder="Email Address" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="email" placeholder="Phone Number" required/>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="file" id="passport" className="off"/>
                                        <label for="passport">Attach Passport</label>
                                        <input type="file" id="myForm" className="off"/>
                                        <label for="myForm">Attach Signed Form</label>
                                    </div>
                                </div>
                                <div className="row push left">
                                    <div className="col-md-12">
                                        <h5>Select the sports you will want to participate in!</h5>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Athletics
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Badminton
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Basketball
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Chess
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Golf
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Lawn Tennis
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Scrabble
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Soccer
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Squash
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Swimming
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> Table Tennis
                                            </div>
                                            <div className="col-md-3">
                                                <input type="checkbox"/> 8-Ball Pool
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row push">
                                    <div className="col-md-12">
                                        <input type="submit" value="Register Now"/>
                                        <p> <a href="./form.docx">Click here to download the Participant's form if you don't have</a></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                
          </>
        );
    }
  
}

export default Register;
