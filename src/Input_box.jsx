import React from "react";

class Input_box extends React.Component {

  state={
        first:"",
        last:"",
        email : "",
        contacts :"",
        url:"",
        gender:"",
        choice:"",
        subject:"",
    }

   
     error=(e)=>{
        e.preventDefault();
        if(this.state.first=== "" || this.state.last === "" ||this.state.email === "" || this.state.contacts=== "" || this.state.url ==="")
        {
            alert('Mandatory');
            return;
        }
        //console.log(this.state)
        this.props.Add_details(this.state);
        
    };

    reset=(e)=>{
        this.setState({first:"", last:"",email:"",contacts:"",url:"",gender:"Male"});
    };
    


    render(){
       return(
        <div> 
            <form className="ui form" onSubmit={this.error}>
             <div>
               <label>First Name*</label>
                 <input type='text' 
                  name = 'first'
                 placeholder="First Name"
                 value={this.state.first }
                 onChange={(e) => this.setState({ first: e.target.value })} /> 
             </div>
            <div>
               <label>Last Name*</label>
                 <input type='text' 
                  name = 'last'
                  placeholder=" Last Name" 
                  value={this.state.last }
                 onChange={(e) => this.setState({ last: e.target.value })} />
             </div> 
             <div>
               <label>Enter Email*</label>
                 <input type='text' 
                  name = 'email'
                 placeholder="Email"
                 value={this.state.email }
                 onChange={(e) => this.setState({ email: e.target.value })} />
            </div> 
            <div>
            <label>Contact*</label>
                 <input type ='text' 
                  name = 'contacts'
                  placeholder="Contact"
                  value={this.state.contacts }
                  onChange={(e) => this.setState({ contacts: e.target.value })} />
              </div>


        <div>
            <label>Gender*</label><br/>
                 <input type="radio" 
                 value={this.state.gender }
                 onChange={(e) => this.setState({ gender: e.target.value })}/>
                     Male <tab/><tab/>
                 <input type="radio" 
                 value={this.state.gender }
                 onChange={(e) => this.setState({ gender: e.target.value })}/>
                      FeMale<tab/><tab/>
                 <input type="radio"
                 value={this.state.gender }
                 onChange={(e) => this.setState({ gender: e.target.value })} />
                       Other<br/><br/>
        </div>
             <div>
            <label>Best Subject</label><br/>
                 <input type="radio" />
                      <label>English</label> <tab/><tab/>
                 <input type="radio" />
                      <label>Maths</label><tab/><tab/>
                <input type="radio" />
              <label>Physics</label>
              </div>
              <div>
              <label>Enter URL</label>
                <input 
                  type='text'
                  name='url'
                  placeholder='URL'
                  value={this.state.url }
                 onChange={(e) => this.setState({ url: e.target.value })} />
             </div>
             <div>
            <label>Select Your Choice</label>
            <select name="choice" id="choice">
                <option value="Front-End">Front-End</option>
                   <option value="Back-End">Back-End</option>
                <option value="Full-Stack">Full-Stack</option>
                   <option value="Styling">Styling</option>
            </select>
            <br/>
            </div>
            <div>
                 <button className="ui button green" onClick={this.reset}>Reset</button> <tab/>
                  <button className="ui button green">Submit</button>
            </div>
             
        </form>
       </div>
  )}
}

export default Input_box