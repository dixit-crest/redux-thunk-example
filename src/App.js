import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/users/userActions";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // getUsers();
    dispatch(getUsers());
  }, []);

  const users = useSelector((state) => state.user);
  return (
    <div className="App">
      {console.log(users)}

      <h1>{users.loading ? "Loading" : "Not Loading"}</h1>
      <h1>{users.success ? "SUCCESSFUL" : "FAILURE"}</h1>
      {users.users.map((u) => (
        <h2>{u.email}</h2>
      ))}
    </div>
  );
}
