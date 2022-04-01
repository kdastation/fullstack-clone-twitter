export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("accessToken");
};

export const setTokenInLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};
