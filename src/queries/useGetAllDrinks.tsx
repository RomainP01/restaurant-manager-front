import axios from "axios";
import { useQuery } from "react-query";
import { Drink } from "../models/Drink";


export const getAllDrinks = async () => {
    const r = await axios.get(
        import.meta.env.VITE_BACK_API_URL + '/drink', { headers: { "Access-Control-Allow-Origin": "*" } });
    return r.data as Array<Drink>;
};



const useGetAllDrinks = () => {
    return useQuery(
        'getAllDrinks',
        () => {
            return getAllDrinks();
        },
    );
};

export default useGetAllDrinks;