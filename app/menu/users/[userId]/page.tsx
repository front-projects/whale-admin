import { FC } from 'react';

interface Params {
  userId: string;
}

interface UserPageProps {
  params: Params;
}

const UserPage: FC<UserPageProps> = ({ params }) => {
  return <div>{params.userId}</div>;
};

export default UserPage;