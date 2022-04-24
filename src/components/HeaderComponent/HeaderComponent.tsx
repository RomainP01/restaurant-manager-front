import { Grid } from "@mui/material"
import styles from './HeaderComponent.module.scss'
import HomeIcon from '@mui/icons-material/Home';
export const Header = () => {
    return (
        <Grid container item xs={12} md={12} direction="row" alignItems="center" justifyContent="space-evenly" className={styles.headerContainer}>
            <Grid container item xs={3} md={3} direction="row" justifyContent="center" alignItems="center" className={styles.headerIconContainer}>
                <HomeIcon className={styles.headerIcon} />
            </Grid>
        </Grid>
    )
}