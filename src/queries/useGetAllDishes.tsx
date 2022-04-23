import axios from "axios";
import { useQuery } from "react-query";
import { Dish } from "../models/Dish";


export const getAllDishes = async () => {
    const r = await axios.get(
        import.meta.env.VITE_BACK_API_URL + '/dish', { headers: { "Access-Control-Allow-Origin": "*" } });
    return r.data as Array<Dish>;
};



const useGetAllDishes = () => {
    return useQuery(
        [,] as const,
        ({ queryKey }) => {
            const [,] = queryKey;
            return getAllDishes();
        },
    );
};

export default useGetAllDishes;