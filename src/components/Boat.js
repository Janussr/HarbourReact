import axios from "axios";
import { useState, useEffect } from "react"
import apiUtils from "../utils/apiUtils";
import { NavLink } from "react-router-dom"

const Boat = () => {
    const URL = apiUtils.getUrl()

    const [boats, setBoats] = useState([]);
    const [boat, setBoat] = useState({ brand: "", image: "", make: "", name: "", harbourId: {id: 0} });


    const handleInput = (event) => {
        setBoat({ ...boat, [event.target.id]: event.target.value })
    }

  


    const createBoat = async () => {
       await axios.post(URL + "/boat/create", {
        brand: boat.brand,
        make: boat.make,
        name: boat.name,
        image: boat.image,
        harbour: { id: boat.id }


        
      })
      //Fetch again in the function in order to re render the website(so it doesnt spam in network)
      const response = await apiUtils.getAuthAxios().get(URL + '/boat/all')
      setBoats(response.data.boats)
    }


    const deletedata = async (event) => {
        const boatId = event.target.id
        await axios.delete(URL + '/boat/' + boatId)

        //Fetch again in the function in order to re render the website(so it doesnt spam in network)
        const response = await apiUtils.getAuthAxios().get(URL + '/boat/all')
            setBoats(response.data.boats)
    }


    useEffect(() => {
        const getBoats = async () => {
            const response = await apiUtils.getAuthAxios().get(URL + '/boat/all')
            setBoats(response.data.boats)
        }
        getBoats()
    }, [URL]);

    return (



        <div>
            <h1>Boat</h1>

            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Image</th>
                        <th>Make</th>
                        <th>Name</th>
                        <th>Harbour Id</th>
                        <th>See Boat Owner</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {boats.map((boat) => (<tr key={boat.id}>
                    <td>{boat.id}</td>
                    <td>{boat.brand}</td>
                    <td>{boat.make}</td>
                    <td>{boat.name}</td>
                    <td>{boat.image}</td>
                    <td>{boat.harbourId}</td>
                    <td><NavLink to={`/ownercontent/${boat.id}`}><button className="btn btn-primary">See owners</button></NavLink></td>
                    <td><button className="btn btn-danger" id={boat.id} onClick={deletedata}>Delete</button></td></tr>))}
                    
                </tbody>
            </table>

            <div className="center">
                <form onChange={handleInput}>
                    <input placeholder="brand" id="brand" />
                    <input placeholder="image" id="image" />
                    <input placeholder="make" id="make" />
                    <input placeholder="name" id="name"  />
                    <input  id="id" placeholder="Enter harbour ID" type="text"></input>
                </form>   
                <button className="btn btn-success" onClick={createBoat}>Create boat</button>
            </div>



        </div>
    )
}

export default Boat