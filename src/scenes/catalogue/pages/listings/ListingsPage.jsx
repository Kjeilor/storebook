import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

import { databases, Query } from '../../../../lib/appwriteConfig';

import ProductCard from "./components/productCard/ProductCard";
import SearchBar from "../../../../components/layout/searchBar/SearchBar";
import OfferingTypeSelector from "../../components/OfferingTypeSelector/OfferingTypeSelector";
import "./listingsPage.scss";

const APPWRITE_DATABASE_ID = '68379a6f0031168abc79';
const APPWRITE_COLLECTION_IDS = { 
  products: '6837aa56003941367ae2',
  services: '6837ae9700021d0d9c42',
  giftcards: '6837aeab000115b22f6d',
};

function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type') || 'products';

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const [isGridView, setIsGridView] = useState(true); 

  const handleTypeSelection = (newType) => {
    setSearchParams({ type: newType });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (!databases || typeof databases.listDocuments !== 'function') {
          throw new Error("Appwrite 'databases' object is not correctly initialized or missing 'listDocuments' method. Check appwriteConfig.js and its import.");
      }

      const collectionId = APPWRITE_COLLECTION_IDS[type];
      if (!collectionId) {
        setError(`Invalid item type: ${type}`);
        setLoading(false);
        return;
      }

      const queries = [];
      if (searchQuery) {
        queries.push(Query.search('name', searchQuery));
      }

      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        collectionId,
        queries
      );

      setItems(response.documents);
    } catch (err) {
      setError("Failed to fetch items from Appwrite: " + err.message);
      console.error("Error fetching items from Appwrite:", err);
    } finally {
      setLoading(false);
    }
  }, [type, searchQuery]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (loading) {
    return <div className="listings-page-loading">Loading {type}...</div>;
  }

  if (error) {
    return <div className="listings-page-error">Error: {error}</div>;
  }

  return (
    <div className="listings-page-wrapper">
      <div className="listings-header">
        <OfferingTypeSelector onSelect={handleTypeSelection} currentType={type} />
        <div className="action-bar">
          <SearchBar onSearch={handleSearch} placeholder={`Search ${type}...`} />
        </div>
      </div>

      <div className={`listings-content-grid ${isGridView ? 'grid-view' : 'list-view'}`}>
        {items.length > 0 ? (
          items.map((item) => (
            <ProductCard
              key={item.$id}
              product={item}
              type={type}
            />
          ))
        ) : (
          <p className="empty-state">No {type} available.</p>
        )}
      </div>
    </div>
  );
}

export default ListingsPage;