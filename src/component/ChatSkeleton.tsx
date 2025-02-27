import { Skeleton, Stack } from "@mui/material";
interface ChatSkeletonProps {
  reciver?: boolean;
  width?: number;
  hight?: number;
}
function ChatSkeleton({ reciver, width, hight }: ChatSkeletonProps) {
  return (
    <div className={`flex flex-col ${reciver ? "items-end rounded-tr-lg" : "items-start rounded-tl-lg"} `}>
      <Stack>
        <Skeleton
          variant="rectangular"
          width={width}
          height={hight}
          sx={{
            borderRadius: "5px",
            backgroundColor: reciver ? "#5F9EA0" : "#F0F8FF",
          }}
        />
      </Stack>
    </div>
  );
}

export default ChatSkeleton;
