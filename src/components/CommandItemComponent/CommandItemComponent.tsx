import { Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { Command } from "../../models/Command"
import { useUpdateCommand } from "../../queries/useUpdateStateCommand"
import styles from './CommandItemComponent.module.scss'

interface Props {
    label: string | undefined
    stateOfFood: string
    command: Command
    type: string
}
export const CommandItemComponent = ({ label, stateOfFood, command, type }: Props) => {

    const [commandToUpdate, setCommandToUpdate] = useState<Command>(command)
    const [selectedState, setSelectedState] = useState<string>(stateOfFood)
    const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
        switch (type) {
            case "starter":
                setSelectedState(event.target.value as string)
                
                setCommandToUpdate({ ...commandToUpdate, stateStarter: event.target.value as string })
                break
            case "meal":
                setSelectedState(event.target.value as string)
                setCommandToUpdate({ ...commandToUpdate, stateMeal: selectedState })
                break
            case "dessert":
                setSelectedState(event.target.value as string)
                setCommandToUpdate({ ...commandToUpdate, stateDessert: selectedState })
                break
            case "drink":
                setSelectedState(event.target.value as string)
                setCommandToUpdate({ ...commandToUpdate, stateDrink: selectedState })
                break
        }
        refetch()
    }

    const { refetch } = useUpdateCommand(commandToUpdate)
    return (
        <Grid container item xs={12} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={4}>
                {label}
            </Grid>
            <Grid item xs={4}>
                <InputLabel shrink id={'stateselect-label'}>État du plat</InputLabel>
                <Select
                    value={selectedState}
                    defaultValue={stateOfFood}
                    onChange={handleSelectChange}
                    label={"État du plat"}
                    labelId={'stateselect-label'}
                >
                    <MenuItem className={styles.menuItemStyle} key={Math.random()} value={"En attente"}>
                        En attente
                    </MenuItem>
                    <MenuItem className={styles.menuItemStyle} key={Math.random()} value={"En cours"}>
                        En cours
                    </MenuItem>
                    <MenuItem className={styles.menuItemStyle} key={Math.random()} value={"Servi"}>
                        Servi
                    </MenuItem>

                </Select>
            </Grid>
        </Grid>
    )
}