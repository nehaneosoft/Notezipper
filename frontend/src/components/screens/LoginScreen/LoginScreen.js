import React, { useEffect, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import MainScreen from '../../MainScreen'
import {Link} from 'react-router-dom'
import './LoginScreen.css'
import axios from 'axios';
import Loading from '../../Loading';
import ErrorMessage from '../../ErrorMessage';

const LoginScreen = () => {

    const [email,setEmail] = useState("");
    const [password,setPassord] = useState("");
    const [error, setError] =useState(false);
    const [loading, setLoading] =useState(false);

    
    const submitHandler= async(e) => {
        e.preventDefault();

        try{
            const config = {
                headers : {
                    "Content-type": "application/json"
                }
            }

            setLoading(true)

            const { data } =await axios.post('/api/users/login',
            {
                email,
                password,
            },
            config
            );

            console.log(data);
            localStorage.setItem("userInfo",JSON.stringify(data));
            setLoading(false);

        }catch(error){
            setError(error.response.data.message);
            setLoading(false);

        }

        console.log(email, password);
    }

  return (
  <MainScreen title="LOGIN">
      <div className='loginContainer'>
          {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
          {loading && <Loading />}
          <Form onSubmit={submitHandler}>
              <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                   type="email"
                   value={email}
                   placeholder='Enter email'
                   onChange={(e) => setEmail(e.target.value)}
                   />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                   type="password"
                   value={password}
                   placeholder='Enter Password'
                   onChange={(e) => setPassord(e.target.value)}
                   />
                </Form.Group>

            <Button variant='primary' type='submit' className='mt-4'>Submit</Button>

          </Form>
          <Row className="py-3">
              <Col>
               New Customer ? <Link to="/register">Register Here</Link>
              </Col>
          </Row>
      </div>
      </MainScreen>
  );
};

export default LoginScreen