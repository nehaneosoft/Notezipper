import React, { useEffect, useState } from 'react';
import { Button, Card,Badge, Accordion } from 'react-bootstrap';
import { Link , useHistory } from 'react-router-dom';
import MainScreen from '../../MainScreen';
//import notes from "../../../data/notes";
import axios from "axios";
import { useDispatch,useSelector} from "react-redux";
import { listNotes } from '../../../actions/notesActions';
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";

const MyNotes = () => {
    const dispatch = useDispatch();

    const noteList = useSelector((state) => state.noteList);
    const {loading, notes, error } =noteList;

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo } = userLogin;
    console.log(userInfo);

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;

    const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success:successUpdate } = noteUpdate;

    
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure ?")) {

        }
    };

    const history = useHistory();

    useEffect(()=>{
        dispatch(listNotes());
        if(!userInfo){
            history.push("/")
        }

    },[dispatch,successCreate,history,userInfo,successUpdate])

    return (
        <MainScreen title={`Welcome Back ${userInfo.name}...` }>
            <Link to="createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </Button>
            </Link>
            
               {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
               {loading && <Loading />}
               { notes?.reverse().map(note => (
                    <Accordion className='accordian-flush' key={note._id}>
                    <Card style={{ margin: 10 }}>
                        <Card.Header style={{ display: "flex" }}>
                            <span
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    fontSize: 18,
                                }}
                            >
                                <Accordion.Header> {note.title}</Accordion.Header>
                           
                            </span>
                            <div>
                                <Button href={`/note/${note._id}`}>Edit</Button>
                                <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                            </div>
                        </Card.Header>

                        <Accordion.Body >
                        <Card.Body>
                            <h4>
                                <Badge bg='success'>
                                    category - {note.category}
                                </Badge>
                            </h4>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {note.content} 
                                </p>
                                <footer className="blockquote-footer">
                                    created on {" "}
                                    <cite title='Source Title'>
                                        {note.createdAt.substring(0,10)}
                                    </cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                        </Accordion.Body>
                    </Card>
                    </Accordion>

                ))
    }
            



        </MainScreen>
    )
}

export default MyNotes;