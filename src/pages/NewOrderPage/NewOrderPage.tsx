import { Grid } from "@mui/material"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import styles from './NewOrderPage.module.scss'

export const NewOrderPage = () => {
    return (
        <Grid container className={styles.newOrderPageContainer} direction={"row"}>
            <Grid item xs={12} md={12}>
                <Header />
            </Grid>
            <Grid>
                <p>New order page</p>
            </Grid>
        </Grid>
    )
}