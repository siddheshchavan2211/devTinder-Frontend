import io from "socket.io-client";
import { ApiUrl } from "./Constants";

const createsocketconn = () => {
  if (location.hostname === "localhost") {
    return io(ApiUrl);
  } else {
    return io("/", { path: "/api/socket.io" });
  }
};
export default createsocketconn;
