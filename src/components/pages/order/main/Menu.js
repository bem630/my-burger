import React, { useState } from 'react'
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';
import { formatPrice } from '../../../../utils/maths';
import Card from '../../../reusable-ui/Card';
import { theme } from '../../../../theme';
export default function Main() {
  const [menu, setMenu] = useState(fakeMenu2)
  return (
    <MenuStyled>
        {menu.map( ({imageSource,title, id,price}) => {
          return (
            <Card
              key={id}
              imageSource = {imageSource}
              title={title}
              leftDescription={formatPrice(price)}
             />
          )
        }
        )}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`
