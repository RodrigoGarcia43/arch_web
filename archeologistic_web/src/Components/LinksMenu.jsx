import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router"

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import MapIcon from '@material-ui/icons/Map';
import MenuBookIcon from '@material-ui/icons/MenuBook';

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

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="default"
                onClick={handleClick}
            >
                <PowerSettingsNewIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                <StyledMenuItem>
                    <Link className="flex" to="/lines">
                        <ListItemIcon>
                            <LibraryBooksIcon className="h-6 w-6 fill-current text-gray-500" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Líneas de investigación" />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link className="flex" to="/heritage">
                        <ListItemIcon>
                            <LocationCityIcon className="h-6 w-6 fill-current text-gray-500" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Gestión del Patrimonio Arqueológico" />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link className="flex" to="/catalogues">
                        <ListItemIcon>
                            <MapIcon className="h-6 w-6 fill-current text-gray-500" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Catálogo arqueológico" />
                    </Link>
                </StyledMenuItem>
                <StyledMenuItem>
                    <Link className="flex" to="/megazines">
                        <ListItemIcon>
                            <MenuBookIcon className="h-6 w-6 fill-current text-gray-500" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Revista Gabinete de Arqueología" />
                    </Link>
                </StyledMenuItem>

            </StyledMenu>
        </div>
    );
}



