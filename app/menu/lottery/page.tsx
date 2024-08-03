import LotteryItem from "@/components/Lottery/Lottery";
import { getLottery } from "@/lib/requests";

export default async function Lottery() {
  const lottery = await getLottery();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="w-full text-center font-bold text-2xl max-sm:hidden">LOTTERIES</h3>
      
      <div className="mt-4 w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full flex flex-col gap-4 overflow-auto py-4">
        <div className="w-full grid grid-cols-5 px-6 max-sm:px-2 text-center max-sm:text-[10px] text-gray-400 text-sm">
            <p>Name</p>
            <p>Price</p>
            <p>Prize</p>
            <p>Status</p>
            <p>Edit</p>
        </div>
        {lottery.map((lot) => (
          <div key={lot.id}>
            <LotteryItem lottery={lot} />
          </div>
        ))}
      </div>
    </div>
  );
}
