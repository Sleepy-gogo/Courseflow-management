import useStore from "./useStore";
import { supabase } from "../supabase/supabase.config";
import { useEffect } from "react";
import Cookies from "js-cookie";

function useUserAuth() {
  const [user, updateUser] = useStore(state => [state.user, state.updateUser]);
  
  async function signInWithProvider() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      })

      if (error) alert("An error has ocurred while trying to Sign In. Please wait and try again.")

      return data
    } catch (error) {
      console.log(error)
    }
  }

  async function signOut() {
    const {error} = await supabase.auth.signOut()

    if (error) alert("An error has ocurred while trying to Sign Out. Please wait and try again.")
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session) {
        updateUser({});
        Cookies.remove("user");
      }

      updateUser(session?.user.user_metadata)
    })

    return () => {
      authListener.subscription;
    }
  }, [updateUser])

  return {user, signInWithProvider, signOut}
}

export default useUserAuth;