import ChatPeopleList from "components/chat/chat-people-list";
import ChatScreen from "components/chat/chat-screen";
import Person from "components/chat/person";
import { createServerSupabaseClient } from "utils/supabase/server";

export default async function ChatPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <div className="w-full flex justify-center items-center">
      <ChatPeopleList loggedInUser={session?.user} />
      <ChatScreen />
    </div>
  );
}
