import { Grid } from "@mui/material"
import { CommandContainerComponent } from "../../components/CommandContainerComponent/CommandContainerComponent"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import { Dessert } from "../../models/Dessert"
import { Drink } from "../../models/Drink"
import { Meal } from "../../models/Meal"
import { Starter } from "../../models/Starter"
import useGetAllCommands from "../../queries/useGetAllCommands"
import useGetAllDesserts from "../../queries/useGetAllDesserts"
import useGetAllDrinks from "../../queries/useGetAllDrinks"
import useGetAllMeals from "../../queries/useGetAllMeals"
import useGetAllStarters from "../../queries/useGetAllStarters"
import styles from "./AllCommandsPage.module.scss"

export const AllCommandsPage = () => {
    const commands = useGetAllCommands().data
    const starters = useGetAllStarters().data
    const meals = useGetAllMeals().data
    const desserts = useGetAllDesserts().data
    const drinks = useGetAllDrinks().data

    const convertIdToObject = (id: number, type: string) => {
        switch (type) {
            case "starter":
                return starters?.find(starter => starter.id === id) as Starter
            case "meal":
                return meals?.find(meal => meal.id === id) as Meal
            case "dessert":
                return desserts?.find(dessert => dessert.id === id) as Dessert
            case "drink":
                return drinks?.find(drink => drink.id === id) as Drink
        }
    }
    return (
        <Grid container className={styles.allCommandsPageContainer} direction={"row"} justifyContent="center" >
            <Header />
            <Grid container sx={{
                width: "50%", height: 'fit-content', marginTop: '5%', backgroundColor: "#fddf97"
            }} >
                {commands && commands.reverse().map(command => {
                    return (
                        <CommandContainerComponent command={command} convertIdToObject={convertIdToObject} />
                    )
                })}

            </Grid>
        </Grid>
    )
}