import './Assidebutton.css'

const Asidebutton=({changebutton})=>{

    const HandleChange=()=>{
        changebutton({borderRadius:"10px",backgroundColor:"blue" })
    }

    const HandleChange1=()=>{
        changebutton({backgroundColor:"blue",color:"white"})
    }
    const HandleChange2=()=>{
        changebutton({backgroundColor:"white",border:"2px solid brown",color:"brown",borderRadius:"15px"})
    }
    const HandleChange3=()=>{
        changebutton({backgroundColor:"white",border:"2px solid brown",color:"brown"})
    }
    return(
        <>
       
        <div className='main3'>
        <h6>Design download</h6>
        <button className="buttonA" onClick={HandleChange}>Download</button>
        <button  className="buttonB" onClick={HandleChange1}>Download</button>
        <button  className="buttonC" onClick={HandleChange2}>Download</button>
        <button  className="buttonD" onClick={HandleChange3}>Download</button>
        </div>
        
       
        </>
    )
}

export default Asidebutton