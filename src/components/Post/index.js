import React from "react";

export default function Post(props) {
  function testeButtonClick() {
      props.chamaAlerta(props.post.id)
  }
  return (
    <li>
      <div>
        <strong>{props.post.title}</strong>
      </div>
      <div>{props.post.body}</div>
      <button onClick={() => testeButtonClick()}>Teste {props.post.id}</button>
    </li>
  );
}
