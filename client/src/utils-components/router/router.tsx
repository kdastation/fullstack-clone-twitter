import { FC } from "react";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/selectors/auth-selector";
import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "../../routes/private-routes";
import { publicRoutes } from "../../routes/public-routes";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";

const Router: FC = () => {
  const isAuth = useSelector(AuthSelector.getAuthStatus);

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, Component }) => {
            console.log(path);
            return <Route path={path} element={<Component />} key={path} />;
          })}
          <Route path="*" element={<NotFoundPage />} key={"*/private"} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, Component }) => {
            console.log(path);
            return <Route path={path} element={<Component />} key={path} />;
          })}
          <Route path="*" element={<NotFoundPage />} key={"*/public"} />
        </Routes>
      )}
    </>
  );
};

export { Router };
