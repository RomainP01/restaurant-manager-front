import { Grid, Typography } from "@mui/material";
import { Header } from "../../components/HeaderComponent/HeaderComponent";
import styles from "./Homepage.module.scss";
import philippe from "../../images/philippe.jpg";
export const HomePage = () => {
    return (
        <Grid container className={styles.homePageContainer} direction={"row"}>
            <Header />
            <Grid container direction={"column"} justifyContent={"flex-start"} alignItems="center">
                <Typography variant="h3" style={{ color: '#364968' }} >Le bon resto de Philippe</Typography>
            </Grid>
            <Grid container direction="row" justifyContent="center">
                <img src={philippe} alt="logo" />
            </Grid>
        </Grid>
    )
}