export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("accessToken");
};

export const setTokenInLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeTokenInLocalStorage = () => {
  localStorage.removeItem("accessToken");
};

export const determineFileType = (file: File): string => {
  return file?.type.split("/")[0];
};

export const createAnArrayOfArbitraryLength = (
  length: number,
  defaultValue: any = 0
) => {
  return Array(length).fill(defaultValue);
};
