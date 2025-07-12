import { createContext, useContext, useEffect, useState } from "react";
 // Ensure correct import path for Firebase
import { auth } from "../firebase";
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";

const authContext = createContext();

export const useAuth = () => useContext(authContext);  // Corrected typo here

export const AuthProvider = ({ children }) => {  // Corrected capitalization (AuthProvider)

  const [currentUser, setCurrentUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unSubs();  // Cleanup subscription on component unmount
  }, []);

  const value = {
    signUp,
    signIn,
    logOut,
    currentUser
  };

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
};
