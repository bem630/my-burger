import React from 'react'
import AdminTabs from './AdminTabs'
import AdminPanel from './AdminPanel'
import styled from 'styled-components'

export default function Admin() {
    //State

    //comportements
    

    //affichage
  return (
    <AdminStyled>
        <AdminTabs/>
        <AdminPanel/>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
`