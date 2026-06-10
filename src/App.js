// import React from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {getAdd, getRed} from "./store/actions/action";
//
// function App(props) {
//     const dispatch = useDispatch();
//     const num = useSelector(state => state.num);
//
//     const handleAdd=()=>{
//         dispatch(getAdd(num));
//     }
//     const handleRed=()=>{
//         dispatch(getRed(num));
//     }
//     return (
//         <div>
//             <button onClick={handleAdd}>add</button>
//             <p>{num}</p>
//             <button onClick={handleRed}>red</button>
//         </div>
//     );
// }
//
// export default App;


import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {confirmation, countDone, del, deleteAll, done, getValue} from "./store/actions/action";
import Checkbox from "./styledComponents/Checkbox";
import DelBut from "./styledComponents/DelBut";
import EditBut from "./styledComponents/EditBut";
import L_Dmode from "./styledComponents/L_Dmode";
import AddBut from "./styledComponents/AddBut";
import ConfirmBut from "./styledComponents/ConfirmBut";
import CloseBut from "./styledComponents/CloseBut";
import DeleteAllBut from "./styledComponents/DeleteAllBut";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App(props) {
    const [text, setText] = useState('');
    const [editText,setEditText] = useState('');
    const dispatch = useDispatch();
    let data = useSelector((state) => state.data)
    const [modClick, setModClick] = useState(true);
    const count = useSelector((state) => state.count);
    const [editClick, setEditClick] = useState(false);
    const mode = ()=>{
        setModClick(!modClick);
    }

    useEffect(()=>{
        dispatch(countDone(0))
    },[data])
    useEffect(()=>{
        AOS.init({ duration: 600 });
    },[])

    useEffect(() => {
        document.body.style.overflow = editClick ? "hidden" : "";
        if(editClick)
            AOS.refresh()
        return () => {
            document.body.style.overflow = "";
        }
    }, [editClick]);

    const handleChange=(e)=>{
        setText(e.target.value);
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text !== '') {
            dispatch(getValue(text));
            setText('');
        }
    }

    const handleDone=(id)=>{
        dispatch(done(id));
    }
    const  handleDel=(id)=>{
        dispatch(del(id));
    }
    const handleChangeEdit=(e)=>{
        setEditText(e.target.value);
    }
    const handleEdit =(value)=>{
        setEditText(value)
        setEditClick(true);
    }
    const handleConfirm=(id,value)=>{
        if(value !== "") {
            dispatch(confirmation(id, value));
            setEditClick(false)
        }
    }
    const handleClose=()=>{
        setEditClick(false)
    }
    const handleDeleteAll=()=>{
        dispatch(deleteAll());
        localStorage.removeItem("list")
    }
    return (
        <div className={"wind"} style={modClick ? {
             background:"white"
        }:{  background:"black" }} >
            <L_Dmode mode={mode}/>
            <span style={ modClick ?
                {marginTop:'30px',fontSize:'40px'}
                :{color:'white',marginTop:'30px',fontSize:'40px'}}>To Do List</span>
            <form style={{
                width:"350px",
                height:'100px',
                borderRadius:'10px',
                display:'flex',
                justifyContent:'space-evenly',
                alignItems:'center'
            }}
                  onSubmit={handleSubmit}>
                <input className={"input"} style={ modClick ?{border:'1px solid'}:{border:'none'}} type={'text'} value={text} onChange={handleChange} />
                <AddBut modClick={modClick}/>
                <DeleteAllBut modClick={modClick} handleDeleteAll = {handleDeleteAll} />
            </form>
            {count ?
                <p className={"completionText"} style={ modClick? {color:"black",transition:'0.2s'}:{color: "white",transition:'0.2s'}}>
                    You have completed {count} task(s)
                </p> :null}
                {data.map(item=>(
                        <div key={item.id} className={'todos_div'} style={
                            modClick ? {background:'white',color:'black'}:{background:"black",color:'white'}}>
                            <Checkbox modClick={modClick}  checked={item.done} onChange={()=>handleDone(item.id)}/>
                            {item.done ?
                                <span className={'todos'}>
                                    <del>{item.value}</del>
                                 </span>
                                :
                                <span className={'todos'}>
                                    {item.value}
                                </span>
                            }
                            <div style={{position:'absolute',right:'30px',display:'flex'}}>
                                <EditBut modClick={modClick} handleEdit={()=>handleEdit(item.value)}/>
                                <DelBut  handleDel={()=>handleDel(item.id)}/>
                            </div>
                        </div>
                ))}
            {  editClick ? data.map(item => (
                    <div
                        key={item.id}
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 1000,
                        }}
                        onClick={() => handleClose()}
                    >
                        <div
                            className="editDiv"
                            data-aos="zoom-in"
                            onClick={(e) => e.stopPropagation()}
                            style={modClick?{background:'black'}:{background:"white"}}
                        >
                            <input
                                type="text"
                                value={editText}
                                onChange={handleChangeEdit}
                                className={"inputEdit"}
                                style={ modClick ?{border:'none'}:{border:'1px solid'}}
                            />
                            <CloseBut modClick={modClick} handleClose={() => handleClose()}/>
                            <ConfirmBut modClick={modClick} handleConfirm={() => handleConfirm(item.id, editText)}/>
                        </div>
                    </div>
            )) :null}
        </div>
    );
}

export default App;