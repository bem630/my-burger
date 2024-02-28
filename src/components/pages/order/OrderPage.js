import React, { useState } from 'react'
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import { theme } from '../../../theme';
import styled from 'styled-components';
import OrderContext from '../../../context/OrderContext';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  
    const orderContextValue = {
      isModeAdmin, setIsModeAdmin
    }
  return (
        <OrderContext.Provider value={orderContextValue}>
          <OrderPageStyled>
            <div className="container">
              <Navbar/>
              <Main/>
            </div>
          </OrderPageStyled>
        </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
