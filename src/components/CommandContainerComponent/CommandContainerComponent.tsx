import { Grid, Typography } from "@mui/material"
import { useState } from "react"
import { Command } from "../../models/Command"
import { CommandItemComponent } from "../CommandItemComponent/CommandItemComponent"
import { useUpdateCommand } from "../../queries/useUpdateStateCommand"
import ClearIcon from '@mui/icons-material/Clear';
import styles from './CommandContainerComponent.module.scss'
import { useDeleteCommand } from "../../queries/useDeleteCommand"

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
    const [commandToUpdate, setCommandToUpdate] = useState<Command>(command)
    const { refetch } = useUpdateCommand(commandToUpdate)
    const { refetch: refetchDelete } = useDeleteCommand(command)

    const handleDelete = () => {
        refetchDelete()
        window.location.reload();
    }
    return (
        <Grid container item direction="row" justifyContent="center" alignItems="center" className={styles.commandContainer} sx={{ marginBottom: '5%' }}>
            <Grid container item direction="row" justifyContent="space-between">
                <Grid item xs={6}>
                    <Typography variant="h6">{dateOfCommand}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="caption">Table :{command.commandTable}</Typography>
                </Grid>
                <Grid item xs={3} >
                    <ClearIcon sx={{ color: 'red' }} onClick={() => handleDelete()} />
                </Grid>
            </Grid>
            {starter && <CommandItemComponent label={starter.label} stateOfFood={command.stateStarter} commandToUpdate={commandToUpdate} setCommandToUpdate={setCommandToUpdate} type={"starter"} refetch={refetch} />}
            {meal && <CommandItemComponent label={meal.label} stateOfFood={command.stateMeal} commandToUpdate={commandToUpdate} setCommandToUpdate={setCommandToUpdate} type={"meal"} refetch={refetch} />}
            {dessert && <CommandItemComponent label={dessert.label} stateOfFood={command.stateDessert} commandToUpdate={commandToUpdate} setCommandToUpdate={setCommandToUpdate} type={"dessert"} refetch={refetch} />}
            {drink && <CommandItemComponent label={drink.label} stateOfFood={command.stateDrink} commandToUpdate={commandToUpdate} setCommandToUpdate={setCommandToUpdate} type={"drink"} refetch={refetch} />}

        </Grid>
    )
}