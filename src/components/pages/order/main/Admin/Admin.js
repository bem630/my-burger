import React, { useContext } from 'react'
import AdminTabs from './AdminTabs'
import AdminPanel from './AdminPanel'
import styled from 'styled-components'
import OrderContext from '../../../../../context/OrderContext'

export default function Admin() {
    //State
    const { isCollapsed } = useContext(OrderContext)
    //comportements
    

    //affichage
  return (
    <AdminStyled>
        <AdminTabs />
        {!isCollapsed && <AdminPanel/>}
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