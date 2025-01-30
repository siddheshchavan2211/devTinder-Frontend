import io from "socket.io-client";
import { ApiUrl } from "./Constants";

const createsocketconn = () => {
  return io(ApiUrl);
};
export default createsocketconn;
