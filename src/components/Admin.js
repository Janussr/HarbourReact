import authUtils from "../utils/authUtils"
import { useNavigate } from "react-router-dom";

const Admin = ({ currentRoles }) => {
  const username = localStorage.getItem('user')

  const navigate = useNavigate();

  const viewBoats = () => {
    navigate('/boat')
  }


  return (
    <div>
      {authUtils.handleAccess('admin', currentRoles) ? < h1 > Welcome {username}, this is the admin page. Only users with the role: 'admin' may access this.</h1> : (<h1>You do not have the correct role to view this page</h1>)}
  
      <br></br><br></br>
      <div className="center">
  
      <button className="btn btn-success m-1 " onClick={viewBoats}>See & Create Boats</button> 
      </div>



    </div >
  )
}

export default Admin