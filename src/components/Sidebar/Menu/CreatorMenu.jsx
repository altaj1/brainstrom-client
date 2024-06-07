import { MdCreateNewFolder } from "react-icons/md";
import MenuItem from "./Menuitem";
import { IoCreate } from "react-icons/io5";
import { GrDocumentConfig } from "react-icons/gr";


const CreatorMenu = () => {
    return (
        <>
        <MenuItem icon={MdCreateNewFolder} label='Add Contest' address='Add-Contest' />
        <MenuItem icon={IoCreate} label='My Created Contest' address='MyCreatedContest' />
        <MenuItem
          icon={GrDocumentConfig}
          label='Contest Submitted'
          address='ContestSubmitted'
        />
      </>
    );
};

export default CreatorMenu;