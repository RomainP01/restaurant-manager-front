import { Grid } from "@mui/material";
import { Header } from "../../components/HeaderComponent/HeaderComponent";
import styles from "./Homepage.module.scss";

export const HomePage = () => {
    return (
        <Grid container className={styles.homePageContainer} direction={"row"}>
            <Header />
            <Grid>
                <p>Tedst</p>
            </Grid>
        </Grid>
    )
}