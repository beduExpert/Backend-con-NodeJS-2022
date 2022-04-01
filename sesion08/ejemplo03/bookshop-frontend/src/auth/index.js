
const logout = () => {
  localStorage.removeItem("token");
};

const isUserAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const AuthService = {
  logout,
  isUserAuthenticated,
};
