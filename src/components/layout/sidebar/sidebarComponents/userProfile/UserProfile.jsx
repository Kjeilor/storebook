import React from "react";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "./UserProfile.scss";

function UserProfile() {
  return (
    <div className="user-profile-btn">
      <div className="button-wrpr">
        <div className="avatar-wrapper">
          {/* placeholder avatar */}
          <img src="/avatar.png" alt="avatar" />
        </div>
        <div className="name">User Name</div>
        <MoreVertOutlinedIcon className="kebab" />
      </div>
    </div>
  );
}

export default UserProfile;
