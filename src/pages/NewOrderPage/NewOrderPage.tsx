import { Grid, Typography } from "@mui/material"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import { NewOrderFormComponent } from "../../components/NewOrderFormComponent/NewOrderFormComponent"
import styles from './NewOrderPage.module.scss'

export const NewOrderPage = () => {




    return (
        <Grid container className={styles.newOrderPageContainer} direction={"row"} justifyContent="center">
            <Header />
            <Grid container direction={"column"} justifyContent={"flex-start"} alignItems="center">
                <Typography variant="h3" style={{ color: '#364968' }} >Passer une commande</Typography>
            </Grid>
            <NewOrderFormComponent />
        </Grid >
    )
}