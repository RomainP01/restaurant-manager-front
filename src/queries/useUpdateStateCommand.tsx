import axios from "axios";
import { useQuery } from "react-query";
import { Command } from "../models/Command";

const updateCommand = async (params: Command) => {
    const r = await axios.put(
        import.meta.env.VITE_BACK_API_URL + '/command/' + params.id,
        params);
    return r.data as Array<Command>;
};

export const useUpdateCommand = (params: Command) => {
    return useQuery(
        'updateCommand&id=' + params.id + "&key=" + Math.random(),
        () => {
            return updateCommand(params);
        }, {
        enabled: false,
    }
    );
};