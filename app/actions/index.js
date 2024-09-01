

"use server";

import { signIn, signOut } from "@/auth";

// Function to handle signing out
export const doSignOut = async () => {
    await signOut();
};

// Function to handle Google sign-in
export const doSignIn = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
};

// Function to handle GitHub sign-in
export const doGithubSignIn = async () => {
    await signIn("github", { callbackUrl: "http://localhost:3000" });
};

// Function to handle credentials sign-in
export const doCredentialsSignIn = async (formData) => {
    try {
        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        });
        return response;
        
    } catch (error) {
        throw error;
    }
};
