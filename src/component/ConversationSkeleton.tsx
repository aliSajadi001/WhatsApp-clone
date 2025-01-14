import { Skeleton, Stack } from "@mui/material";

function ConversationScleton() {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        flexDirection: "row",
      }}
    >
      <Skeleton variant="circular" animation="pulse" width={50} height={50} />
      <Stack sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={200}
          height={10}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={150}
          height={10}
          sx={{ borderRadius: "20px" }}
        />
      </Stack>
    </Stack>
  );
}

export default ConversationScleton;
