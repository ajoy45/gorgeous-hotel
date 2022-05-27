import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SingUp = () => {
    let navigate = useNavigate();
    const[email,setEmail]=useState('');
    // console.log(email)
    const[password,setPassword]=useState('');
    //  console.log(password)
     const[users,setusers]=useState({});
    //  console.log(users);
     const[error,setError]=useState('');
     const[resistered,setResistered]=useState(false);
     
     const handelResistere=event=>{
         setResistered(event.target.checked)
     }

    const handelEmailBlur=event=>{
        setEmail(event.target.value);

    }
    const handelPasswordBlur=event=>{
        setPassword(event.target.value)

    }
    const handelSubmit=event=>{
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
           setusers(user)
        })
        .catch(error=>{
            setError(error)
        })
        if(users){
            alert('Thanks successful resister')
        }
        
    }

    if(resistered){
        navigate('/login')
    }
    return (
        <div>
            <h1 className='text-center mt-2'>SingUp</h1>
            <Form onSubmit={handelSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={handelResistere} type="checkbox" label="already resister ?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SingUp
                </Button>
                <button className='btn btn-primary ms-2'>Google login</button>
            </Form>
        </div>
    );
};

export default SingUp;