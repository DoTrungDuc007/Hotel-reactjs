import React from "react";
import TextField from "@material-ui/core/TextField";
import "./SignUp.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import image from "../LoginHome/image/image.jpg"
import {useHistory} from "react-router-dom";

export default function SignUp(){
    const history = useHistory(
        "/loginHome"
    )
    const homePage = () => {
        history.replace("/loginHome")
    }
    const back = () => {
        history.replace("/loginHome")
    }

    return (
        <>
            <div>
                <div className="body" >
                    <div className="cont">
                        <ArrowBackIcon onClick={back}></ArrowBackIcon>
                        <div className="form">
                            <h2>Sign Up </h2><br/>
                            <form>
                                <label className="edit">
                                    <p className="email">Full Name</p>
                                    <TextField  id="standard-basic"  name="name" />
                                    <p className="email">Birthday</p>
                                    <TextField  id="standard-basic"  name="birthay" />
                                    <p className="email">Address</p>
                                    <TextField  id="standard-basic"  name="address" />
                                    <p className="email">Phone</p>
                                    <TextField  id="standard-basic"  name="phone" /><br/>
                                    <p className="email">Email</p>
                                    <TextField  id="standard-basic"  name="email" /><br/>
                                    <p className="passWord">Password</p>
                                    <TextField  id="standard-basic"  name="password"/><br/>
                                    <button className="submit" type="button" onClick={homePage}>Sign Up</button>

                                    <p>If you already has an account, just sign in. We've missed you!</p>
                                </label>
                            </form>
                        </div>
                        <div className="sub-cont">
                            <div className="img" style={{
                                backgroundImage: `url(${image})`
                            }}>
                                <div className="img-text m-up">
                                    <h2 style={{
                                        color:'white'
                                    }}>Welcome</h2>
                                    <p>Sign up for the best travel !</p>



                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}