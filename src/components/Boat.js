import axios from "axios";
import { useState, useEffect } from "react"
import apiUtils from "../utils/apiUtils";

const Boat = () => {
    const URL = apiUtils.getUrl()

    const [boats, setBoats] = useState([]);
    const [boat, setBoat] = useState({ brand: "", image: "", make: "", name: "" });


    const handleInput = (event) => {
        setBoat({ ...boat, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        const getBoats = async () => {
            const response = await apiUtils.getAuthAxios().get(URL + '/boat/all')
            setBoats(response.data.boats)
        }
        getBoats()
    }, [URL, boats]);


    const createBoat = async () => {
        await axios.post(URL + '/boat/create', boat)

    }


    const deletedata = async (event) => {
        const boatId = event.target.id
        await axios.delete(URL + '/boat/' + boatId)
    }

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
                        <th>Delete</th>
                        <th>Harbour Id</th>
                    </tr>
                </thead>
                <tbody>
                    {boats.map((boat) => (<tr key={boat.id}>
                    <td>{boat.id}</td>
                    <td>{boat.brand}</td>
                    <td>{boat.make}</td>
                    <td>{boat.name}</td>
                    <td>{boat.image}</td>
                    <td><button className="btn btn-danger" id={boat.id} onClick={deletedata}>Delete</button></td></tr>))}
                </tbody>
            </table>

            <div className="center">
                <form onChange={handleInput}>
                    <input placeholder="brand" id="brand" />
                    <input placeholder="image" id="image" />
                    <input placeholder="make" id="make" />
                    <input placeholder="name" id="name"  />
                </form>
                <button className="btn btn-success" onClick={createBoat}>Create boat</button>
            </div>



        </div>
    )
}

export default Boat