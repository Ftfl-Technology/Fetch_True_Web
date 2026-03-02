"use client"

import { useState } from "react";
import FranchisePageClient from "./FranchisePageClient";

export default function FranchisePage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return <FranchisePageClient 
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  />;
}
