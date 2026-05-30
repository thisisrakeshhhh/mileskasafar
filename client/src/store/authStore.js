import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import api from "../lib/api";

export const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      async login(payload) {
        const response = await api.post("/auth/login", payload);
        const { user, accessToken, refreshToken } = response.data.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        set({
          user: {
            id: user.id || user._id,
            name: user.name,
            email: user.email,
            phone: user.phone
          },
          isAuthenticated: true
        });
      },
      async signup(payload) {
        const response = await api.post("/auth/register", payload);
        const { user, accessToken, refreshToken } = response.data.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        set({
          user: {
            id: user.id || user._id,
            name: user.name,
            email: user.email,
            phone: user.phone
          },
          isAuthenticated: true
        });
      },
      logout() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({ user: null, isAuthenticated: false });
      },
      async initialize() {
        const token = localStorage.getItem("accessToken");
        if (!token) return;

        try {
          const response = await api.get("/auth/profile");
          const user = response.data.data;
          set({
            user: {
              id: user.id || user._id,
              name: user.name,
              email: user.email,
              phone: user.phone
            },
            isAuthenticated: true
          });
        } catch {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          set({ user: null, isAuthenticated: false });
        }
      }
    }),
    {
      name: "miles-ka-safar-auth",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
