const Backendurl="https://6638602e4253a866a24d833c.mockapi.io/"


const Createdata=async(postdata)=>{
    try{
        const response=await fetch (`${Backendurl}/takedecision`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(postdata),
        
              })
              const data=await response.json()
              return data

    }catch(e){
        console.log(e)
        alert("Somthing went wrong ")
    }
 
}


const Getdata=async()=>{
   try{
    const response=await fetch(`${Backendurl}/takedecision`)
    const data=await response.json()
    return data
   }catch(e){
    console.log(e)
   }
}


  const DeleteData = async (postId) => {
    try {
        const response = await fetch(`${Backendurl}/takedecision/${postId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Failed to delete data");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.error("Error:", e);
        throw new Error("Something went wrong");
    }
};
export {Createdata,Getdata,DeleteData}