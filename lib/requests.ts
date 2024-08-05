"use server";

import { Deposit } from "@/components/Deposits/types";
// import axios from "axios";
import {
  FetchUsersProps,
  FetchUsersResponse,
  Lottery,
  TopUsers,
} from "@/components/Users/types";
import { Withdraw } from "@/components/Withdraw/types";
import axios from "axios";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUsers = async (
  fetch: FetchUsersProps
): Promise<FetchUsersResponse | undefined> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(
      API_URL + `users?size=${fetch.pageSize}&page=${fetch.page}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getUser = async (id: string | number) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `users/${id}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {

    return undefined;
  }
};

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Проміс виконано через 2 секунди");
    }, 1500);
  });
}

export const getTopUsers = async (): Promise<TopUsers[]> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `details/gettop`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getLottery = async (): Promise<Lottery[]> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `details/tables`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const updateTopUser = async (user: TopUsers, userId: string | number) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.put(API_URL + `details/settop/${userId}`, user, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const updateLottery = async (lottery: any, lotteryId: string | number | undefined) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.put(API_URL + `details/tables/${lotteryId}`, lottery, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const getDeposits = async (): Promise<Deposit[]> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `deposits`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const getWithdraw = async (): Promise<Withdraw[] | undefined> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.get(API_URL + `withdraws`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export const withdrawStatusUpdate = async (
  obj: Withdraw
): Promise<boolean | undefined> => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.put(API_URL + `withdraws/${obj.id}`, obj, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    return false;
  }
};


export const createTransaction = async (transaction: any, userId: any) => {
  try {
    console.log(transaction, userId)
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.post(API_URL + `incomes/add/${userId}`, transaction, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    console.log(error.message)
    return false;
  }
}
