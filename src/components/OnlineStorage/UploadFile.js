import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { storage, database } from '../../firebase'
import { ROOT_FOLDER } from './FolderControl';
import { v4 as uuidV4 } from "uuid"
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
  }));

export default function UploadFile( {currentFolder} ) {
    const [uploadingFiles, setUploadingFiles] = useState([])
    const  { currentUser } = useAuth()
    const classes = useStyles();

    function handleUpload(e) {
        const file = e.target.files[0]
        if (currentFolder == null || file == null ) return

        setUploadingFiles(previousUpload => [
            ...previousUpload, {id: uuidV4(), name: file.name, progress:0, error: false}]
        )
        const parentPath = currentFolder.path.length > 0 
        ? `${currentFolder.path.join('/')}` 
        : ''
        const filePath = currentFolder === ROOT_FOLDER ? parentPath : `${parentPath}/${currentFolder.name}`
        const uploadTask = storage.ref(`/files/${currentUser.id}/${filePath}`).put(file)
        // progress, handle error, handle when successfully done
        uploadTask.on('state_changed', snapshot => {
        }, () => {
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then(url => 
                database.files.add({
                    url: url,
                    name: file.name,
                    createAt: database.timestamp,
                    folderId: currentFolder.id,
                    userId: currentUser.uid
                }))
        })
    }
    return (
        <label>
            <IconButton style={{color: "#fcbc34"}}>
                 <AddCircleIcon/>
                 <input type = "file" onChange = {handleUpload} style={{ opacity: 0, position: "absolute"}} multiple ></input>
            </IconButton>
        </label>
    )
}
