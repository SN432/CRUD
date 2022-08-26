import { useState } from "react"

const Crud =()=>{
    const [name, setName] = useState("");
    const [allData, setAllData] = useState([])
    const [show, setShow] = useState(true)
    const[editIndex, setEditIndex] = useState()
    const handleAdd =()=>{
        if(name.length !==0){
            setAllData(newData =>[...newData,name])
            setName("")
        }
    }
    const handleDelete =(index)=>{
        allData.splice(index,1)
        setAllData([...allData])
    }
    const handleUpdate = (i)=>{
        setName(allData[i])
        setShow(false)
        setEditIndex(i)
    }

    const Update=()=>{
        allData.splice(editIndex,1,name)
        setAllData([...allData])
        setShow(true)
        setName("")
    }
    return (
        
        <div className="div">
            <div className="title">Create your TO-DO List</div>
            <div>
                <input className="input" type="text" placeholder="Enter your todo" value={name} onChange={(e)=>setName(e.target.value)}/>
                {show?<button className="add" onClick={handleAdd} >Add list</button>:<button className="upd" onClick={Update}>Update</button>}
                
                {
                allData.map((val,i)=>
                <div className="list">
                    <div>
                        {val}
                    </div>
                    <div className="lbtn">
                        <button className="upd" onClick={()=>handleUpdate(i)}>Update</button>
                        <button className="del" onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                </div>
                    )
                 }
            </div>
        </div>
    )
}
export default Crud