import React from 'react'
import { ROOT_FOLDER } from './FolderControl'
import { Link } from 'react-router-dom'

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Breadcrumb } from 'react-bootstrap';


export default function FolderBreadCrumb( {currentFolder} ) {
    let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER]
    if (currentFolder) path = [...path, ...currentFolder.path]
    
    return (
        <Breadcrumbs aria-label="breadcrumb" separator = " › ">
            {path.map((folder, index) => (
                <Breadcrumb.Item 
                    key = {folder.id} 
                    linkAs = {Link} 
                    linkProps = {{
                        to: {
                            pathname: folder.id ? `/folder/${folder.id}` : "/",
                            state: { folder : {...folder, path : path.slice(1, index)}},
                        }
                    }}>
                    {folder.name}
                </Breadcrumb.Item>
            ))}
            {currentFolder && (
                <Breadcrumb.Item active>
                    {currentFolder.name}
                </Breadcrumb.Item>
            )}
        </Breadcrumbs>
    )
}
