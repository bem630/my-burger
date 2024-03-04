import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"

export const tabsConfig = (currentTabSelected) => [
    {
      index: "add",
      Icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      className : currentTabSelected=== "add" ? "is-active" : "",
    },
    {
      index:"edit",
      Icon:<MdModeEditOutline />,
      label:"Modifier un produit",
      className : currentTabSelected=== "edit" ? "is-active" : "",
    },
  ]

  export const getTabSelected = (tabs,currentTabSelected)=> {
    return tabs.find((tab) => tab.index=== currentTabSelected )
  }
  