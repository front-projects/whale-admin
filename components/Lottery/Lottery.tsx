"use client";

import React, { useState } from "react";
import { Lottery } from "../Users/types";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { updateLottery } from "@/lib/requests";
import { ClipLoader } from "react-spinners";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function LotteryItem({ lottery }: { lottery: Lottery }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [name, setName] = useState(lottery.naming);
  const [priceAmount, setpriceAmount] = useState(lottery.priceAmount);
  const [prizeAmount, setprizeAmount] = useState(lottery.totalPrizeAmount);
  const [status, setStatus] = useState(lottery.defaultStatus);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedpriceAmount, setUpdatedpriceAmount] = useState(priceAmount);
  const [updatedStatus, setUpdatedStatus] = useState(status);
  const [updatedprizeAmount, setUpdatedprizeAmount] = useState(prizeAmount);
  const [loading, setLoading] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleEdit = () => setIsEditing(true);
  const handleCloseEdit = (e: { stopPropagation: () => void }) => {
    setUpdatedName(name);
    setUpdatedpriceAmount(priceAmount);
    setUpdatedprizeAmount(prizeAmount);
    setUpdatedStatus(status);
    e.stopPropagation();
    setIsEditing(false);
  };

  const handleSubmit = async (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setLoading(true);
    const response = await updateLottery({
      naming: updatedName,
      priceAmount: updatedpriceAmount,
      investModelStatus: updatedStatus,
      totalPrizeAmount: updatedprizeAmount,
      defaultStatus: updatedStatus,
      unlockDate: lottery.unlockDate
    }, lottery.id);
    setLoading(false);
    if (response) {
      setName(updatedName);
      setpriceAmount(updatedpriceAmount);
      setStatus(updatedStatus);
      setIsEditing(false);
      setprizeAmount(updatedprizeAmount);
    } else {
      alert("Someting went wrong, try again")
      handleCloseEdit(e);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpdatedName(e.target.value);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpdatedpriceAmount(parseFloat(e.target.value));
  const handlePrizeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpdatedprizeAmount(parseFloat(e.target.value));

  const openEditMenu = (event: {
    stopPropagation: () => void;
    currentTarget: React.SetStateAction<any>;
  }) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setLocked = () => {
    handleClose();
    setUpdatedStatus("LOCKED");
  };
  const setAvailable = () => {
    handleClose();
    setUpdatedStatus("AVAILABLE");
  };

  return (
    <div
      onClick={handleEdit}
      className="w-full border-2 border-gray-600 p-2 rounded-xl grid grid-cols-5 gap-2 items-center px-6 max-sm:px-2 text-center max-sm:text-[14px] cursor-pointer hover:bg-gray-400/40"
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
            value={updatedpriceAmount}
            onChange={handleAmountChange}
            step="1"
            min="0"
            autoFocus
          />
        ) : (
          priceAmount.toFixed(2)
        )}
      </div>
      <div>
        {isEditing ? (
          <input
            type="number"
            value={updatedprizeAmount}
            onChange={handlePrizeChange}
            step="1"
            min="0"
            autoFocus
          />
        ) : (
          prizeAmount ? prizeAmount.toFixed(2) : 0
        )}
      </div>
      <div
        className={`text-[12px] ${updatedStatus == "AVAILABLE" ? "text-green-600" : "text-red-600"}`}
      >
        {isEditing ? (
          <>
            <div
              onClick={openEditMenu}
              className="border-[3px] border-[#30303d] rounded-[8px] py-[0.6rem] max-sm:text-[10px]"
            >
              {updatedStatus}
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={setLocked}>LOCKED</MenuItem>
              <MenuItem onClick={setAvailable}>AVAILABLE</MenuItem>
            </Menu>
          </>
        ) : (
          status
        )}

        { }
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
