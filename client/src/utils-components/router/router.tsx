import { FC } from "react";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../redux/selectors/auth-selector";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes } from "../../routes/private-routes";
import { publicRoutes } from "../../routes/public-routes";
import { RoutesPathNames } from "../../routes/types/routes-path-names";
import { PrivateLayout } from "../../components/private-layout/private-layout";

const Router: FC = () => {
  const isAuth = useSelector(AuthSelector.getAuthStatus);

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route element={<PrivateLayout />}>
            {privateRoutes.map(({ path, Component }) => {
              console.log(path);
              return <Route path={path} element={<Component />} key={path} />;
            })}
            <Route
              path="*"
              element={<Navigate to={RoutesPathNames.PROFILE_PAGE} replace />}
              key={"*/private"}
            />
          </Route>
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, Component }) => {
            console.log(path);
            return <Route path={path} element={<Component />} key={path} />;
          })}
          <Route
            path="*"
            element={<Navigate to={RoutesPathNames.SIGN_IN_PAGE} replace />}
            key={"*/public"}
          />
        </Routes>
      )}
    </>
  );
};

export { Router };
