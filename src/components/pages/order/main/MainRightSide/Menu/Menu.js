import React,{ useContext } from 'react'
import styled from 'styled-components';
import { formatPrice } from '../../../../../../utils/maths';
import Card from '../../../../../reusable-ui/Card';
import { theme } from '../../../../../../theme';
import OrderContext from '../../../../../../context/OrderContext';
import EmptyMenuClient from './EmptyMenuClient';
import EmptyMenuAdmin from './EmptyMenuAdmin';
//import { fakeMenu } from '../../../../fakeData/fakeMenu';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png"
export default function Menu() {
  


  const { menu, isModeAdmin, handleDeleteMenuToProduct, resetMenu } = useContext(OrderContext);
  if(menu.length === 0) {
    if(!isModeAdmin) return <EmptyMenuClient/>
    return <EmptyMenuAdmin onReset={resetMenu}/>
  }
  
  return (
    <MenuStyled>
        {menu.map( ({id, imageSource,title, price}) => {
          return (
            <Card
              key={id}
              imageSource = {imageSource ? imageSource : IMAGE_BY_DEFAULT}
              title={title} 
              leftDescription={formatPrice(price)}
              isModeAdmin={isModeAdmin}
              onDelete={() => handleDeleteMenuToProduct(id)}
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`
