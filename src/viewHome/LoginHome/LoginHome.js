import React from "react";
import TextField from "@material-ui/core/TextField";
import "./LoginHome.css"
import Button from "@material-ui/core/Button";
import image from "./image/image.jpg"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router-dom";
export default function LoginHome(){
    const history = useHistory("/signUpHome", "/home","/HaLong"
    )
    const signIn = () => {
        history.replace("/HaLong")
    }
    const signUp = () => {
        history.replace("/signUpHome")
    }
    const back = () => {
        history.replace("/home")
    }
    return (

        <>
            <div>
                <div className="body" >

                    <div className="cont">
                        <ArrowBackIcon onClick={back}></ArrowBackIcon>
                        <div className="form">
                            <h2>Sign In </h2><br/><br/>
                            <form>
                                <label className="edit">
                                    <p className="email">Email</p>
                                    <TextField  id="standard-basic"  name="email" /><br/><br/><br/>
                                    <p className="passWord">Password</p>
                                    <TextField  id="standard-basic"  name="pass"/><br/><br/>
                                    <button className="submit" type="button" onClick={signIn}>Sign In</button>
                                    <p className="forgot-pass">Forgot Password ?</p><br/><br/><br/>
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
                                    <p>Sign up for the best travel !</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    <Button  className="editbutton" variant="contained" onClick={signUp}>Sign Up</Button>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}