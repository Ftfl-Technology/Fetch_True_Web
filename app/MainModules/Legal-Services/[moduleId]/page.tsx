"use client"

import { useState } from "react";
import LegalPageClient from "./LegalPageClient";

export default function LegalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  return <LegalPageClient 
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  />;
}