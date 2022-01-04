import React,{useState}from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = (props) => {

    const [credentials, setCredentials] = useState({name:'',email:"",password:""})
    
    const navigate = useNavigate();
   
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`,{
            method: 'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body: JSON.stringify({name: credentials.name, email: credentials.email,password: credentials.password})
          });
          const json= await response.json();
          console.log(json);
          if(json.success){
              // save the auth token and redirect
              localStorage.setItem('token',json.authtoken); 
              navigate('/');
              props.showAlert("Account created successfully",'success');
          }
          else{
              props.showAlert("Invalid credentials",'danger');
          }

          
    }
    return (
        <div>
            <h1 style={{fontFamily:"Garamond",fontWeight:'bolder'}}>Create a new Account</h1>
            <form onSubmit={handleSubmit}>
                 <div className="my-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                <input onChange={onChange} type="text" className="form-control" name='name' id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={onChange} type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                    </div>
                    <div className="col-auto">
                        <input onChange={onChange} type="password" name='password' id="password" className="form-control" aria-describedby="passwordHelpInline" minLength={5} required/>
                    </div>
                    <div className="col-auto">
                        <span id="passwordHelpInline" className="form-text">
                        Must be Atleast 5 characters long.
                        </span>
                    </div>
                 </div>
                <div className='d-flex my-5'><button type="submit" className="btn btn-primary px-4">Submit</button></div>
            </form>
        </div>
    )
}

export default Signup
