import "./App.css";
import React,{useState} from 'react'
import HeaderTitle from './compo/HeaderTitle'
import AddForm from "./compo/AddForm";
import CheckList from "./compo/CheckList"

export default function App() {
  const [inputValue,setInputValue]=useState("")
  const [toDoList, setToDoList  ] = useState([])

  return (
    <div className="justify-content-center container-fluid"  style={{maxWidth:500,borderRadius:10,backgroundColor:'#343a40',marginTop:40,boxShadow:'0 0 10px black'}}>
      <HeaderTitle></HeaderTitle>
      <CheckList toDoList={toDoList} setToDoList={setToDoList}><p>heehe</p></CheckList>
      <AddForm
      inputValue={inputValue}
      setInputValue={setInputValue} 
      toDoList={toDoList}
      setToDoList={setToDoList}
      ></AddForm>
    </div>
  )
}




