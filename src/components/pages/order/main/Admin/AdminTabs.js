import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../theme'
import Tab from '../../../../reusable-ui/Tab'
import { FiChevronUp,FiChevronDown } from "react-icons/fi";
import OrderContext from '../../../../../context/OrderContext';
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export default function AdminTabs() {
  const {
      isCollapsed, 
      setIsCollapsed,
      isAddSelected,
      setIsAddSelected,
      isEditSelected, 
      setIsEditSelected
    } = useContext(OrderContext)
  
/*
  const handleEditTabSelected = () => { 
    
    
   }
  const handleAddTabSelected = () => { 
    
    
   }*/

   const selectCurrentTab = (selectTab) => { 
    setIsCollapsed(false)
    if(selectTab==="edit") {
      setIsAddSelected(false)
      setIsEditSelected(true)
    }
    if(selectTab==="add") {
      setIsAddSelected(true)
      setIsEditSelected(false)
    }
    }

  return (
    <AdminTabsStyled>
      <Tab 
        Icon={isCollapsed ? <FiChevronUp />: <FiChevronDown />} 
        onClick={()=> setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""} 
        label={""}
      />
      <Tab 
        Icon={<AiOutlinePlus />} 
        onClick={()=> selectCurrentTab("add")}
        className={isAddSelected ? "is-active" : ""} 
        label={"Ajouter un produit"}
      />
      <Tab 
        Icon={<MdModeEditOutline />} 
        onClick={()=> selectCurrentTab("edit")}
        className={isEditSelected ? "is-active" : ""} 
        label={"Modifier un produit"}
      />
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

