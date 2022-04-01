import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../async-thunks/auth-async-thunks";

const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginOnClick = async () => {
    try {
      await dispatch(loginUser(email, password));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginOnClick}>Логин</button>
      </div>
    </div>
  );
};

export { LoginForm };
