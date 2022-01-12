import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"

const OwnerContent = () => {
    const [owners, setOwners] = useState([]);

//This is the id used in the useEffect below
const id = parseInt(useParams().id)

const URL = apiUtils.getUrl()

useEffect(() => {
    const getOwners = async () => {
        const response = await axios.get(URL + "/owner/" + id)
        setOwners(response.data.owners)
    }
    getOwners()
}, [URL,id]);

    return (
        <div>
            <h1>SEE OWNER CONTENT HERE</h1>
            <h1>Hello, you are currently visiting the owner with the ID: {id}</h1>
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
          {owners.map((owner) => <tr key={owner.id}><td>{owner.id}</td><td>{owner.name}</td>
          <td>{owner.address}</td><td>{owner.phone}</td>
          </tr>)}
        </tbody>
      </table>
        </div>
    )
}

export default OwnerContent