import { useState } from "react";
import Group from "../../components/Inbox/Group";
import Message from "../../components/Inbox/Message";

const Inbox = () => {
  const [teamId, setTeamId] = useState<number>(0);

  return (
    <div>
      {/* <h1>Chats</h1> */}

      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-3 ">
          <Group SetTeamId={setTeamId} />
        </div>
        <div className="col-span-12 h-28 sm:col-span-9 ">
          <Message teamId={teamId} />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
