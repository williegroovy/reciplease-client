export const capitalizeFirstChar = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const userRequired = permission => (permission === 'user' || permission === 'manager' || permission === 'admin');

export const managerRequired = permission => (permission === 'manager' || permission === 'admin');

export const adminRequired = permission => (permission === 'admin');