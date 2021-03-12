import React from "react";

import {Link} from "react-router-dom";
import { Switch} from "react-router-dom";


export default function CreateUser() {

    return (
        <>
            <Link to="/admin/deleteUser">Delete</Link>
            <Link to="/admin/editUser">Edit</Link>

            <Switch>

            </Switch>
        </>
    )
}