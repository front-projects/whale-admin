export interface FetchUsersProps {
  page: number;
  pageSize: number;
}

export interface FetchUsersResponse {
  users: User[];
  totalUsers: number;
}

export interface User {
  id: number;
  login: string;
  username: string;
  name: string;
  email: string;
  reflink: string | null;
  balanceAmount: number;
  investModels: Lottery[];
  transactions: Transaction[];
}

export interface Lottery {
  id: string | number;
  naming: string;
  priceAmount: number;
  trendingStatus: string;
  partnerBonusAmount: number;
  mainBonusAmount: number;
  lostRefIncomeAmount: number;
  totalPrizeAmount: number;
  investModelStatus: string;
  investModelLevel: string;
  unlockDate: null | string;
  createdAt: string;
}

export interface Transaction {
  transactionAmount: number;
  description: string;
  transactionType: string;
  incomeType: string;
  createdAt: string;
}

export interface TopUsers {
  id: string | number;
  name: string;
  username: string;
  investedAmount?: number;
  earnedAmount: number;
  createdAt: string;
}

export interface UpdatedUser{
  id: string | number,
  name: string,
  earnedAmount: number;
}