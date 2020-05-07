import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container"; 
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { withRouter } from "react-router-dom";

class MachineFindingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="contentWrapper">
        <Grid
          container
          spacing={2}
          style={{ paddingTop: 30, paddingBottom: 30 }}
        >
          <TableContainer component={Paper}>
            <Table style={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Severity</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Brand</TableCell>
                  <TableCell align="center">Solved/Total Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.MacFinding.map((findings, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {findings.severity}
                    </TableCell>
                    <TableCell align="center">{findings.name}</TableCell>
                    <TableCell align="center">{findings.desc}</TableCell>
                    <TableCell align="center">{findings.Brand}</TableCell>
                    <TableCell align="center">
                      <div>
                        <Button className="btn-primary" style={{marginRight: 16}}
                          variant="contained"
                          startIcon={<InfoIcon />}
                        >
                          Details
                        </Button>
                        <Button  className="btn-primary"
                          variant="contained"
                          startIcon={<ArrowForwardIcon />}
                        >
                          Action
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let { id } = ownProps.match.params;
  let machineID = id;
  return {
    name: ownProps.name,
    id: machineID,
    MacFinding: state.machine.MacFinding.filter(
      (machine) => machine.task === machineID
    ),
  };
};

export default withRouter(connect(mapStateToProps)(MachineFindingList));
