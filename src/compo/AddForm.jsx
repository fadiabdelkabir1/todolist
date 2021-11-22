import React from 'react'
import {Button} from 'react-bootstrap'
import{v4 as uuidv4} from 'uuid'

const AddForm=({inputValue,setInputValue,toDoList,setToDoList}) =>{
    const onInputChange=(event)=>{
        setInputValue(event.target.value); 
    }    
    const onAdd=()=> {
        toDoList.push({title:inputValue,id:uuidv4(),completed:false})
        setInputValue('');
        }
    return (
        <form>
            <div className="d-flex justify-content-between" >
                <input
                className="form-control form-control-sm  mb-4" 
                type="text" placeholder="What do you want to do ?" style={{minWidth:'80%',margin:5}}
                value={inputValue}
                required
                onChange={onInputChange}
                >
                </input>
                <Button  onClick={onAdd} className="btn btn-light mb-4" style={{maxWidth:'20%',margin:5}}>ADD</Button>
            </div>
        </form>
    )
}
export default AddForm