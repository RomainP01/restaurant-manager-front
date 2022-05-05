import axios from "axios";
import { useQuery } from "react-query";
import { Command } from "../models/Command";

const postCommand = async (params: Command) => {
    const r = await axios.post(
        import.meta.env.VITE_BACK_API_URL + '/command',
        params);
    return r.data as Array<Command>;
};

export const usePostCommand = (params: Command) => {
    return useQuery(
        'postCommand',
        () => {
            return postCommand(params);
        }, {
        enabled: false,
    }
    );
};