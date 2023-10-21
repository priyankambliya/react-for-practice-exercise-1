import axios from "axios";
import { useEffect, useState } from "react";
function AllDataPage() {

  const [ totalData,setTotaldata ] = useState([])
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const {data} = await axios.get("http://localhost:3000/data")
        if(data) setTotaldata(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[totalData])

  const handleDeleteEvent = async (id) => {
    debugger
    const {data} = await axios.delete
    (`http://localhost:3000/data/${id}`)
    if(data) console.log(totalData)
    setTotaldata(totalData)
  }

  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-extrabold">All Data Page</h1>
        <div className=" flex justify-center">
          <table className="w-3/4 mt-10">
            <tr>
              <th className="border border-1 border-black">Name</th>
              <th className="border border-1 border-black">Email</th>
              <th className="border border-1 border-black">Password</th>
              <th className="border border-1 border-black">Delete</th>
            </tr>
            {
              totalData.map( user => (
                <tr key={user.id}>
                  <td className="text-center border border-1 border-black">{user.name}</td>
                  <td className="text-center border border-1 border-black">{user.email}</td>
                  <td className="text-center border border-1 border-black">{user.password}</td>
                  <td className="text-center border border-1 border-black">
                    <button onClick={()=>handleDeleteEvent(user.id)}>delete</button>
                  </td>
                </tr>
              ) )
            }
          </table>
            {/* <button type="submit" className="bg-teal-600 p-1 rounded-xl text-white px-2">Delete</button> */}
        </div>
      </div>
    </>
  )
}

export default AllDataPage