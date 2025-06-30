"use client";

import { SessionProvider } from "next-auth/react";
import { ImageKitProvider } from "imagekitio-next";
import { NotificationProvider } from "./Notification";

const IMAGEKIT_URL_ENDPOINT = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
const IMAGEKIT_PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

/**
 * Authenticates ImageKit with a signed request from the backend
 */
const getImagekitAuth = async () => {
  try {
    const response = await fetch("/api/imagekit-auth");
    if (!response.ok) {
      throw new Error(`ImageKit Auth Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("[ImageKit Auth Error]", error);
    throw error;
  }
};

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * App-wide Providers Wrapper
 * Includes:
 * - Auth Session Management
 * - Notifications Context
 * - ImageKit Media Uploads
 */
export default function AppProviders({ children }: ProvidersProps) {
  return (
    <SessionProvider refetchInterval={300}>
      <NotificationProvider>
        <ImageKitProvider
          publicKey={IMAGEKIT_PUBLIC_KEY}
          urlEndpoint={IMAGEKIT_URL_ENDPOINT}
          authenticator={getImagekitAuth}
        >
          {children}
        </ImageKitProvider>
      </NotificationProvider>
    </SessionProvider>
  );
}
