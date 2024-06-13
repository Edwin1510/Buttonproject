import { useEffect, useState } from "react"
import { Createdata, DeleteData, Getdata } from "./Router"
import Show from "./Show"
import Asidebutton from "./Asidebutton"




function App() {

  const initialState = {
    name: "",
    description: "",
  }

  const [buttondesign,setbuttondesign]=useState({backgroundColor:"#87CEEB",color:"white",borderRadius: '10px'})

    const changebuttonStyle=(newstyle)=>{
        setbuttondesign(newstyle)
    }

  const [formdata, setformdata] = useState(initialState)

  const [show,setshow]=useState(false)

  const HandleShow=()=>{
    setshow(!show)
  }


  const HandleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const HandleSubmit=async(e)=>{
    e.preventDefault()
    const data=await Createdata(formdata)
    setpostdata([...postdata,data])
    setformdata(initialState)
    setshow(!show)
  }

  const [postdata, setpostdata] = useState([])


  const Getapi = async () => {
    const data = await Getdata();
    setpostdata(data)
  }

  useEffect(() => {
    Getapi()
  }, [])


  const HandleDelete=async(id)=>{
   await DeleteData(id)
   setpostdata(postdata.filter((p)=>p.id !==id))
  }

  return (
    <>


    
      {console.log(postdata)}
     
      <span>
        <button className="mainnearbox1">Background</button>
        <button className="mainnearbox2">Edit Templeates</button>
      </span>
      
       {show && (<form onSubmit={HandleSubmit}>
       <div className="container m-5 formmain">
        <div className="row"> 
          <div className="col-sm-12">
       <label htmlFor="name">Decision Name</label>
        <select id="name" name="name" onChange={HandleChange} value={formdata.name}>
                        <option value="Decision">Descision</option>
                        <option value="Routes">Routes</option>
                        <option value="Percentile pay">Percentile Pay</option>
                        <option value="Aeronautical viewpoint">Aeronautical viewpoint</option>
                        <option value="Flat area">Flat area</option>
                        <option value="Air navigation">Air navigation</option>
                        <option value="Mountains">Mountains</option>
                        <option value="Primary Commercial Service Airports">Primary Commercial Service Airports</option>
                        <option value="Obstructions">Obstructions</option>
                    </select><br/><br/>
                    </div>       
         <div className="col-sm-12">         
        <label htmlFor="description">Description</label>
        <input id="description" type="text" name="description" onChange={HandleChange} value={formdata.description} />
        <input type="submit" />
        </div> 
        </div>
        </div>
      </form>
        )}
       
        

      <div className="container-fluid main ">
        <div style={{margin:"5px"}}>
        <h6>Testing finalcial water:Liqudly</h6>
        <p className="par">Are you ready for Descision ? review flight routes you are prepare to execute
          your next quater in bussiness
        </p>
        </div>
      
      {postdata.map((p)=>{
            return(
              <>
              <Show {...p} key={p.id} onDelete={()=>HandleDelete(p.id)}
                 buttonDesign={buttondesign} changebutton={changebuttonStyle}/>
              </>
            )
      })}
      
      <span className="clkbutton" onClick={HandleShow}>
        <i className="fas fa-plus"><p>Add new Decision</p></i> 
        <button className="Nextbutton">Next</button>
      </span>
      </div>
     
      <button className="lastbutton">Move to Scorecard</button>

      <Asidebutton changebutton={changebuttonStyle}/>
  
    </>
   
     
   
    
  )
}

export default App
