import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { updateProfile } from "@firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    //firebase 언어를 react 언어로 연결시켜주고 있음
    authService.onAuthStateChanged((user) => {
      if (user) {
        //setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  //user를 새로고침 해주는 function
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) =>
        updateProfile(user, { displayName: user.displayName }),
    });
  };
  return (
    <>
      {init ? (
        // <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
