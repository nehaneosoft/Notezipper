import React, { useEffect, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import MainScreen from '../../MainScreen'
import {Link,history, useHistory} from 'react-router-dom'
import './LoginScreen.css'
import Loading from '../../Loading';
import ErrorMessage from '../../ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../actions/userActions';

const LoginScreen = () => {
    const history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassord] = useState("");
    
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() =>{
        if(userInfo){
            history.push("/mynotes")
        }
    },[history,userInfo]);

    
    const submitHandler= async(e) => {
        e.preventDefault();  
        dispatch(login(email,password));
    };

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