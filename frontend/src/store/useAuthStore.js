import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { apiUrls } from "../utils/constants";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingUp: false,
    isUpdatingProfile: false,
    isCheckingAuth: true, // loading state
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get(apiUrls.authCheck);
            const data = res.data;
            set({authUser:data});
        } catch (error) {
            console.error("Error in checkAuth: ", error);
            set({authUser:null})
        } finally {
            set({isCheckingAuth:false})
        }
    }
}));