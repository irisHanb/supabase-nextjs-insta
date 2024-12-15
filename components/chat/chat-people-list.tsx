"use client";

import Person from "./person";
import { useRecoilState } from "node_modules/recoil";
import { selectedIndexState } from "utils/recoil/atoms";

export default function ChatPeopleList() {
  const [selectedIndex, setSelectedIndex] = useRecoilState(selectedIndexState);
  return (
    <div className="min-w-60 h-screen flex flex-col bg-gray-50">
      <Person
        index={0}
        isActive={selectedIndex === 0}
        name={"hanb"}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={"1334214"}
        onClick={() => setSelectedIndex(0)}
      />
      <Person
        index={1}
        isActive={selectedIndex === 1}
        name={"any"}
        onChatScreen={false}
        onlineAt={new Date().toISOString()}
        userId={"1334214"}
        onClick={() => setSelectedIndex(1)}
      />
    </div>
  );
}
