import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"
import { NavLink } from "react-router-dom"

const HarbourContent = () => {
  const [boats, setBoats] = useState([]);

  //This is the id used in the useEffect below
  const id = parseInt(useParams().id)

  const URL = apiUtils.getUrl()

  useEffect(() => {
    const getBoats = async () => {
      const response = await axios.get(URL + "/harbour/" + id)
      setBoats(response.data.boats)
    }
    getBoats()
  }, [URL, id]);

  return (
    <div>
      <h1>Hello, you are currently visiting the harbour with the ID: {id}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Make</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {boats.map((boat) => <tr key={boat.id}><td>{boat.id}</td><td>{boat.brand}</td><td>{boat.make}</td><td>{boat.image}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HarbourContent