import axios from "axios";
import { useQuery } from "react-query";
import { Meal } from "../models/Meal";


export const getAllMeals = async () => {
    const r = await axios.get(
        import.meta.env.VITE_BACK_API_URL + '/meal', { headers: { "Access-Control-Allow-Origin": "*" } });
    return r.data as Array<Meal>;
};



const useGetAllMeals = () => {
    return useQuery(
        'getAllMeals',
        () => {
            return getAllMeals();
        },
    );
};

export default useGetAllMeals;