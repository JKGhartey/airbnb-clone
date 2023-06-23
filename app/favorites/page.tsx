import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import FavoritesClient from "./FavoritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import React from "react";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <div>
        <ClientOnly>
          <EmptyState
            title="No favorites"
            subtitle="Looks like you have no favorite listings"
          />
        </ClientOnly>
      </div>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
