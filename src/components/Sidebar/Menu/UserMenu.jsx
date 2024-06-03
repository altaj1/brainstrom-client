


import MenuItem from "./Menuitem"
import { BsFingerprint } from "react-icons/bs"


const UserMenu = () => {

  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label='My Participated Contest'
        address='MyParticipatedContest'
      />
      <MenuItem
        icon={BsFingerprint}
        label='MyWinningContestPage'
        address='MyParticipatedContest'
      />

    </>
  )
}

export default UserMenu
