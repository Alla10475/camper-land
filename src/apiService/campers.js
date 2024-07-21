import axios from "axios";

axios.defaults.baseURL =
  "https://6698bec02069c438cd6fc5f2.mockapi.io/api/advert/";



export const getCampers = async () => {
    const response = await axios.get("/campers");

    return response.data;
}
