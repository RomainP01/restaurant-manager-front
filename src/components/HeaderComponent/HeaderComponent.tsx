import { Grid } from "@mui/material"
import styles from './HeaderComponent.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <Grid container item xs={12} md={12} direction="row" alignItems="center" justifyContent={"space-around"} className={styles.headerContainer}>
            <Link to="/" className={styles.headerLinkContainer}>
                <Grid container item xs={2} md={2} direction="row" justifyContent="center" alignItems="center" className={styles.headerIconContainer}>
                    <HomeIcon className={styles.headerIcon} fontSize={"large"} />
                </Grid>
            </Link>
            <Link to="/newCommand" className={styles.headerLinkContainer}>
                <Grid container item xs={2} md={2} direction="row" justifyContent="center" alignItems="center" className={styles.headerIconContainer}>
                    <MenuBookIcon className={styles.headerIcon} fontSize={"large"} />
                </Grid>
            </Link>
        </Grid>
    )
}