import Chat from "../component/Chat";
import Conversation from "../component/Conversation";

function Home() {
  return (
    <div className="w-full h-screen flex ">
      {/*****************************Conversations*********************** */}
      <div className="md:w-[36%] w-full h-full">
        <Conversation />
      </div>
      {/*********************************Chat**************************** */}
      <div className="w-full h-full">
        <Chat />
      </div>
    </div>
  );
}

export default Home;
