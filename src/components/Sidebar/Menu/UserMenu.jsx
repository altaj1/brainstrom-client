


import MenuItem from "./Menuitem"
import { BsFingerprint } from "react-icons/bs"
import { SiMyspace } from "react-icons/si";

const UserMenu = () => {

  return (
    <>
      <MenuItem
        icon={SiMyspace}
        label='My Participated Contest'
        address='MyParticipatedContest'
      />
      <MenuItem
        icon={BsFingerprint}
        label='My Winning Contest Page'
        address='myWinningContest'
      />

    </>
  )
}

export default UserMenu
