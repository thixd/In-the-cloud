import React from 'react'
import AddFolder from './AddFolder'
import UploadFile from './UploadFile'
import { FolderControl }   from './FolderControl'
import Folder from './Folder'
import { useParams, useLocation } from 'react-router-dom'
import FolderBreadCrumb from './FolderBreadCrumb'
import File from './File'
import logo from '../../asset/logo.gif'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {ListItemText } from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    background: "white", 
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
    const { folderId } = useParams()
    const { state = {}} = useLocation()
    const { folder, childFolders, childFiles } = FolderControl(folderId, state.folder)
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <FolderBreadCrumb currentFolder={folder}/>
                    <div>
                        </div>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left">
                <div className={classes.toolbar} >
                    <div style = {{marginTop: 6}}>
                        <img src={logo} width="60" height="60" alt=" "></img>
                        <span className = "SmallTitle">  In the cloud </span>
                    </div>
                </div>
                <List>

                    <ListItem button key = {'New Folder'}>
                        <AddFolder currentFolder={folder}/>
                        <ListItemText primary = {'New Folder'}></ListItemText>
                    </ListItem>
                    <ListItem button key = {'New File(s)'}>
                        <UploadFile currentFolder={folder}/>
                        <ListItemText primary = {'Upload File(s)'}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key = {'Home'} component={Link} to="/">
                        <ListItemIcon><HomeRoundedIcon/></ListItemIcon>
                        <ListItemText primary = {'Home'}></ListItemText>
                    </ListItem>
                    <ListItem button key = {'Setting'} component={Link} to="/user">
                        <ListItemIcon><SettingsIcon/></ListItemIcon>
                        <ListItemText primary = {'Setting'}></ListItemText>
                    </ListItem>
                    <ListItem button key = {'Bin'}>
                        <ListItemIcon><DeleteIcon/></ListItemIcon>
                        <ListItemText primary = {'Bin'}></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main>
                <div className={classes.toolbar}/>
                {childFolders.length > 0 && (
                <div className="d-flex flex-wrap">
                    {childFolders.map(childFolder => (
                    <div
                        key={childFolder.id}
                        style={{ maxWidth: "250px" }}
                        className="p-2">
                        <Folder folder={childFolder} />
                    </div>
                    ))}
                </div>
                )}

                {/* {childFolders.length > 0 && childFiles.length > 0 && <hr/>} */}

                {childFiles.length > 0 && (
                <div className="d-flex flex-wrap">
                    {childFiles.map(childFile => (
                    <div
                        key={childFile.id}
                        style={{ maxWidth: "270px", maxHeight: "270px" }}
                        className="p-2">
                        <File file={childFile} />
                    </div>
                    ))}
                </div>
                )}
                <Fab color="secondary" aria-label="edit" style = {{position: 'absolute',bottom:20, right:20}}>
                    <DeleteIcon />
                </Fab>
            </main>
            
        </div>
        
    )
}
