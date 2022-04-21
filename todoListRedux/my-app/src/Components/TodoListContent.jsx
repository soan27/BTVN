import React from 'react'
import { ListGroup, Button, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Message from './Message'
import { deleteList, addDone, removeDone } from '../redux/actions/listAction'

function TodoListContent() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.todoItems)
    const { todolist, repeat } = data
    console.log(todolist);

    const handleDelete = (name) => {
        dispatch(deleteList(name))
    }

    const handleComplete = (name) => {
        dispatch(addDone(name))
    }

    const handleInComplete = (name) => {
        dispatch(removeDone(name))
    }
    if (todolist.length > 0) {
        return (
            <div>
                {repeat ? <Message variant='danger'>This note is already add, please choose another one</Message> : null}
                <ListGroup>
                    {todolist.map((list) => (
                        <ListGroup.Item key={list.name}>
                            <Row>
                                <Col md={8} xs={8}>{list.name}</Col>
                                <Col md={2} xs={2} >
                                    {list.complete === true ? (
                                        <Button variant='success' onClick={() => {
                                            handleInComplete(list.name)
                                        }}>
                                            <i className="fas fa-check"></i>
                                        </Button>
                                    ) : (
                                        <Button variant='danger' onClick={() => {
                                            handleComplete(list.name)
                                        }}>
                                            <i className="fas fa-check"></i>
                                        </Button>
                                    )}

                                </Col>
                                <Col md={2} xs={2}>
                                    <Button variant='dask' onClick={() => {
                                        handleDelete(list.name)
                                    }}>
                                        <i className="fas fa-trash"></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))
                    }

                </ListGroup>
            </div>
        )
    } else {
        return (
            <ListGroup>
                <ListGroup.Item className='text-center'>
                    Nothing to do yet
                </ListGroup.Item>
            </ListGroup>
        )
    }
}

export default TodoListContent