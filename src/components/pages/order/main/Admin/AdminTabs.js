import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../theme'

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <p>AdminTabs</p>
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`

