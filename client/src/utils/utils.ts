export const getTokenFromLocalStorage = () => {
  localStorage.getItem("accessToken");
};

export const setTokenInLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};
