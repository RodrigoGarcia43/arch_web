import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router"
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MainIcon } from "../assets/icons";
import httpClient from "../httpClient";
import { useState } from "react";


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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUp() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const classes = useStyles();

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeLastName(event) {
        setLastName(event.target.value)
    }

    function handleChangeUserName(event) {
        setUserName(event.target.value)
    }

    function handleChangePassword(event) {
        setPassword(event.target.value)
    }

    function handleSubmit(event) {


        let params = {
            FirstName: name,
            LastName: lastName,
            Username: userName,
            Password: password,
            Balance: 0
        }

        setName("")
        setLastName("")
        setUserName("")
        setPassword("")


        const { data } = httpClient.post("/user", params);
        alert('Añadido usuario: ' + data.data.Username)

        event.preventDefault();

    }

    return (
        <>
            <div className="flex  justify-between px-2 py-2 bg-green-900">
                <Link to="/">
                    <MainIcon className="h-10 w-12 " />
                </Link>
                <SimpleMenu />
            </div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Crear Cuenta
        </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField value={name} onChange={handleChangeName}
                                    autoComplete="fname"
                                    name="Nombre"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Nombre"
                                    label="Nombre"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField value={lastName} onChange={handleChangeLastName}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Apellido"
                                    label="Apellido"
                                    name="Apellido"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={userName} onChange={handleChangeUserName}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="NombreDeUsuario"
                                    label="Nombre De Usuario"
                                    name="NombreDeUsuario"
                                    autoComplete="NombreDeUsuario"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField value={password} onChange={handleChangePassword}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="contraseña"
                                    label="contraseña"
                                    type="contraseña"
                                    id="contraseña"
                                    autoComplete="current-contraseña"
                                />
                            </Grid>

                        </Grid>
                        <Button onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            Aceptar
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/singin">
                                    Identificación
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </>
    );
}