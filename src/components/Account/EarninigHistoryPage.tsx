"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, Loader2 } from "lucide-react";

interface Transaction {
  transactionId: string;
  type: string;
  amount: number;
  bankName: string;
  accountNumber: string;
  date: string;
  time: string;
  status: string;
}

export default function EarningHistoryPage({ setSelectedSection }: any) {
    const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  /* ---------------- TITLE LOGIC ---------------- */
  const getTitle = (status: string) => {
    switch (status) {
      case "success":
        return "Withdrawal to Bank";
      case "pending":
        return "Pending Withdrawal";
      case "failed":
        return "Failed Withdrawal";
      default:
        return "Transaction";
    }
  };

  /* ---------------- FETCH API ---------------- */
  const fetchHistory = async (pageNumber = page) => {
  try {
    if (pageNumber === 1) setLoading(true);
    else setLoadingMore(true);

    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;

    const parsed = JSON.parse(storedUser);

    const res = await axios.get(
      `http://api.fetchtrue.com/api/users/my-earning-history/${parsed._id}?page=${pageNumber}&limit=20`
    );

    const newData = res.data?.data || [];

    setData((prev) =>
      pageNumber === 1 ? newData : [...prev, ...newData]
    );

    setTotalPages(res.data?.pagination?.totalPages || 1);
  } catch (err) {
    console.error("History API Error:", err);
  } finally {
    setLoading(false);
    setLoadingMore(false);
  }
};

  useEffect(() => {
    fetchHistory();
  }, [page]);

  /* ---------------- REFRESH ---------------- */
  const handleRefresh = async () => {
  setLoading(true);
  setData([]);
  setPage(1);
  await fetchHistory(1);
};

  return (
    <div className="p-5 bg-white min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <button
  onClick={() => setSelectedSection("Wallet")}
  className="w-9 h-9 rounded-full border flex items-center justify-center"
>
  <ArrowLeft className="w-4 h-4" />
</button>

          <h1 className="text-lg font-semibold text-gray-800">
            Withdrawal History
          </h1>
        </div>

        <button
          onClick={handleRefresh}
          className="text-xs text-blue-600 font-medium"
        >
          Refresh
        </button>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="flex justify-center mt-20">
          <Loader2 className="animate-spin text-blue-600" />
        </div>
      ) : data.length === 0 ? (
        /* EMPTY */
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <p className="text-sm font-semibold text-gray-800">
            No History Found
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Your withdrawals will appear here
          </p>
        </div>
      ) : (
        <>
          {/* LIST */}
          <div className="space-y-4">
            {data.map((item) => (
              <div
                key={item.transactionId}
                className="border rounded-xl p-4 shadow-sm flex justify-between items-start"
              >
                {/* LEFT */}
                <div>
                  {/* ✅ TITLE */}
                  <p className="text-sm font-semibold text-gray-800">
                    {getTitle(item.status)}
                  </p>

                  {/* AMOUNT */}
                  <p className="text-sm font-semibold text-green-600 mt-1">
                    ₹ {item.amount?.toFixed(2)}
                  </p>

                  {/* BANK */}
                  <p className="text-xs text-gray-500 mt-1">
                    {item.bankName?.toUpperCase()} • ****
                    {item.accountNumber?.slice(-4) || "XXXX"}
                  </p>

                  {/* DATE */}
                  <p className="text-xs text-gray-400 mt-1">
                    {item.date} • {item.time}
                  </p>

                  {/* TRANSACTION ID */}
                  <p className="text-xs text-gray-400 mt-1">
                    ID: {item.transactionId}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p
                    className={`text-xs font-medium capitalize ${
                      item.status === "success"
                        ? "text-green-600"
                        : item.status === "pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </p>

                  <p className="text-xs text-gray-400 mt-1 capitalize">
                    {item.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* LOAD MORE */}
          {page < totalPages && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="text-sm text-blue-600 font-medium flex items-center gap-2"
                disabled={loadingMore}
              >
                {loadingMore && (
                  <Loader2 className="w-4 h-4 animate-spin" />
                )}
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}