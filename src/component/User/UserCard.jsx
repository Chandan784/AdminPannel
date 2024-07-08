import React from "react";

function UserCard({ data }) {
  return (
    <div>
      <div className=" w-auto flex justify-center items-center h-fit flex-col text-2xl px-4 py-4 border-2">
        <h1>{data.email}</h1>
        <h1>{data.fullName}</h1>
        <h1>{data.initialPassword}</h1>
        <h1>{data.phone}</h1>
      </div>
    </div>
  );
}

export default UserCard;
