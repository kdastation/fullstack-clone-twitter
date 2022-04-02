import { FC, useState } from "react";
import { IUser } from "../../models/user-model";
import { UserService } from "../../services/api-service/user-service";

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsersOnClick = async () => {
    try {
      const receviedUsers = await UserService.getUsers();
      setUsers(receviedUsers);
    } catch (error: any) {
      console.log(error?.response);
    }
  };

  return (
    <div>
      <div>Пользователи</div>
      <div>
        {users.map((user) => {
          return <div key={user.email}>{user.email}</div>;
        })}
      </div>
      <button onClick={fetchUsersOnClick}>Получить пользователей</button>
    </div>
  );
};

export { Users };
