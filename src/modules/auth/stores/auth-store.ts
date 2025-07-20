import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TUserSuccessResponse } from '../auth-schema';

interface IAuthState {
  user: TUserSuccessResponse | null;
  isAuthenticated: boolean;
  setUser: (user: TUserSuccessResponse | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<IAuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user
          ? { ...state.user, session: undefined } // Only persist user data
          : null,
      }),
    }
  )
);
