import { useState, useEffect } from "react"
import apiUtils from "../utils/apiUtils";
import { NavLink } from "react-router-dom"

const Harbour = () => {
    const URL = apiUtils.getUrl()

    const [harbours, setHarbours] = useState([]);


    useEffect(() => {
        const getHarbours = async () => {
            const response = await apiUtils.getAuthAxios().get(URL + '/harbour/all')
            setHarbours(response.data.harbours)
      
        }
        getHarbours()
    }, [URL]);

    


    return (

        <div>
            <h1>Harbour Site</h1>

            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Address</th>
                        <th>Capacity</th>
                        <th>Name</th>
                        <th>Boats in this harbour</th>
                    </tr>
                </thead>
                <tbody>
                    {harbours.map((harbour) => (
                    <tr key={harbour.id}>
                    <td>{harbour.id}</td>
                    <td>{harbour.address}</td>
                    <td>{harbour.capacity}</td>
                    <td>{harbour.name}</td>
                    <td><NavLink to={`/harbour/${harbour.id}`}><button className="btn btn-primary">See boats</button></NavLink></td>
                   </tr>))}
                    
                </tbody>
            </table>

        </div>
    )
}

export default Harbour