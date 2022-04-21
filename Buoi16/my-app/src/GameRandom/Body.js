import React from 'react'

export default function Body(props) {
  return (
    <div className="body">
        <button onClick={props.newGame}>New game</button>
        <hr />
        <p className="font-weight-bold">So lan ban doan la: {props.count}</p>
        <p className="font-weight-bold">So ban doan la</p>
        <input
          value={props.inputValue}
          type="number"
          name=""
          id=""
          onChange={props.onchangeValue}
        />
        <button className="btn-success" onClick={props.guess}>
          Doan
        </button>
        <p>{props.message}</p>
      </div>
  )
}
