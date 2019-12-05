import React from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  React.useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;

// const Form = () => {
//   const [user, setUser] = useUser();
//   return (
//     <div>
//       <input value={user} onChange={e => setUser(e.currentTarget.value)} />
//     </div>
//   );
// };

// const AccountForm = () => {
//   const [user, setUser] = useUser();
//   return (
//     <div>
//       <h1>Account</h1>
//       <input value={user} onChange={e => setUser(e.currentTarget.value)} />
//     </div>
//   );
// };

// const useUser = () => {
//   const [user, setUser] = useLocalStorage("user", "");
//   return [user, setUser];
// };
