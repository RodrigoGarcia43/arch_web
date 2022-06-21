import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MainIcon } from "../assets/icons";
import { useState } from "react";
import { useEffect } from "react";
import httpClient from "../httpClient";

import SimpleMenu from "../Components/SimpleMenu"



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "gray",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState();

    const classes = useStyles();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {

            const foundUser = JSON.parse(loggedInUser)

            setUser(foundUser);
        }
    }, [])


    function handleChangeUserName(event) {
        setUserName(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    const handleSubmit = async e => {

        setUserName("")
        setPassword("")


        try {
            const { data } = await httpClient.get("/user/" + userName);


            if (password === data.password) {
                localStorage.clear()
                localStorage.setItem('user', JSON.stringify(data))
                setUser(data)
            }
            else {
                alert("Contraseña incorrecta")

            }
        }
        catch (err) {
            alert("El nombre de usuario no existe")
        }
        e.preventDefault();
    }

    let body;
    if (user) {
        body = <div className="px-20 py-4">
            <div className="flex-2 mr-2">
                <div className=" w-49 mx-auto pt-3 border-b-2 border-gray-500 text-center text-4xl text-blue-700 ">
                    Iniciada sesión {user.username}
                </div>
            </div>
        </div>
    }
    else {
        body = <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Autentificación
            </Typography>
                <form className={classes.form} noValidate>
                    <TextField value={userName} onChange={handleChangeUserName}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="nombre de usuario"
                        name="username"
                        autoComplete="nombre de usuario"
                        autoFocus
                    />
                    <TextField value={password} onChange={handleChangePassword}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="contraseña"
                        type="contraseña"
                        id="contraseña"
                        autoComplete="current-contraseña"
                    />

                    <Button onClick={handleSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"

                        className={classes.submit}
                    >
                        Aceptar
                </Button>

                </form>
            </div>

        </Container>
    }

    return (

        <div className="bg-fixed">
            <div className="flex  justify-between px-2 py-2 bg-green-900">
                <Link to="/">
                    <MainIcon className="h-10 w-12 " />
                </Link>
                <SimpleMenu />
            </div>

            <div />
            {body}
            <div />

        </div>
    );
}


