import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../async-thunks/auth-async-thunks";
import { AuthSelector } from "../redux/selectors/auth-selector";

export const useCheckAuth = () => {
  const isLoading = useSelector(AuthSelector.getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return {
    isLoading,
  };
};
