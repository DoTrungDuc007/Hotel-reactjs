import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import "./Login.css"
import bg from "./image/bg.jpg"

export default function Login() {
    const history = useHistory("/admin/dashboard", "/admin/login"
    );
    const [admin, setAdmin] = useState([]);
    const [emailPass, setEmailPass] = useState({
        email: '',
        pass: '',
    });
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/users',
            data: null
        }).then(res=>{
            setAdmin(res.data);
        }).catch(err=>{
            console.log(err);
        });
    },[])

    function change(e){
        var target = e.target;
        setEmailPass({
            ...emailPass,
            [target.name] : target.value,
        })
    }
    function login(e){
        e.preventDefault();
        admin.map((admins)=>{
            if(admins.email == emailPass.email && admins.password == emailPass.pass && admins.id_role == 1){
                localStorage.setItem("accessToken", true);
                history.replace("/admin/dashboard");
            } else{
                history.replace("/admin/login");
            }
        })
        }
    return (
        <div>
            <div className="body">
                <div className="cont">
                    <div className="form">
                        <h2>Login Admin</h2><br/><br/>
                        <form>
                            <label className="edit">
                                <p className="email">Email</p>
                                <TextField  id="standard-basic"  name="email" value={emailPass.email} onChange={change}/><br/><br/><br/>
                                <p className="passWord">Password</p>
                                <TextField  id="standard-basic"  name="pass" value={emailPass.pass} onChange={change}/><br/><br/>
                                <button className="submit" type="button" onClick={login}>Login</button>
                                <p className="forgot-pass">Forgot Password ?</p><br/><br/><br/>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </label>
                        </form>
                    </div>
                    <div className="sub-cont">
                        <div className="img" style={{
                            backgroundImage: `url(${bg})`
                        }}>
                            <div className="img-text m-up">
                                <h2 style={{
                                    color:'white'
                                }}>Welcome</h2>
                                <p>Sign in as an administrator for a more enjoyable experience !</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
