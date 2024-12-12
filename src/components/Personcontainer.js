import React from "react";
import ProfileSelector from "./ProfileSelector";
import roles from "../data";

const ProfileContainer = () => {
  return (
    <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-12">
      {roles.map((roleData, index) => (
        <ProfileSelector key={index} role={roleData.role} people={roleData.people} />
      ))}
    </div>
  );
};

export default ProfileContainer;
