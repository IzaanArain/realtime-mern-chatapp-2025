import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { apiUrls } from "../utils/constants";
import toast from "react-hot-toast";

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
        try {
            const res = await axiosInstance.post(apiUrls.signup, data);
            set({authUser:res.data});
            toast.success("Account created successfully");
        } catch (error) {
            console.error("Error in signup: ", error);
            toast.error(error.response.data.message);
        } finally {
            set({isSigningUp:false})
        }
    },
    logout: async () => {
        try {
            await axiosInstance.post(apiUrls.logout);
            set({authUser:null});
            toast.success("Logged out successfully");
        } catch (error) {
            console.error("Error in logout: ", error);
            toast.error(error.response.data.message);
        }
    },
    login: async (data) => {
        try {
            const res = await axiosInstance.post(apiUrls.login, data);
            set({authUser:res.data});
            toast.success("Logged in successfully");
        } catch (error) {
            console.error("Error in login: ", error);
            toast.error(error.response.data.message);
        } finally {
            set({isLoggingIn:false})
        }
    },
}));