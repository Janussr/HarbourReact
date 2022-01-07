import authUtils from "../utils/authUtils"
import { useNavigate } from "react-router-dom";


const User = ({ currentRoles }) => {
  const username = localStorage.getItem('user')

  const navigate = useNavigate();

  const viewOwner = () => {
    navigate('/owner')
  }

  return (
    <div>
      {authUtils.handleAccess('user', currentRoles) ? < h1 > Welcome {username}, this is the user page. Only users with the role: 'user' may access this.</h1> : (<h1>You do not have the correct role to view this page</h1>)}
   
   
      <button className="btn btn-success m-1 " onClick={viewOwner}>See a list of Owners</button> 
   
    </div>
  )
}

export default User