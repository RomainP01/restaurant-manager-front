import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import { Command } from "../../models/Command"
import { Dessert } from "../../models/Dessert"
import { Drink } from "../../models/Drink"
import { Meal } from "../../models/Meal"
import { Starter } from "../../models/Starter"
import useGetAllDesserts from "../../queries/useGetAllDesserts"
import useGetAllDrinks from "../../queries/useGetAllDrinks"
import useGetAllMeals from "../../queries/useGetAllMeals"
import useGetAllStarters from "../../queries/useGetAllStarters"
import { usePostCommand } from "../../queries/usePostCommand"
import styles from './NewOrderPage.module.scss'

export const NewOrderPage = () => {
    const entreeDisponible = useGetAllStarters().data
    const [selectedStarter, setSelectedStarter] = useState<Starter>()
    const platDisponible = useGetAllMeals().data
    const [selectedMeal, setSelectedMeal] = useState<Meal>()
    const dessertDisponible = useGetAllDesserts().data
    const [selectedDrink, setSelectedDrink] = useState<Drink>()
    const boissonDisponible = useGetAllDrinks().data
    const [selectedDessert, setSelectedDessert] = useState<Dessert>()
    const tableDisponible = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const [selectedTable, setSelectedTable] = useState("")

    const handlePostCommand = () => {
        refetch()
    }
    const command: Command = {
        id: 3,
        commandDate: new Date(),
        commandTable: selectedTable,
        idStarter: selectedStarter?.id as string,
        idMeal: selectedMeal?.id as string,
        idDessert: selectedDessert?.id as string,
        idDrink: selectedDrink?.id as string,
        stateStarter: "En attente",
        stateMeal: "En attente",
        stateDessert: "En attente",
        stateDrink: "En attente"
    }
    const { refetch } = usePostCommand(command)



    return (
        <Grid container className={styles.newOrderPageContainer} direction={"row"} justifyContent="center">
            <Header />

            <Grid container item xs={10} md={10} direction="row" alignItems="center" justifyContent="center" style={{ height: '60%', backgroundColor: '#e09664' }}>
                <Grid container item xs={11} md={11} direction="row" alignItems="center" justifyContent="center" className={styles.formContainer}>
                    <Grid container item xs={6} md={6} direction="row" justifyContent={"center"}>
                        <Grid item xs={10} md={10} style={{ marginBottom: '5%' }}>

                            <FormControl className={styles.formControl}>
                                <InputLabel shrink id={'starterselect-label'}>Choix de l'entrée</InputLabel>
                                <Select
                                    value={selectedStarter}
                                    onChange={(event) => setSelectedStarter((JSON.parse(event.target.value as string)) as unknown as Starter)}
                                    label={"Choix de l'entrée"}
                                    labelId={'starterselect-label'}
                                >
                                    {entreeDisponible && entreeDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={JSON.stringify({
                                                id: elt.id,
                                                label: elt.label,
                                            })}>
                                                {elt.label}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={10} md={10} >
                            <FormControl className={styles.formControl} style={{ marginBottom: '5%' }}>
                                <InputLabel shrink id={'mealselect-label'}>Choix du plat</InputLabel>
                                <Select
                                    value={selectedMeal}
                                    onChange={(event) => setSelectedMeal((JSON.parse(event.target.value as string)) as unknown as Meal)}
                                    label={"Choix du plat"}
                                    labelId={'mealselect-label'}
                                >
                                    {platDisponible && platDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={JSON.stringify({
                                                id: elt.id,
                                                label: elt.label,
                                            })}>
                                                {elt.label}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={10} md={10} >
                            <FormControl className={styles.formControl} style={{ marginBottom: '5%' }}>
                                <InputLabel shrink id={'dessertselect-label'}>Choix du dessert</InputLabel>
                                <Select
                                    value={selectedDessert}
                                    onChange={(event) => setSelectedDessert((JSON.parse(event.target.value as string)) as unknown as Drink)}
                                    label={"Choix du dessert"}
                                    labelId={'dessertselect-label'}
                                >
                                    {dessertDisponible && dessertDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={JSON.stringify({
                                                id: elt.id,
                                                label: elt.label,
                                            })}>
                                                {elt.label}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={10} md={10} >
                            <FormControl className={styles.formControl}>
                                <InputLabel shrink id={'drinkselect-label'}>Choix de la boisson</InputLabel>
                                <Select
                                    value={selectedDrink}
                                    onChange={(event) => setSelectedDrink((JSON.parse(event.target.value as string)) as unknown as Drink)}
                                    label={"Choix de la boisson"}
                                    labelId={'drinkselect-label'}
                                >
                                    {boissonDisponible && boissonDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={JSON.stringify({
                                                id: elt.id,
                                                label: elt.label,
                                            })}>
                                                {elt.label}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>

                        </Grid>
                    </Grid>
                    <Grid container item xs={6} md={6} direction="row" justifyContent={"center"}>
                        <FormControl className={styles.formControl} style={{ marginBottom: '5%' }}>
                            <InputLabel shrink id={'tableselect-label'}>Choix de la table</InputLabel>
                            <Select
                                value={selectedTable}
                                onChange={(event) => setSelectedTable(event.target.value as string)}
                                label={"Choix de la table"}
                                labelId={'tableselect-label'}
                            >
                                {tableDisponible.map((elt) => {
                                    return (
                                        <MenuItem className={styles.menuItemStyle} key={Math.random()} value={elt}>
                                            {elt}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <Button variant="contained" onClick={() => handlePostCommand()}>
                            Valider la commande
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </Grid >
    )
}