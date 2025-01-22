import Chat from "../component/Chat";
import Conversation from "../component/Conversation";
import EmptyPage from "../component/EmptyPage";
import reciverInfo from "../state/receiverInfo";

function Home() {
  let { receiver } = reciverInfo();
  return (
    <div className="w-full h-screen flex ">
      {/*****************************Conversations*********************** */}
      <div className="md:w-[36%] w-full h-full">
        <Conversation />
      </div>
      {/*********************************Chat**************************** */}
      <div className="w-full h-full">
        {receiver ? (
          <>
            <Chat />
          </>
        ) : (
          <div className="hidden md:block">
            <EmptyPage />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
