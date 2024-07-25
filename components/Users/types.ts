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
  name: string;
  email: string;
}
