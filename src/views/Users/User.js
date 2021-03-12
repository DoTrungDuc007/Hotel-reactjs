import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";


import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import CardBody from "components/Card/CardBody.js";

import Table from "../../components/Table/Table";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import BugReport from "@material-ui/icons/BugReport";
import Tasks from "../../components/Tasks/Tasks";

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function User() {
    const classes = useStyles();
    return (
        <div>

            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>Simple Table</h4>
                        <p className={classes.cardCategoryWhite}>
                            Here is a subtitle for this table
                        </p>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={["Name", "Country", "City", "Salary", "action"]}
                            tableData={[
                                ["Dakota Rice", "Niger", "Oud", "$36,738",<><DeleteIcon fontSize="small" color="primary" /> <EditIcon fontSize="small" color="primary" /></>],
                                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
                <CustomTabs
                    title="Tasks:"
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: "Bugs",
                            tabIcon: BugReport,
                            tabContent: (
                                <Tasks
                                    checkedIndexes={[0, 3]}     //checked
                                    tasksIndexes={[0, 1, 2, 3]} //check inbox
                                    tasks={[
                                        ["Dakota Rice", "Niger", "Oud", "$36,738",],
                                        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                                        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                                        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                                        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                        ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                                    ]}
                                />
                            )
                        },


                    ]}
                />
            </GridItem>
        </div>
    );
}
