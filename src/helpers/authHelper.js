import Cookies from "js-cookie";

export const authHeader = () => {
  let sessionObj = getLocalStorage();
  if (sessionObj && sessionObj.access_token) {
    return {
      Authorization:sessionObj.access_token,
      "Content-Security-Policy": "default-src 'self',frame-src 'self'",
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
    };
  } else {
    return {
      "Content-Security-Policy": "default-src 'self',frame-src 'self'",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
    };
  }
};

export const setLocalStorage = (sessionObj, rememberMe) => {
  if (rememberMe) {
    Cookies.set("authUser", JSON.stringify(sessionObj), { expires: 1 });
  }
  localStorage.setItem("authUser", JSON.stringify(sessionObj));
};

export const getLocalStorage = () => {
  const cookieVal = Cookies.get("authUser") || null;
  return JSON.parse(localStorage.getItem("authUser") || cookieVal);
};

export const getLocalStorageId = () => {
  const cookieVal = Cookies.get("authUser") || null;
  return JSON.parse(localStorage.getItem("authUser") || cookieVal)?.userInfo?.id;
};
export const getLocalStorageRoleId = () => {
  const cookieVal = Cookies.get("authUser") || null;
  return JSON.parse(localStorage.getItem("authUser") || cookieVal)?.userInfo?.roleId;
};
export const deleteLocalStorage = () => {
  localStorage.removeItem("authUser");
  Cookies.remove("authUser");
  window.location.reload()
};

export const deleteCookie = () => {
  Cookies.remove("authUser");
};
