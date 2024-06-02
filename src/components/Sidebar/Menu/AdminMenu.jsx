import { FaUserCog } from 'react-icons/fa'
import MenuItem from './Menuitem'
import { BsFillMotherboardFill } from "react-icons/bs";


const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
      <MenuItem icon={BsFillMotherboardFill} label='Manage Contests' address='ManageContest' />
    </>
  )
}

export default AdminMenu
