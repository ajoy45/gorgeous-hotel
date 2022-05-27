import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const[email,setEmail]=useState('');
    // console.log(email)
    const[password,setPassword]=useState('');
    //  console.log(password)
     const[users,setUsers]=useState({});
    //  console.log(users)
     const[error,setError]=useState('')
     
     const [resister,setResister]=useState(false);
     const handelResister=event=>{
         setResister(event.target.checked)
     }
    const handelEmailBlur=event=>{
        setEmail(event.target.value);

    }
    const handelPasswordBlur=event=>{
        setPassword(event.target.value)

    }
    const handelSubmit=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
            setUsers(user)
            
        })
        .catch(error=>{
            setError(error)
        })

       if(users){
           alert('thanks successful login')
       }
        
    }
    // google sing in
    const handelGoogleSingin=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user=result.user;
            setUsers(user)
        })
        .catch(error=>{
            setError(error)
        })
        
    }
    if(resister){
        navigate('/sing-up');

    }
    
    return (
        <div>
            <h1 className='text-center'>Login</h1>
            <Form onSubmit={handelSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={handelResister} type="checkbox" label="please resister" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <button onClick={handelGoogleSingin} className='btn btn-primary ms-2'>Google login</button>
            </Form>
        </div>
    );
};

export default Login;