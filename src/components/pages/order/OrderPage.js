import React, { useState } from 'react'
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import { theme } from '../../../theme';
import styled from 'styled-components';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { EMPTY_PRODUCT } from './main/MainRightSide/Admin/AdminPanel/AddForm';

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAddSelected, setIsAddSelected] = useState(true)
  const [isEditSelected, setIsEditSelected] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu.SMALL)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  
  // comportements
  const handleAdd = (newProduct) => { 
     // 1. copie du tableau
    const menuCopy = [...menu]
    // 2. manip de la copie du tableau
    const menyCopyUpdate = [newProduct, ...menuCopy]
    // 3. update du state
    setMenu(menyCopyUpdate)
   }

   const handleDeleteMenuToProduct = (idOfProductToDelete) => { 
    //1. copy du state
    const menuCopy = [...menu]
    //2.manipulation de lacopie du state
    const menuUpdated = menuCopy.filter( (product) => product.id !== idOfProductToDelete)
    console.log("menuUpdated: ", menuUpdated)
    //3. Update du state
    setMenu(menuUpdated)
    }

    const resetMenu = () => { 
      setMenu(fakeMenu.SMALL)
     }
  
    const orderContextValue = {
      isModeAdmin, 
      setIsModeAdmin,
      isCollapsed,
      setIsCollapsed,
      isAddSelected, 
      setIsAddSelected,
      isEditSelected, 
      setIsEditSelected,
      currentTabSelected, 
      setCurrentTabSelected,
      handleAdd,
      menu,
      setMenu,
      handleDeleteMenuToProduct,
      resetMenu,
      newProduct, 
      setNewProduct
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
