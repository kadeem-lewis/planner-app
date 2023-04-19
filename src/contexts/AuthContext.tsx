"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  UserCredential,
  signOut,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";

import firebase from "firebase/compat/app";
import { auth, googleProvider } from "../config/firebase";
interface Props {
  children: ReactNode;
}
interface AuthContextType {
  currentUser?: firebase.UserInfo | null;
  signup?: (email: string, password: string) => Promise<UserCredential>;
  login?: (email: string, password: string) => Promise<UserCredential>;
  logout?: () => Promise<void>;
  googleSignUp?: () => Promise<UserCredential>;
  anonymousSignUp?: () => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextType>({});

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<firebase.UserInfo | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const anonymousSignUp = () => {
    return signInAnonymously(auth);
  };
  const login = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    signup,
    login,
    logout,
    googleSignUp,
    anonymousSignUp,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
