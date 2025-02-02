import { useEffect } from "react";
import { Axios } from "../lib/axios";
import { useLoading } from "../state/loading";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { useCurrentUser } from "../state/curentUser";

export let useAuth = () => {
  let { setCurrentUser } = useCurrentUser();
  let { setLoading } = useLoading();
  let navigate = useNavigate();
  useEffect(() => {
    let auth = async () => {
      try {
        setLoading(true);
         Axios.get("/auth/authorization")
          .then((res) => {
            if (res?.data?.success) {
              setLoading(false);
              setCurrentUser({
                _id: res.data.data._id,
                bio: res?.data?.data?.bio,
                email: res.data.data.email,
                muted: res?.data?.data?.muted,
                profile: res?.data?.data?.profile,
                lastName: res?.data?.data?.lastName,
                firstName: res?.data?.data?.firstName,
                sendingSound: res?.data?.data?.sendingSound,
                notificationSound: res?.data?.data?.notificationSound,
              });
              enqueueSnackbar(res.data.message, {
                variant: "success",
              });
              navigate("/");
            }
          })
          .catch((err: any) => {
            setLoading(false);
            enqueueSnackbar(err.response.data.message, {
              variant: "error",
            });
            navigate("/login");
          });
      } catch (error) {
        console.log(error);
      }
    };
    auth();
  },[]);
};
