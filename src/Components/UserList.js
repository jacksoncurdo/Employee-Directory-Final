import React from "react";

const UserList = (props) => {
  return (

      <tr>
        <td>
      <img alt="user" src={props.user.picture.thumbnail}></img>
      </td>
      <td>{props.user.name.first}</td>
      <td>{props.user.name.last}</td>
      <td>{props.user.cell}</td>
      <td>{props.user.email}</td>
      <td>{props.user.location.timezone.description} </td>
      </tr>
  );
};

export default UserList;