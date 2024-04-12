import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import AddForm from "./AdminPanel/AddForm"
import EditForm from "./AdminPanel/EditForm"

export const tabsConfig = (currentTabSelected) => [
    {
      index: "add",
      Icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      className : currentTabSelected=== "add" ? "is-active" : "",
      Content: <AddForm/>
    },
    {
      index:"edit",
      Icon:<MdModeEditOutline />,
      label:"Modifier un produit",
      className : currentTabSelected=== "edit" ? "is-active" : "",
      Content: <EditForm/>
    },
  ]

  export const getTabSelected = (tabs,currentTabSelected)=> {
    return tabs.find((tab) => tab.index=== currentTabSelected )
  }
  