'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  projectId: string;
  uid: string;
  name: string;
  email: string;
  createdTime: number;
  lastLoginTime: number;
  // Additional profile fields
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  preferences?: any;
}

export interface UserProfile {
  _uid: string;
  _id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  preferences?: any;
  createdAt: string;
  lastLoginAt: string;
}

interface AuthState {
  user: User | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  authStep: 'email' | 'otp' | 'complete';
  
  // Actions
  sendOTP: (email: string) => Promise<void>;
  verifyOTP: (email: string, code: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (profileData: Partial<UserProfile>) => Promise<void>;
  fetchUserProfile: () => Promise<void>;
  setAuthStep: (step: 'email' | 'otp' | 'complete') => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      userProfile: null,
      isAuthenticated: false,
      isLoading: false,
      authStep: 'email',

      sendOTP: async (email: string) => {
        try {
          set({ isLoading: true });
          // Mock OTP sending - simulate network delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log(`Mock: OTP sent to ${email}`);
          set({ authStep: 'otp', isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      verifyOTP: async (email: string, code: string) => {
        try {
          set({ isLoading: true });
          // Mock OTP verification - simulate network delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // For demo purposes, accept any code
          if (code.length >= 4) {
            const mockUser: User = {
              projectId: 'demo-project',
              uid: `user-${Date.now()}`,
              name: email.split('@')[0] || 'Demo User',
              email: email,
              createdTime: Date.now(),
              lastLoginTime: Date.now(),
            };

            const mockUserProfile: UserProfile = {
              _uid: mockUser.uid,
              _id: `profile-${Date.now()}`,
              email: mockUser.email,
              name: mockUser.name,
              createdAt: new Date().toISOString(),
              lastLoginAt: new Date().toISOString(),
            };

            set({ 
              user: mockUser, 
              userProfile: mockUserProfile,
              isAuthenticated: true,
              authStep: 'complete',
              isLoading: false 
            });
          } else {
            set({ isLoading: false });
            throw new Error('Invalid OTP code');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        try {
          // Mock logout - no actual backend call needed
          await new Promise(resolve => setTimeout(resolve, 500));
          set({ 
            user: null, 
            userProfile: null,
            isAuthenticated: false,
            authStep: 'email'
          });
        } catch (error) {
          console.error('Logout error:', error);
          // Force local logout even if mock fails
          set({ 
            user: null, 
            userProfile: null,
            isAuthenticated: false,
            authStep: 'email'
          });
        }
      },

      updateProfile: async (profileData: Partial<UserProfile>) => {
        const { user, userProfile } = get();
        if (!user || !userProfile) throw new Error('User not authenticated');

        try {
          set({ isLoading: true });
          // Mock profile update - simulate network delay
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const updatedProfile = {
            ...userProfile,
            ...profileData,
            lastLoginAt: new Date().toISOString(),
          };
          
          set({ 
            userProfile: updatedProfile,
            isLoading: false 
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      fetchUserProfile: async () => {
        const { user } = get();
        if (!user) return;

        try {
          // Mock profile fetch - already set during verifyOTP
          console.log('Mock: User profile already loaded');
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
        }
      },

      setAuthStep: (step: 'email' | 'otp' | 'complete') => {
        set({ authStep: step });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: 'zyvia-auth-storage',
      partialize: (state) => ({
        user: state.user,
        userProfile: state.userProfile,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);