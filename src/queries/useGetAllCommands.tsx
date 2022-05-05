import axios from "axios";
import { useQuery } from "react-query";
import { Command } from "../models/Command";


export const getAllCommands = async () => {
    const r = await axios.get(
        import.meta.env.VITE_BACK_API_URL + '/command', { headers: { "Access-Control-Allow-Origin": "*" } });
    return r.data as Array<Command>;
};



const useGetAllCommands = () => {
    return useQuery(
        'getAllDesserts',
        () => {
            return getAllCommands();
        },
    );
};

export default useGetAllCommands;