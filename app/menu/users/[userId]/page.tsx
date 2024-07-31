import { getUser } from "@/lib/requests";
import Link from "next/link";
import { FC } from "react";
import { IoChevronBack } from "react-icons/io5";

interface Params {
  userId: string;
}

interface UserPageProps {
  params: Params;
}

const UserPage: FC<UserPageProps> = async ({ params }) => {
  const user = await getUser(params.userId);

  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full border-2 border-violet-500 rounded-xl h-full  relative">
        <div className="w-full flex items-center justify-center max-sm:justify-start max-sm:px-2 ">
          <Link
            href="/menu/users"
            className="p-2 px-6 max-md:px-2 border-2 border-violet-500 rounded-xl flex items-center w-max gap-2 absolute right-2 top-2 hover:bg-gray-600/40"
          >
            <IoChevronBack className="text-[120%]" />
            BACK
          </Link>
          <div className="font-semibold mt-4 max-md:ml-6">{user?.name}</div>
        </div>
        <div className="flex flex-col w-full gap-4 mt-10 font-semibold text-xl px-6 text-center">
          <div>
            <span className="text-gray-400 font-[400] text-lg">Name:</span>{" "}
            {user?.name}
          </div>
          <div>
            <span className="text-gray-400 font-[400] text-lg">Login:</span>{" "}
            {user?.login}
          </div>
          <div>
            <span className="text-gray-400 font-[400] text-lg">Email:</span>{" "}
            {user?.email}
          </div>
          <div>
            <span className="text-gray-400 font-[400] text-lg">ID:</span>{" "}
            {user?.id}
          </div>
          <div>
            <span className="text-gray-400 font-[400] text-lg">Balance:</span>{" "}
            {user?.balanceAmount.toFixed(2)} $
          </div>
          <div>
            <span className="text-gray-400 font-[400] text-lg">Reflink:</span>{" "}
            {user?.reflink}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
