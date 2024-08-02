"use client";

import React, { useState } from "react";
import { TopUsers } from "../Users/types";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { updateTopUser } from "@/lib/requests";
import { ClipLoader } from "react-spinners";

export default function TopUser({ user }: { user: TopUsers }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState(user.name);
  const [earnedAmount, setEarnedAmount] = useState(user.earnedAmount);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEarnedAmount, setUpdatedEarnedAmount] = useState(earnedAmount);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEdit = () => setIsEditing(true);
  const handleCloseEdit = (e: { stopPropagation: () => void }) => {
    setUpdatedName(name);
    setUpdatedEarnedAmount(earnedAmount);
    e.stopPropagation();
    setIsEditing(false);
  };

  const handleSubmit = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setLoading(true);
    const response = await updateTopUser({
      ...user,
      name: updatedName,
      earnedAmount: updatedEarnedAmount,
    });
    setLoading(false);
    if (response) {
      setName(updatedName);
      setEarnedAmount(updatedEarnedAmount);
      setIsEditing(false);
    } else {
      handleCloseEdit(e);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpdatedName(e.target.value);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpdatedEarnedAmount(parseFloat(e.target.value));

  return (
    <div
      onClick={handleEdit}
      className="w-full border-2 border-gray-600 p-2 rounded-xl grid grid-cols-3 gap-2 px-6 max-sm:px-2 text-center max-sm:text-[14px] cursor-pointer hover:bg-gray-400/40"
    >
      <div className="w-full">
        {isEditing ? (
          <input
            type="text"
            value={updatedName}
            onChange={handleNameChange}
            autoFocus
          />
        ) : (
          name
        )}
      </div>
      <div>
        {isEditing ? (
          <input
            type="number"
            value={updatedEarnedAmount}
            onChange={handleAmountChange}
            step="0.01"
            autoFocus
          />
        ) : (
          earnedAmount.toFixed(2)
        )}
      </div>
      {isEditing ? (
        !loading ? (
          <div className="flex items-center gap-4 justify-center text-[160%] max-sm:gap-2">
            <div onClick={handleSubmit}>
              <FaCheckCircle className="text-green-500" />
            </div>
            <div onClick={handleCloseEdit}>
              <IoMdCloseCircle className="text-[120%] text-red-400" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ClipLoader color="#8b5cf6" />
          </div>
        )
      ) : (
        <div className="text-[150%] flex items-center justify-center max-sm:text-[120%]">
          <FaEdit />
        </div>
      )}
    </div>
  );
}
