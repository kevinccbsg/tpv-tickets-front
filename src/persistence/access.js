import persistence from '.';
import {
  COOKIE_SESSION_TOKEN,
  COOKIE_USERID,
} from '../constants';

const cookieStorage = persistence('cookieStorage');

const setAccess = ({ jwt, email }) => {
  cookieStorage.setItem(COOKIE_SESSION_TOKEN, jwt);
  cookieStorage.setItem(COOKIE_USERID, email);
};

const logout = () => {
  cookieStorage.removeItem(COOKIE_SESSION_TOKEN);
  cookieStorage.removeItem(COOKIE_USERID);
};

export {
  setAccess,
  logout,
};
