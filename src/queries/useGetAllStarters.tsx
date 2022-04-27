import axios from "axios";
import { useQuery } from "react-query";
import { Starter } from "../models/Starter";


export const getAllStarters = async () => {
    const r = await axios.get(
        import.meta.env.VITE_BACK_API_URL + '/starter', { headers: { "Access-Control-Allow-Origin": "*" } });
    return r.data as Array<Starter>;
};



const useGetAllStarters = () => {
    return useQuery(
        'getAllStarters',
        () => {
            return getAllStarters();
        },
    );
};

export default useGetAllStarters;