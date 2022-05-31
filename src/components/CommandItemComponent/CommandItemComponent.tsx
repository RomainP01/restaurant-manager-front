import { Button, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { RefetchOptions, RefetchQueryFilters, QueryObserverResult } from "react-query"
import { Command } from "../../models/Command"
import styles from './CommandItemComponent.module.scss'

interface Props {
    label: string | undefined
    stateOfFood: string
    commandToUpdate: Command
    setCommandToUpdate: React.Dispatch<React.SetStateAction<Command>>
    type: string
    refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<Command[], unknown>>
}
export const CommandItemComponent = ({ label, stateOfFood, commandToUpdate, setCommandToUpdate, type, refetch }: Props) => {
    const [selectedState, setSelectedState] = useState<string>(stateOfFood)
    const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
        switch (type) {
            case "starter":
                setSelectedState(event.target.value as string)
                setCommandToUpdate({ ...commandToUpdate, stateStarter: event.target.value as string })
                break
            case "meal":
                setSelectedState(event.target.value as string)
                setCommandToUpdate({ ...commandToUpdate, stateMeal: event.target.value as string })
                break
            case "dessert":
                setSelectedState(event.target.value as string)
                setCommandToUpdate({ ...commandToUpdate, stateDessert: event.target.value as string })
                break
            case "drink":
                setSelectedState(event.target.value as string)
                setCommandToUpdate({ ...commandToUpdate, stateDrink: event.target.value as string })
                break
        }
    }

    const handleUpdate = () => {
        refetch()
        window.location.reload();
    }

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
            <Grid item xs={3} >
                {type === "drink" && (
                    <Button onClick={() => handleUpdate()}>
                        Mettre à jour la commande
                    </Button>)}
            </Grid>

        </Grid>
    )
}