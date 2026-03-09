"use client"

import { useUser } from "@/src/context/UserContext";
import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";

export default function DeleteAccountSection() {
const { user, deleteUser } = useUser();

const handleDelete = async () => {
  const confirmDelete = confirm("Are you sure you want to delete account?");
  if (!confirmDelete || !user) return;

  try {
    await deleteUser(user._id);
  } catch (err: any) {
    alert(err.message);
  }
};

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-6">Delete Account</h2>

      {/* Warning Box */}
      <div className="border border-blue-500 rounded-md p-4 flex items-center gap-3 mb-8">
        <div className="w-10 h-10 relative">
          <Image
            src="/image/warning.png" // replace with your icon
            alt="warning"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-sm text-gray-700">
          <span className="text-blue-600 font-medium">
            Deleting your account is permanent.
          </span>{" "}
          This action cannot be undone.
        </p>
      </div>

      {/* Consequences */}
      <div className="space-y-4 text-sm text-gray-700 mb-12">
        <div className="flex items-center gap-2">
          <FiTrash2 size={16} />
          <p>You will lose all saved business details</p>
        </div>

        <div className="flex items-center gap-2">
          <FiTrash2 size={16} />
          <p>Your connected services will be removed</p>
        </div>

        <div className="flex items-center gap-2">
          <FiTrash2 size={16} />
          <p>All transaction history and documents will be deleted</p>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center mb-16">
        <div className="w-[220px] h-[220px] relative">
          <Image
            src="/image/delete.png" // replace with your image
            alt="security"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button className="px-6 py-2 rounded-md border border-red-400 text-red-500 hover:bg-red-50">
          Cancel
        </button>

        <button className="px-6 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
        onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
