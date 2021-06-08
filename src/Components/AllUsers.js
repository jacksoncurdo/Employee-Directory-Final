import React from "react";
import UserList from "./UserList";

const AllUsers = (props) => {
  return (
    <> 
    <div className="container">
  <table className="table-resposive">
    <thead>
  <tr>
    <th>Picture</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Cell</th>
    <th>Email</th>
    <th>Timezone</th>
  </tr>
  
      {props.users.map((user) => (
        
        <UserList key={user.cell} user={user} />
      ))}
      </thead>
      </table>
      </div>
    </>
  );
};

export default AllUsers;