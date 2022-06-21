import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router"
import { MenuIcon } from "../assets/icons";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MapIcon from '@material-ui/icons/Map';
import { useState } from "react";
import { useEffect } from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const StyledMenu = withStyles(theme => ({
    root: {
        backgroundColor: "gray",
        '&:focus': {
            backgroundColor: theme.palette.primary.black,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.gray,
            },
        },
    },
}))(props => (
    <Menu

        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.black,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.gray,
            },
        },
    },
}))(MenuItem);

export default function SimpleMenu(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setUser(foundUser);
        }
    }, [])

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseSession = event => {
        localStorage.clear()
        window.location.reload()
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let body;

    if (user) {
        body =
            <>
                <StyledMenuItem>
                    <button className="flex" onClick={() => props.handleStat(1)}>
                        <ListItemIcon>
                            <LibraryBooksIcon className="h-6 w-6 fill-current text-gray-500" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Añadir catálogo" />
                    </button>
                </StyledMenuItem>
                <StyledMenuItem>
                    <button className="flex" onClick={() => props.handleStat(2)}>
                        <ListItemIcon>
                            <LocationCityIcon className="h-6 w-6 fill-current text-gray-500" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Añadir objeto" />
                    </button>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link className="flex" to="/delete">
                        <ListItemIcon>
                            <MapIcon className="h-6 w-6 fill-current text-gray-500" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Eliminar" />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="flex" to="/loggup">
                        <ListItemText primary="Crear cuenta" />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize="small" />
                    </ListItemIcon>
                    <Link className="flex" to="/delete">
                        <ListItemText primary="Borrar Cuenta" />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleCloseSession}>
                    <ListItemIcon>
                        <ArrowForwardIosIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                </StyledMenuItem>

            </>
    }

    else {
        body = <StyledMenuItem>
            <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
            </ListItemIcon>
            <Link className="flex" to="/loggin">
                <ListItemText primary="Identificarse" />
            </Link>
        </StyledMenuItem>
    }

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="default"
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >


                {body}

            </StyledMenu>
        </div>
    );
}



