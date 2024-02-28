import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../../theme';

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <p></p>
      <p></p>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  height: 240px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  box-sizing: border-box; // ajouter ça sinon ça fait grossir le panel
  padding: 30px 5%; // ajouter au panel et non dans les form car sinon on va devoir le mettre dans les deux form : AddForm et EditForm
  // les 5% c'est pour les aligner avec le tab.
`