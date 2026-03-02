"use client"

import { useState } from "react";
import FinancePageClient from "./FinancePageClient";

export default function FinancePage() {
    const [searchQuery, setSearchQuery] = useState("");
  

  return <FinancePageClient 
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  />;
}