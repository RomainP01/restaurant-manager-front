import { Grid, Typography } from "@mui/material"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import { NewCommandFormComponent } from "../../components/NewCommandFormComponent/NewCommandFormComponent"
import styles from './NewCommandPage.module.scss'

export const NewCommandPage = () => {




    return (
        <Grid container className={styles.newCommandPageContainer} direction={"row"} justifyContent="center">
            <Header />
            <Grid container direction={"column"} justifyContent={"flex-start"} alignItems="center">
                <Typography variant="h3" style={{ color: '#364968' }} >Passer une commande</Typography>
            </Grid>
            <NewCommandFormComponent />
        </Grid >
    )
}