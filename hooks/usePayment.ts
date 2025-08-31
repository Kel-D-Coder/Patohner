// hooks/usePaystackApi.ts
import { useState, useCallback } from "react";
import axios from "axios";

// Define the props for making a payment
interface PaymentParams {
  email: string;
  amount: number; // in Naira (backend converts to kobo)
}

// Define the Paystack initialize response shape (simplified)
interface PaystackInitResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

const url = process.env.NEXT_PUBLIC_URL;
export function usePaystackApi() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // function to initialize payment
  const makePayment = useCallback(async ({ email, amount }: PaymentParams) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post<PaystackInitResponse>(
        `${url}/paystack/initialize`,
        {
          email,
          amount,
        }
      );

      const { authorization_url } = res.data.data;

      if (authorization_url) {
        window.location.href = authorization_url; // redirect to Paystack checkout
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.code === "ECONNABORTED" || !err.response) {
          setError("Network error. Please check your internet connection.");
        } else {
          setError(err.response?.data?.error || "Request failed");
        }
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { makePayment, loading, error };
}
