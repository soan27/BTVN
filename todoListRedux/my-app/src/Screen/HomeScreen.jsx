import React from 'react'
import { Card } from 'react-bootstrap'
import TodoListContent from '../Components/TodoListContent'
import TodoListForm from '../Components/TodoListForm'
function HomeScreen() {
    return (
        <div>
            <h1 className='text-center text-info'>Todo List</h1>
            <Card>
                <Card.Header className='text-center'>
                    A to do list using react , redux
                </Card.Header>
                <TodoListForm />
            </Card>
            <h1 className='text-info text-center '>Your List</h1>
            <TodoListContent />
        </div>
    )
}

export default HomeScreen