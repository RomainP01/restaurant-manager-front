import { Grid } from "@mui/material"

interface Props {
    label: string | undefined
    stateOfFood: string
}
export const CommandItemComponent = ({ label, stateOfFood }: Props) => {
    return (
        <Grid container item xs={12} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6}>
                {label}
            </Grid>
            <Grid item xs={6}>
                {stateOfFood}
            </Grid>
        </Grid>
    )
}