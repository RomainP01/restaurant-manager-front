import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useState } from "react"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import { NewOrderFormComponent } from "../../components/NewOrderFormComponent/NewOrderFormComponent"
import styles from './NewOrderPage.module.scss'

export const NewOrderPage = () => {
    const entreeDisponible = ['salade', 'oeuf']
    const [selectedStarter, setSelectedStarter] = useState("")
    const platDisponible = ['Welsh', 'Sou-soupe']
    const [selectedMeal, setSelectedMeal] = useState("")
    return (
        <Grid container className={styles.newOrderPageContainer} direction={"row"} justifyContent="center">
            <Header />

            <Grid container item xs={10} md={10} direction="row" alignItems="center" justifyContent="center" style={{ height: '60%', backgroundColor: 'white' }}>
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
                            <FormControl className={styles.formControl}>
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
                    </Grid>
                    <Grid container item xs={6} md={6} direction="row" justifyContent={"center"}>
                        <FormControl className={styles.formControl}>
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
                </Grid>
            </Grid>
        </Grid>
    )
}