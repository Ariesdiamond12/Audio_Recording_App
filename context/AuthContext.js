import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../services/SupabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);

  //Sign Up function
  const signUpNewUser = async () => {
    const {data, error} = await supabase.auth.signUp({
        username: username,
        email: email,
        password: password
    })

    if(error){
        console.log(error.message)
    }
  }

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
