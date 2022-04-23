import useGetAllDishes from "../queries/useGetAllDishes";


export const Homepage = () => {
    const dishes = useGetAllDishes();
    return (
        <div>
            <p>{dishes && dishes.toString()}</p>
        </div>
    )
}