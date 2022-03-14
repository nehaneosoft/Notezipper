import React, { useState, useEffect} from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
//import ErrorMessage from '../../ErrorMessage'
import MainScreen from '../../MainScreen'
import { Link ,useHistory} from 'react-router-dom'
import '../LoginScreen/LoginScreen.css'
import ErrorMessage from '../../ErrorMessage'
import axios from 'axios'
import Loading from '../../Loading'
import { useDispatch, useSelector } from "react-redux";
import { register } from '../../../actions/userActions'

const RegisterScreen = () => {
  const history = useHistory();

  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [pic,setPic] = useState( "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
  const [password, setPassord] = useState("");
  const [confirmPassword,setConfirmPassord] = useState("");
  const [message,setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
 // const [error, seterror] = useState(false);
  //const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(name, email, password, pic));
    
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please select an image");
    }
    setPicMessage(null);

    if(pics.type === 'image/jpeg' || pics.type === 'image/png'){
      const data = new FormData();
      data.append('file', pics)
      data.append('upload_preset','notezipper')
      data.append('cloud_name','dv3ivknsc');
      fetch("https://api.cloudinary.com/v1_1/dv3ivknsc/image/upload",{
        method: "POST",
        body: data,
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPic(data.url.toString());
        //console.log(pic)
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      return setPicMessage("Please select any image")

    }
  };


  return (
    <MainScreen title="REGISTER">

      <div className='loginContainer'>
        {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
        {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}

        {loading && <Loading />}
        <Form onSubmit={submitHandler}>

          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder='Enter name'
            onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              placeholder='Confirm Password'
             onChange={(e) => setConfirmPassord(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='pic'>
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              onChange={(e) => postDetails(e.target.files[0])}
              type="file"
              size="sm"
              custom
            />
          </Form.Group>

          <Button variant='primary' type='submit' className='mt-4'>Submit</Button>

        </Form>
        <Row className="py-3">
          <Col>
            Already Registered ? <Link to="/login">Login Here</Link>
          </Col>
        </Row>
      </div>

    </MainScreen>
  )
}

export default RegisterScreen