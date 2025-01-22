import LockIcon from "@mui/icons-material/Lock";
function EmptyPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full py-5 ">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col w-[500px] ">
          <img
            src="/emptySvg/whatsapp-social-media-network-svgrepo-com.png"
            alt="dp"
            className=" md:w-[300px] md:h-[300px] w-[150px] h-[150px] opacity-40"
          />
          <p className="flex items-center justify-center text-gray-500 flex-wrap text-center opacity-50 text-sm font-medium">
            Send and receive messages without having to keep your phone online.
            Use WhatsApp on 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center text-gray-500 flex-wrap opacity-45 text-sm">
        <LockIcon className="" />
        <p>Your personal messages are fully encrypted.</p>
      </div>
    </div>
  );
}

export default EmptyPage;
