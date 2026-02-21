import UserTable from "../components/user/UserTable";
import UserForm from "../components/user/UserForm";
import { useEffect, useState } from "react";
import { fetchAllUsersAPI } from "../services/api.service";

const User = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await fetchAllUsersAPI();

      setDataUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <UserForm loadUser={loadUser} />
        <UserTable dataUsers={dataUsers} />
      </div>
    </>
  );
};

export default User;
