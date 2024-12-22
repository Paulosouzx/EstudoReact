// jsx = JavaScript XML(HTML)

//Default exports deixa mudar o nome do component onde ele for importado, ja o named exports obriga a utilizar o nome do component em { nome }.

//props : { author, content }

import {Header} from "./Components/Header";

export function Fundamentos(props) {
  return (
    <div>
      <Header/>
      <h1> {props.author} </h1>
      <p> {props.content}</p>
    </div>
  );
}
