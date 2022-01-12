import { useParams } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import apiUtils from "../utils/apiUtils"

const BoatSwapHarbour = () => {
    const URL = apiUtils.getUrl()
    const [harbourId, setHarbourId] = useState(0);

//This is the id used in the useEffect below
const id = parseInt(useParams().id)

const handleInput = (event) => {
    setHarbourId({ ...harbourId, [event.target.id]: event.target.value })
}

const swapHarbour = async () => {
    await axios.put(URL + "/boat/connect/" + id, {
        harbourId
   })
}

    return (
        <div>
            <h1>Boat swap harbour</h1>
            <form onChange={handleInput}>
                    <input  id="id" placeholder="Enter harbour ID" type="text"></input>
                </form>   
                <button className="btn btn-success" onClick={swapHarbour}>Swap harbour</button>
        </div>
    )
}
export default BoatSwapHarbour