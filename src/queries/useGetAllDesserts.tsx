import axios from "axios";
import { useQuery } from "react-query";
import { Dessert } from "../models/Dessert";


export const getAllDesserts = async () => {
    const r = await axios.get(
        import.meta.env.VITE_BACK_API_URL + '/dessert', { headers: { "Access-Control-Allow-Origin": "*" } });
    return r.data as Array<Dessert>;
};



const useGetAllDesserts = () => {
    return useQuery(
        'getAllDesserts',
        ()  => {
            return getAllDesserts();
        },
    );
};

export default useGetAllDesserts;