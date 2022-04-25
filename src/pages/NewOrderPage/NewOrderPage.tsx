import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import { NewOrderFormComponent } from "../../components/NewOrderFormComponent/NewOrderFormComponent"
import styles from './NewOrderPage.module.scss'

export const NewOrderPage = () => {
    const entreeDisponible = ['salade', 'oeuf']
    const [selectedStarter, setSelectedStarter] = useState("")
    const platDisponible = ['Welsh', 'Sou-soupe']
    const [selectedMeal, setSelectedMeal] = useState("")
    const dessertDisponible = ['Charlotte aux fraises', 'Tarte tatin']
    const [selectedDrink, setSelectedDrink] = useState("")
    const boissonDisponible = ['8.6', 'Coca bien frais chakal']
    const [selectedDessert, setSelectedDessert] = useState("")
    const tableDisponible = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const [selectedTable, setSelectedTable] = useState("")

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
                                    onChange={(event) => setSelectedStarter(event.target.value as string)}
                                    label={"Choix de l'entrée"}
                                    labelId={'starterselect-label'}
                                >
                                    {entreeDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={elt}>
                                                {elt}
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
                                    onChange={(event) => setSelectedMeal(event.target.value as string)}
                                    label={"Choix du plat"}
                                    labelId={'mealselect-label'}
                                >
                                    {platDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={elt}>
                                                {elt}
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
                                    onChange={(event) => setSelectedDessert(event.target.value as string)}
                                    label={"Choix du dessert"}
                                    labelId={'dessertselect-label'}
                                >
                                    {dessertDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={elt}>
                                                {elt}
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
                                    onChange={(event) => setSelectedDrink(event.target.value as string)}
                                    label={"Choix de la boisson"}
                                    labelId={'drinkselect-label'}
                                >
                                    {boissonDisponible.map((elt) => {
                                        return (
                                            <MenuItem className={styles.menuItemStyle} key={Math.random()} value={elt}>
                                                {elt}
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
                        <Button variant="contained" onClick={() => { console.log('clicked') }}>
                            Valider la commande
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}