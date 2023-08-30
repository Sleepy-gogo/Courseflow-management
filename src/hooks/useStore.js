import { create } from "zustand";

const useStore = create((set) => ({
  encuentro: JSON.parse(localStorage.getItem("encuentro")) ?? 1,
  updateEncuentro: (encuentro) => set(() => ({ encuentro: encuentro }))
}));

export default useStore;