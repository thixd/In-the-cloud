import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { database } from '../../firebase'
import { useAuth } from '../../contexts/AuthContext'
import { ROOT_FOLDER } from './FolderControl'
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import IconButton from '@material-ui/core/IconButton';

export default function AddFolder( {currentFolder} ) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const { currentUser } = useAuth()
    function openModal(){
        setOpen(true)
    }
    function closeModal(){
        setOpen(false)
    }
    function handleSubmit(e){
        e.preventDefault()

        if (currentFolder == null) return

        const path = [...currentFolder.path]
        if (currentFolder !== ROOT_FOLDER) {
            path.push({ name: currentFolder.name, id: currentFolder.id })
        }

        database.folders.add({
            name: name,
            parentId: currentFolder.id,
            userId: currentUser.uid,
            path: path,
            createdAt: database.timestamp,
        })
        setName("")
        closeModal()
    }
    return (
        <>
            <IconButton onClick={openModal} style={{color: "#fcbc34"}}>
                <CreateNewFolderIcon/>
            </IconButton>
            <Modal show={open} onHide={closeModal}>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                        Cancel
                        </Button>
                        <Button variant="success" type="submit">
                        Add Folder
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>

    )
}
