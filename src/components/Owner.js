import { useState, useEffect } from "react"
import apiUtils from "../utils/apiUtils";


const Owner = () => {

    const URL = apiUtils.getUrl()
    const [owners, setOwners] = useState([]);

    useEffect(() => {
        const getOwners = async () => {
            const response = await apiUtils.getAuthAxios().get(URL + '/owner/all')
            setOwners(response.data.owners)
        }
        getOwners()
    }, [URL, owners]);

    return (
        <div>
            <h1>Welcome OWNER</h1>

            <table className="table table-light">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Address</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map((owner) => (<tr key={owner.id}><td>{owner.id}</td><td>{owner.name}</td><td>{owner.address}</td><td>{owner.phone}</td></tr>))}
                </tbody>
            </table>

        </div>
    )
}

export default Owner