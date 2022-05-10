import { Grid } from "@mui/material"
import { Command } from "../../models/Command"
import { CommandItemComponent } from "../CommandItemComponent/CommandItemComponent"
import styles from './CommandContainerComponent.module.scss'

interface Props {
    command: Command
    convertIdToObject: (id: number, type: string) => any
}
export const CommandContainerComponent = ({ command, convertIdToObject }: Props) => {
    const starter = convertIdToObject(command.idStarter, "starter")
    const meal = convertIdToObject(command.idMeal, "meal")
    const dessert = convertIdToObject(command.idDessert, "dessert")
    const drink = convertIdToObject(command.idDrink, "drink")

    console.log(starter)
    console.log(meal)
    console.log(dessert)
    console.log(drink)


    return (
        <Grid container item direction="row" justifyContent="center" alignItems="center" className={styles.commandContainer}>

            {starter && <CommandItemComponent label={starter.label} stateOfFood={command.stateStarter} />}
            {meal && <CommandItemComponent label={meal.label} stateOfFood={command.stateMeal} />}
            {dessert && <CommandItemComponent label={dessert.label} stateOfFood={command.stateDessert} />}
            {drink && <CommandItemComponent label={drink.label} stateOfFood={command.stateDrink} />}

        </Grid>
    )
}