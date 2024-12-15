import ChatPeopleList from "components/chat/chat-people-list";
import ChatScreen from "components/chat/chat-screen";
import Person from "components/chat/person";

export default function ChatPage() {
  return (
    <div className="w-full flex justify-center items-center">
      <ChatPeopleList />
      <ChatScreen />
    </div>
  );
}
