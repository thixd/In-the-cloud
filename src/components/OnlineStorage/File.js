import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFile } from "@fortawesome/free-solid-svg-icons"
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function File({ file }) {
    return (
      <a
            href={file.url}
            target="_blank"
            className="btn btn-outline-dark text-truncate w-100">
            <FontAwesomeIcon icon={faFile} className="mr-2" />
                {file.name}
          </a>
    )
  }