"use server";

// import axios from "axios";
import { FetchUsersProps, FetchUsersResponse } from "@/components/Users/types";

// export const getUsers = async (
//   fetch: FetchUsersProps
// ): Promise<FetchUsersResponse> => {
//   const URL = process.env.NEXT_PUBLIC_API_URL;
//   try {
//     const response = await axios.get(URL + "/api/users");
//   } catch {
//     throw new Error("Error fetching data");
//   }
//   return {
//     users: [
//       { id: 1, name: "Vlad", email: "Test" },
//       { id: 2, name: "Vlad", email: "Test" },
//       { id: 3, name: "Vlad", email: "Test" },
//     ],
//     totalUsers: 100,
//   };
// };

export const getUsers = async (
  fetch: FetchUsersProps
): Promise<FetchUsersResponse> => {
  if (fetch.page == 1) {
    return {
      users: [
        { id: 1, name: "Vlad", email: "Test" },
        { id: 2, name: "Vlad", email: "Test" },
        { id: 3, name: "Vlad", email: "Test" },
        { id: 4, name: "Vlad", email: "Test" },
        { id: 5, name: "Vlad", email: "Test" },
        { id: 6, name: "Vlad", email: "Test" },
        { id: 7, name: "Vlad", email: "Test" },
        { id: 8, name: "Vlad", email: "Test" },
        { id: 9, name: "Vlad", email: "Test" },
        { id: 10, name: "Vlad", email: "Test" },
        { id: 11, name: "Vlad", email: "Test" },
        { id: 12, name: "Vlad", email: "Test" },
        { id: 13, name: "Vlad", email: "Test" },
        { id: 14, name: "Vlad", email: "Test" },
        { id: 15, name: "Vlad", email: "Test" },
        { id: 16, name: "Vlad", email: "Test" },
        { id: 17, name: "Vlad", email: "Test" },
        { id: 18, name: "Vlad", email: "Test" },
        { id: 19, name: "Vlad", email: "Test" },
        { id: 20, name: "Vlad", email: "Test" },
        { id: 21, name: "Vlad", email: "Test" },
        { id: 22, name: "Vlad", email: "Test" },
        { id: 23, name: "Vlad", email: "Test" },
        { id: 24, name: "Vlad", email: "Test" },
        { id: 25, name: "Vlad", email: "Test" },
        { id: 26, name: "Vlad", email: "Test" },
        { id: 27, name: "Vlad", email: "Test" },
        { id: 28, name: "Vlad", email: "Test" },
        { id: 29, name: "Vlad", email: "Test" },
        { id: 30, name: "Vlad", email: "Test" },
        { id: 31, name: "Vlad", email: "Test" },
        { id: 32, name: "Vlad", email: "Test" },
        { id: 33, name: "Vlad", email: "Test" },
        { id: 34, name: "Vlad", email: "Test" },
        { id: 35, name: "Vlad", email: "Test" },
        { id: 36, name: "Vlad", email: "Test" },
        { id: 37, name: "Vlad", email: "Test" },
        { id: 38, name: "Vlad", email: "Test" },
        { id: 39, name: "Vlad", email: "Test" },
        { id: 40, name: "Vlad", email: "Test" },
        { id: 41, name: "Vlad", email: "Test" },
        { id: 42, name: "Vlad", email: "Test" },
        { id: 43, name: "Vlad", email: "Test" },
        { id: 44, name: "Vlad", email: "Test" },
        { id: 45, name: "Vlad", email: "Test" },
        { id: 46, name: "Vlad", email: "Test" },
        { id: 47, name: "Vlad", email: "Test" },
        { id: 48, name: "Vlad", email: "Test" },
        { id: 49, name: "Vlad", email: "Test" },
        { id: 50, name: "Vlad", email: "Test" },
      ],
      totalUsers: 100,
    };

  }
  return {
    users: [
      { id: 51, name: "Vlad", email: "Test" },
      { id: 52, name: "Vlad", email: "Test" },
      { id: 53, name: "Vlad", email: "Test" },
      { id: 54, name: "Vlad", email: "Test" },
      { id: 55, name: "Vlad", email: "Test" },
      { id: 56, name: "Vlad", email: "Test" },
      { id: 57, name: "Vlad", email: "Test" },
      { id: 58, name: "Vlad", email: "Test" },
      { id: 59, name: "Vlad", email: "Test" },
      { id: 60, name: "Vlad", email: "Test" },
      { id: 61, name: "Vlad", email: "Test" },
      { id: 62, name: "Vlad", email: "Test" },
      { id: 63, name: "Vlad", email: "Test" },
      { id: 64, name: "Vlad", email: "Test" },
      { id: 65, name: "Vlad", email: "Test" },
      { id: 66, name: "Vlad", email: "Test" },
      { id: 67, name: "Vlad", email: "Test" },
      { id: 68, name: "Vlad", email: "Test" },
      { id: 69, name: "Vlad", email: "Test" },
      { id: 70, name: "Vlad", email: "Test" },
      { id: 71, name: "Vlad", email: "Test" },
      { id: 72, name: "Vlad", email: "Test" },
      { id: 73, name: "Vlad", email: "Test" },
      { id: 74, name: "Vlad", email: "Test" },
      { id: 75, name: "Vlad", email: "Test" },
      { id: 76, name: "Vlad", email: "Test" },
      { id: 77, name: "Vlad", email: "Test" },
      { id: 78, name: "Vlad", email: "Test" },
      { id: 79, name: "Vlad", email: "Test" },
      { id: 80, name: "Vlad", email: "Test" },
      { id: 81, name: "Vlad", email: "Test" },
      { id: 82, name: "Vlad", email: "Test" },
      { id: 83, name: "Vlad", email: "Test" },
      { id: 84, name: "Vlad", email: "Test" },
      { id: 85, name: "Vlad", email: "Test" },
      { id: 86, name: "Vlad", email: "Test" },
      { id: 87, name: "Vlad", email: "Test" },
      { id: 88, name: "Vlad", email: "Test" },
      { id: 89, name: "Vlad", email: "Test" },
      { id: 90, name: "Vlad", email: "Test" },
      { id: 91, name: "Vlad", email: "Test" },
      { id: 92, name: "Vlad", email: "Test" },
      { id: 93, name: "Vlad", email: "Test" },
      { id: 94, name: "Vlad", email: "Test" },
      { id: 95, name: "Vlad", email: "Test" },
      { id: 96, name: "Vlad", email: "Test" },
      { id: 97, name: "Vlad", email: "Test" },
      { id: 98, name: "Vlad", email: "Test" },
      { id: 99, name: "Vlad", email: "Test" },
      { id: 100, name: "Vlad", email: "Test" },

    ],
    totalUsers: 100,
  };
};