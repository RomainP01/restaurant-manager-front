import axios from "axios";
import { useQuery } from "react-query";
import { Command } from "../models/Command";

const deleteCommand = async (params: Command) => {
    const r = await axios.delete(
        import.meta.env.VITE_BACK_API_URL + '/command/' + params.id);
    return r.data as Array<Command>;
};

export const useDeleteCommand = (params: Command) => {
    return useQuery(
        'deleteCommand&id=' + params.id + "&key=" + Math.random(),
        () => {
            return deleteCommand(params);
        }, {
        enabled: false,
    }
    );
};