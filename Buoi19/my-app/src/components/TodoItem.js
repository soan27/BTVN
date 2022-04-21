import React from 'react'

export default function TodoListItem(props) {
  return (
    <div>
       <li>
          {props.item}
          <span class="icon" onClick={() => {
            props.deleteTask(props.index)
          }}>
            <i class="fa-solid fa-trash"></i>
          </span>
        </li>
    </div>
  )
}
