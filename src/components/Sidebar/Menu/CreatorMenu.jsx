import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "./Menuitem";
import { MdHomeWork, MdOutlineManageHistory } from "react-icons/md";


const CreatorMenu = () => {
    return (
        <>
        <MenuItem icon={BsFillHouseAddFill} label='Add Contest' address='Add-Contest' />
        <MenuItem icon={MdHomeWork} label='My Created Contest' address='MyCreatedContest' />
        <MenuItem
          icon={MdOutlineManageHistory}
          label='Manage Bookings'
          address='manage-bookings'
        />
      </>
    );
};

export default CreatorMenu;