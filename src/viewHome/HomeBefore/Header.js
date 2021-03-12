import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/responsive.css"
import "./css/style.css"

import logo1 from "./image/1.png";
import logo2 from "./image/2.png";
import logo3 from "./image/3.png";
import logo from "./image/logo.png";
import User2 from "./image/User2.png"

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link, useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: 30,
        marginTop: 5,

    },
}));
export default function Header(){
    const classes = useStyles();
    const history = useHistory(
        "/home"
    );
    const exit = () => {
        history.replace("/home")
    }
    return (
        <>
            <header>
                <div className="header">
                    <div className="header_white_section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header_information">
                                        <ul>
                                            <li><img src={logo1}/>217 Yen Hoa Cau Giay Ha Noi</li>
                                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                            <li><img src={logo2}/>0356983371</li>
                                            &emsp;&emsp;&emsp;&emsp;
                                            <li><img src={logo3}/> dotrungduc0342000@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo"><a href="#"><img src={logo} alt="#"/></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main">

                                                <FormControl className={classes.formControl}>
                                                    <img src={User2} style={{

                                                        marginTop: 10
                                                    }}/>
                                                    <Select style={{
                                                        margin:0
                                                    }}>
                                                        <MenuItem value="">
                                                            <em><AccountCircleIcon/></em>
                                                        </MenuItem>
                                                        <MenuItem >Profile</MenuItem>
                                                        <MenuItem onClick={exit}>Exit</MenuItem>
                                                    </Select>
                                                </FormControl>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}