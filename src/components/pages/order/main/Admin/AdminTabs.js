import React, { useContext } from 'react'
import styled from 'styled-components'
import { theme } from '../../../../../theme'
import Tab from '../../../../reusable-ui/Tab'
import { FiChevronUp,FiChevronDown } from "react-icons/fi";
import OrderContext from '../../../../../context/OrderContext';
import { tabsConfig } from './tabsConfig';


export default function AdminTabs() {
  const {
      isCollapsed, 
      setIsCollapsed,
      currentTabSelected, 
      setCurrentTabSelected
    } = useContext(OrderContext)

   const selectTab = (tabSelected) => { 
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
    }

    const tabs = tabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
      <Tab 
        Icon={isCollapsed ? <FiChevronUp />: <FiChevronDown />} 
        onClick={()=> setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""} 
        label={""}
      />
      {tabs.map((tab) => (
          <Tab 
            key={tab.index} 
            index={tab.index} 
            Icon={tab.Icon} 
            className={tab.className} 
            label={tab.label} 
            onClick={()=> selectTab(tab.index)}/>
        ) )}
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

