import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { apiUrls } from "../utils/constants";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true, // loading state
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get(apiUrls.authCheck);
            console.log(res)
            const data = res.data;
            set({authUser:data});
        } catch (error) {
            console.error("Error in checkAuth: ", error);
            set({authUser:null})
        } finally {
            set({isCheckingAuth:false})
        }
    },
    signup: async (data) => {

    }
}));