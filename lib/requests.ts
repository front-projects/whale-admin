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
      API_URL + `users?size=10&page=${fetch.page}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(response.data);
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
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
  await delayedPromise();
  return [
    {
      id: 1,
      name: "marko200",
      username: "glendale",
      investedAmount: 168.56,
      earnedAmount: 2517.23,
      createdAt: "2024-07-24T18:27:09.648736",
    },
    {
      id: 2,
      name: "s_i_m_is",
      username: "harrogate",
      investedAmount: 141.34,
      earnedAmount: 2312.48,
      createdAt: "2024-07-24T18:27:09.817368",
    },
    {
      id: 3,
      name: "Cortland",
      username: "linton",
      investedAmount: 123.9,
      earnedAmount: 2125.87,
      createdAt: "2024-07-24T18:27:09.951701",
    },
    {
      id: 4,
      name: "danny_samo",
      username: "orchard",
      investedAmount: 107.53,
      earnedAmount: 1911.66,
      createdAt: "2024-07-24T18:27:10.065779",
    },
    {
      id: 5,
      name: "joshua__",
      username: "quintrell",
      investedAmount: 93.12,
      earnedAmount: 1719.22,
      createdAt: "2024-07-24T18:27:10.183415",
    },
    {
      id: 6,
      name: "semoni",
      username: "ridgemont",
      investedAmount: 76.87,
      earnedAmount: 1513.45,
      createdAt: "2024-07-24T18:27:10.38343",
    },
    {
      id: 7,
      name: "laoc0020",
      username: "sterling",
      investedAmount: 61.43,
      earnedAmount: 1331.19,
      createdAt: "2024-07-24T18:27:10.502126",
    },
    {
      id: 8,
      name: "cryptopros",
      username: "thurston",
      investedAmount: 46.29,
      earnedAmount: 1127.78,
      createdAt: "2024-07-24T18:27:10.611769",
    },
    {
      id: 9,
      name: "Ivara",
      username: "upton",
      investedAmount: 34.67,
      earnedAmount: 924.56,
      createdAt: "2024-07-24T18:27:10.731075",
    },
    {
      id: 10,
      name: "Jorvik",
      username: "vesper",
      investedAmount: 23.12,
      earnedAmount: 731.89,
      createdAt: "2024-07-24T18:27:10.84265",
    },
  ];
};

export const getLottery = async (): Promise<Lottery[]> => {
  await delayedPromise();
  return [
    {
      id: 1,
      naming: "Level1",
      priceAmount: 10,
      trendingStatus: "TOP",
      totalPrizeAmount: 100,
      investModelStatus: "LOCKED",
      investModelLevel: "LEVEL 1",
      unlockDate: null,
      createdAt: "2024-07-24T18:27:10.731075",
    },
    {
      id: 2,
      naming: "Level2",
      priceAmount: 10,
      trendingStatus: "TOP",
      totalPrizeAmount: 100,
      investModelStatus: "LOCKED",
      investModelLevel: "LEVEL 1",
      unlockDate: null,
      createdAt: "2024-07-24T18:27:10.731075",
    },
    {
      id: 3,
      naming: "Level3",
      priceAmount: 10,
      trendingStatus: "TOP",
      totalPrizeAmount: 100,
      investModelStatus: "AVAILABLE",
      investModelLevel: "LEVEL 1",
      unlockDate: null,
      createdAt: "2024-07-24T18:27:10.731075",
    },
    {
      id: 4,
      naming: "Level4",
      priceAmount: 10,
      trendingStatus: "TOP",
      totalPrizeAmount: 100,
      investModelStatus: "AVAILABLE",
      investModelLevel: "LEVEL 1",
      unlockDate: null,
      createdAt: "2024-07-24T18:27:10.731075",
    },
  ];
};

export const updateTopUser = async (user: TopUsers) => {
  await new Promise((res) => setTimeout(res, 1000));
  return true;
};

export const updateLottery = async (lottery: Lottery) => {
  await new Promise((res) => setTimeout(res, 1000));
  return true;
};

export const getDeposits = async (): Promise<Deposit[]> => {
  return [
    {
      id: 1,
      name: "Test Name asd",
      amount: 100,
      adress: "asdsdsd3213i3jiojasojdoajsidjo3213",
      createdAt: "2024-07-24T18:27:10.731075",
    },
    {
      id: 2,
      name: "Test Name asd",
      amount: 200,
      adress: "asdsdsd3213i3jiojasojdoajsidjo3213",
      createdAt: "2024-04-24T18:27:10.731075",
    },
  ];
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

export const withdrawStatusUpdate = async (obj: Withdraw) => {
  try {
    const TOKEN = cookies().get("accessToken")?.value;
    const response = await axios.put(API_URL + `withdraws/${obj.id}`, obj, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if(response.status == 200){
      return true;
    }
  } catch (error) {
    return false;
  }
};
