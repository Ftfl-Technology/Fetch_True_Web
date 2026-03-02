"use client"

import { useState } from "react";

import BusinessPageClient from "./BusinessPageClient";

export default function BusinessPage() {
    const [searchQuery, setSearchQuery] = useState("");
  
  return <BusinessPageClient
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  />;
}