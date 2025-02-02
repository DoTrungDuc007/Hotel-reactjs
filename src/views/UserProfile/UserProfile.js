import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import TextField from '@material-ui/core/TextField';
import avatar from "assets/img/faces/marc.jpg";
// import Table from "../../components/Table/Table";
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
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

export default function UserProfile() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={9}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                            <p className={classes.cardCategoryWhite}>Complete your profile</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Name"
                                        id="company-disabled"
                                        formControlProps={{
                                            fullWidth: true
                                        }}

                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Address"
                                        id="company-disabled"
                                        formControlProps={{
                                            fullWidth: true
                                        }}

                                    />
                                </GridItem>

                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Email@domain.com"
                                        id="first-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Password"
                                        id="last-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Phone"
                                        id="last-name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="date"
                                            label="Birthday"
                                            type="date"
                                            defaultValue="2000-04-03"

                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </GridItem>
                            </GridContainer>

                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Update Profile</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <Card profile>
                        <CardAvatar profile>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                <img src={avatar} alt="..." />
                            </a>
                        </CardAvatar>
                        <CardBody profile>
                            <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                            <h4 className={classes.cardTitle}>Alec Thompson</h4>
                            <p className={classes.description}>
                                Don{"'"}t be scared of the truth because we need to restart the
                                human foundation in truth And I love you like Kanye loves Kanye
                                I love Rick Owens’ bed design but the back is...
                            </p>
                            <Button color="primary" round>
                                Follow
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>

            </GridContainer>

        </div>
    );
}
