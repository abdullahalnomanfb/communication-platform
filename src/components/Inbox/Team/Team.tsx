import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GET_TEAMS } from "../../../../gql-api/team";
import useFetch from "../../../../hooks/useFatch";
import { ITeam } from "../../../../tyeps";

interface IProps {
  SetTeamId: Dispatch<SetStateAction<number>>;
  setShowTeamModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Group: React.FC<IProps> = ({ SetTeamId, setShowTeamModal }) => {
  const { data } = useFetch<ITeam[]>(["getTeams"], GET_TEAMS, { limit: 20, offset: 0 });
  const [isSearch, setIsSearch] = useState(true);

  const chatListRef = useRef(null);

  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      <div className="flex justify-center items-center py-3 text-blue-600 cursor-pointer" onClick={() => router.push("/")}>
        <AiFillHome className="text-2xl" />
        <p>Home</p>
      </div>
      <div className="chat-header" onClick={() => setIsSearch(true)}>
        <div className=" search mx-2 my-2 flex cursor-pointer items-center justify-start gap-2 rounded-full bg-slate-100 py-2 pl-3">
          <AiOutlineSearch />
          <input type="text" name="" id="" placeholder="Search Message" className=" border-none bg-slate-100 bg-none outline-none" />
        </div>
      </div>

      {/* Conversations  */}
      {isSearch && (
        <ul className=" mb-[-6] divide-y divide-gray-700 divide-inherit overflow-y-auto  max-h-[550px] ">
          {data?.payload?.map(({ name, id, created_at, POC_messages }) => (
            <div key={id} onClick={() => SetTeamId(id)} className=" flex cursor-pointer items-center justify-between  py-2 px-2 hover:bg-[#f0f2f5] md:mr-3">
              <div key={id} className="flex items-center justify-between gap-x-3 ">
                <img
                  src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-group-icon-png-image_1796653.jpg"
                  alt=""
                  className="h-16 w-16 rounded-full"
                />
                <div className="con-list-content text-left">
                  <p className="  lett  text-lg font-semibold tracking-normal">{name}</p>
                  <p className=" text-blue-500">{POC_messages[0]?.["text"]}</p>
                </div>
              </div>
              <div className="con-time text-gray-500">
                <p>{new Date(created_at).toDateString()}</p>
              </div>
            </div>
          ))}
        </ul>
      )}
      <div className="absolute bottom-0 right-0 mb-3 mr-1  max-w-full ">
        <button className="text-white bg-blue-600 hover:bg-blue-800 transition  px-4 py-2 rounded-lg" onClick={() => setShowTeamModal(true)}>
          +New Team
        </button>
      </div>
    </div>
  );
};

export default Group;
