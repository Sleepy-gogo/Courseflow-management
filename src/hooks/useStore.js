import { create } from "zustand";
import Cookies from "js-cookie";
import { checkForUser } from "../utilities/utils";

const useStore = create((set) => ({
  encuentro: JSON.parse(localStorage.getItem("encuentro")) ?? 1,
  user: checkForUser(),
  updateEncuentro: (encuentro) => set(() => ({ encuentro: encuentro })),
  updateUser: (googleUser) => {
    set(() => ({ user: googleUser }));
    Cookies.set("user", JSON.stringify(googleUser), { expires: 7 });
  }
}));

export default useStore;