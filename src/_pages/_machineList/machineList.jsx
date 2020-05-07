import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { green } from "@material-ui/core/colors";
import ListIcon from "@material-ui/icons/List";
import { history } from "../../_redux/_store/history";
import machineIcon from "../../_assets/_images/machine.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "15px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export const MachineList = ({ machines, GetFindingList }) => {
  const classes = useStyles();
  GetFindingList = (id) => {
    history.push("./machinefindinglist/" + id);
  };

  return (
    <Container className="contentWrapper">
      <Grid container spacing={2} style={{ paddingTop: 30, paddingBottom: 30 }}>
        {machines.map((machine, index) => (
          <Grid key={index} item xs={12} sm={3}>
            <Card color="#3364FF">
              <CardContent>
                <Grid container alignItems="flex-start">
                  <Grid item xs={12} md={8}>
                    <h2>
                      {machine.name}
                    </h2>
                   
                  </Grid>
                  <Grid item xs={12} md={4}  justify="flex-end">
                  <IconButton>
                      <InfoIcon />
                    </IconButton>
                    <IconButton>
                      <StarBorderIcon raised />
                    </IconButton>
                  </Grid>
                </Grid>

                <CardMedia
                  style={{ height: 180 }}
                  image={machineIcon}
                  title="Contemplative Reptile"
                />

                <Grid container spacing={2} className={classes.root}>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    justify="flex-start"
                    alignItems="flex-end"
                    
                  >
                    <ListIcon style={{ margin: 5 }} />
                    <span style={{ position: "relative", top: "-7px" }}>
                      2/9
                    </span>
                  </Grid>
                  <Grid item xs={12} md={6} justify="flex-end" container>
                    <Button className="btn-primary"
                      key={machine.id}
                      onClick={() => GetFindingList(machine.id)}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      know More
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => (
  {
  machines: state.machine.machines,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MachineList);
