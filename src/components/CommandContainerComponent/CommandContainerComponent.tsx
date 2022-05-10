import { Grid, Typography } from "@mui/material"
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

    const dateOfCommand = new Date(command.commandDate).toDateString()

    return (
        <Grid container item direction="row" justifyContent="center" alignItems="center" className={styles.commandContainer} sx={{ marginBottom: '5%' }}>
            <Grid container item direction="row" justifyContent="space-between">
                <Grid item xs={6}>
                    <Typography variant="h6">{dateOfCommand}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="caption">Table :{command.commandTable}</Typography>
                </Grid>
            </Grid>
            {starter && <CommandItemComponent label={starter.label} stateOfFood={command.stateStarter} command={command} type={"starter"} />}
            {meal && <CommandItemComponent label={meal.label} stateOfFood={command.stateMeal} command={command} type={"meal"} />}
            {dessert && <CommandItemComponent label={dessert.label} stateOfFood={command.stateDessert} command={command} type={"dessert"} />}
            {drink && <CommandItemComponent label={drink.label} stateOfFood={command.stateDrink} command={command} type={"drink"} />}

        </Grid>
    )
}