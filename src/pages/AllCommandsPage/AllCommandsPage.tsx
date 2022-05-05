import { Grid } from "@mui/material"
import { Header } from "../../components/HeaderComponent/HeaderComponent"
import useGetAllCommands from "../../queries/useGetAllCommands"
import styles from "./AllCommandsPage.module.scss"

export const AllCommandsPage = () => {
    const commands = useGetAllCommands().data
    return (
        <Grid container className={styles.allCommandsPageContainer} direction={"row"}>
            <Header />
            <Grid>
                {commands && commands.map(command => {
                    return (
                        <h1>{command.stateStarter}</h1>)
                })}

            </Grid>
        </Grid>
    )
}