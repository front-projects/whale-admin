import TopUser from "@/components/Top-Users/TopUser";
import { getTopUsers } from "@/lib/requests";

export default async function TopUsers() {
  const users = await getTopUsers();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h3 className="w-full text-center font-bold text-2xl max-sm:hidden">TOP USERS</h3>
      <div className="mt-4 w-1/2 max-xl:w-2/3 max-lg:w-[80%] max-sm:w-full flex flex-col gap-4 overflow-auto py-4">
        {users ? users.map((user) => (
          <div key={user.id}>
            <TopUser user={user} />
          </div>
        )) : <div className="w-full text-center">No top users</div>}
      </div>
    </div>
  );
}
