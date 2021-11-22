import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

const  CheckList=({toDoList,setToDoList}) =>{
    const [classifier, setClassifier] = useState('btn-light')
    
    const handleDelete=({id})=>{
        setToDoList(toDoList.filter((todo)=>todo.id!==id))
    }
    const handlecomplete=(todo)=>{
        if(todo.completed){
            setClassifier('btn-light')
            return todo.completed=false
        }
        else {
            setClassifier('btn-success')
            return todo.completed=true}
    }
    const buttonhandler=(todo)=>{
        if(todo.completed){
            
            return 'btn-success'
        }
        else {
            
            return 'btn-light'}
    }
    const stylehandler=(todo)=>{
        if(todo.completed){
            
            return 'line-through'
        }
        else {
            
            return 'none'}
    }
    return (
        <div >
            {toDoList.map((todo)=>
                <li className="justify-content-between" style={{display:'flex',width:'100%'}} key={todo.id} >

                <p style={{textDecorationLine:`${stylehandler(todo)}`,width:'75%',padding:5,backgroundColor:'white', borderRadius:5,margin:5}} >{todo.title}</p>

                <Button className="btn btn-light mb-4" key={`del-${todo.id}`} onClick={()=>{handleDelete(todo)}} 
                        style={{margin:5}}><FontAwesomeIcon icon={faTrash} /></Button>

                <Button className={`btn ${buttonhandler(todo)} mb-4`} key={`check-${todo.id}`} onClick={()=>{handlecomplete(todo)}}
                style={{margin:5}}><FontAwesomeIcon icon={faCheckCircle} /></Button>

                </li>)}
        </div>
    )
}
export default CheckList
