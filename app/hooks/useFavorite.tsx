"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import toast from "react-hot-toast";

import { safeUser } from "../types";

import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser: null | safeUser;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [listingId, currentUser]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        const req = hasFavorited
          ? () => axios.delete(`/api/favorites/${listingId}`)
          : () => axios.post(`/api/favorites/${listingId}`);

        await toast.promise(req(), {
          loading: "Processing...",
          success: "Success",
          error: "Something went wrong",
        });

        router.refresh();
      } catch (err) {
        // Error already handled by toast.promise
      }
    },
    [hasFavorited, currentUser, listingId, loginModal, router]
  );    

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
