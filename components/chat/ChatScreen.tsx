"use client";

import Person from "./person";
import Message from "./message";
import { useRecoilValue } from "node_modules/recoil";
import {
  selectedUserIdState,
  selectedUserIndexState,
} from "utils/recoil/atoms";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "actions/chatActions";

export default function ChatScreen() {
  const selectedUserId = useRecoilValue(selectedUserIdState);
  const selectedUserIndex = useRecoilValue(selectedUserIndexState);

  const selectedUserQuery = useQuery({
    queryKey: ["user", selectedUserId],
    queryFn: () => getUserById(selectedUserId),
  });

  if (selectedUserQuery.data === null) return <div className="w-full"></div>;
  return (
    <div className="w-full h-screen flex flex-col">
      <Person
        index={selectedUserIndex}
        isActive={false}
        name={selectedUserQuery.data?.email?.split("@")[0]}
        onChatScreen={true}
        onlineAt={new Date().toISOString()}
        userId={selectedUserQuery.data?.id}
      />

      <div className="w-full flex-1 flex gap-2 flex-col p-2">
        <Message isFromMe={true} message={"hello me"} />
        <Message isFromMe={false} message={"yes!!!"} />
        <Message isFromMe={true} message={"yes!!!"} />
        <Message isFromMe={true} message={"yes!!!"} />
        <Message isFromMe={false} message={"yes!!!"} />
      </div>

      <div className="flex">
        <input
          className="w-full p-2 border-2 border-light-blue-600"
          type="text"
          placeholder="메시지를 입력하세요"
        />
        <button className="min-w-20 p-1 bg-light-blue-600 text-white">
          <span>전송</span>
        </button>
      </div>
    </div>
  );
}
