import LotteryStatus from "@/components/Users/LotteryStatus";
import { getUser } from "@/lib/requests";
import Link from "next/link";
import { FC } from "react";
import { IoChevronBack } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import HistoryItem from "@/components/Users/HistoryItem";
import { groupTransactionsByDate } from "@/lib/groupTransactionsByDate";
import { Lottery } from "@/components/Users/types";
import Button from "@/components/ui/Button";
import TopUpBalance from "@/components/Users/TopUpBalance";
import { revalidatePath } from "next/cache";

export const dynamic = 'no-store';

interface Params {
  userId: string;
}

interface UserPageProps {
  params: Params;
}

const UserPage: FC<UserPageProps> = async ({ params }) => {
  const user = await getUser(params.userId);

  const groupedTransactions = groupTransactionsByDate(
    user ? user.transactions : []
  );


  return (
    <section className="w-full h-full flex justify-center">
      <div className="w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full border-2 border-violet-500 rounded-xl h-full relative">
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
        <div
          className="flex flex-col w-full gap-4 mt-10 font-semibold text-xl px-6 items-center overflow-y-auto"
          style={{ height: "calc(100% - 80px)" }}
        >
          <div className="flex flex-col gap-4 w-max max-w-full">
            <div className="flex items-center justify-center rounded-[50%]">
              <div className="bg-gray-600 p-6 rounded-xl text-[200%]">
                <FaUser />
              </div>
            </div>
            <div>
              <span className="text-gray-400 font-[400] text-lg">Name:</span>{" "}
              {user?.name}
            </div>
            <div>
              <span className="text-gray-400 font-[400] text-lg">Login:</span>{" "}
              {user?.login}
            </div>

            <div>
              <span className="text-gray-400 font-[400] text-lg">ID:</span>{" "}
              {user?.id}
            </div>
            <div>
              <span className="text-gray-400 font-[400] text-lg">Balance:</span>{" "}
              {user?.balanceAmount.toFixed(2)} $
            </div>
            <div className="text-sm">
              <span className="text-gray-400 font-[400] text-lg">Reflink:</span>{" "}
              {user?.reflink}
            </div>

            <TopUpBalance userId={params.userId}/>

          </div>

          <div>
            <span className="text-gray-400 font-[400] text-lg">Purchases:</span>{" "}
          </div>
          <div className="flex gap-2 items-center justify-center w-full">
            {user?.investModels.map((lottery: Lottery) => (
              <LotteryStatus lottery={lottery} key={lottery.id} />
            ))}
          </div>
          <div>
            <span className="text-gray-400 font-[400] text-lg">
              Transactions:
            </span>
          </div>
          <div
            style={{ height: "calc(100% - 48px)" }}
            id="history-section"
            className="py-4 w-full flex flex-col gap-[10px] mt-2"
          >
            {!user?.transactions || user.transactions.length === 0 ? (
              <div className="text-center">No transactions yet...</div>
            ) : (
              Object.keys(groupedTransactions).map((date) => (
                <div key={date}>
                  <h3 className="font-bold w-full text-center py-2 text-[15px]">
                    {date}
                  </h3>
                  <div className="flex flex-col gap-[15px]">
                    {groupedTransactions[date].map((item, index) => (
                      <HistoryItem
                        key={index + "s" + Math.random() * 100}
                        transaction={item}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
