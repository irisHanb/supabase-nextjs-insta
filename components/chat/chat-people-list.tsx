"use client";

import { useQuery } from "@tanstack/react-query";
import Person from "./person";
import { useRecoilState } from "node_modules/recoil";
import { selectedIndexState } from "utils/recoil/atoms";
import getAllUsers from "actions/chateActions";

export default function ChatPeopleList({ loggedInUser }) {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);
  const getAllUsersQuery = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const allUsers = await getAllUsers();
      console.log(allUsers);
      return allUsers.filter((user) => user.id !== loggedInUser.id);
    },
  });

  return (
    <div className="min-w-60 h-screen flex flex-col bg-gray-50">
      {getAllUsersQuery.data?.map((user) => (
        <Person
          index={user.id}
          isActive={selectedIndex === user.id}
          name={user.email}
          onChatScreen={false}
          onlineAt={new Date().toISOString()}
          userId={user.id}
          onClick={() => setSelectedIndex(user.id)}
        />
      ))}
    </div>
  );
}
