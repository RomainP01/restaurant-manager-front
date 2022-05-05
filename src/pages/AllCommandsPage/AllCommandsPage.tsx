import { Grid } from "@mui/material"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import styles from "./AllCommandsPage.module.scss"

export const AllCommandsPage = () => {
    return (
        <Grid container className={styles.allCommandsPageContainer} direction={"row"}>
            <Header />
            <Grid>
                <p>tetetetetet</p>
            </Grid>
        </Grid>
    )
}