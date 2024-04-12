import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ImagePreview from './ImagePreview'
import OrderContext from '../../../../../../../context/OrderContext'
import SubmitMessage from './SubmitMessage'
import { getInputTextsConfig } from "./inputTextsConfig"
import Button from "../../../../../../reusable-ui/Button"
import TextInput from '../../../../../../reusable-ui/TextInput'

export const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imagesSource: "",
  price: 0,
}

export default function AddForm() {

  
  const {handleAdd, newProduct, setNewProduct} = useContext(OrderContext)
  const [isSubmited, setIsSubmited] = useState(false)

  const handleSubmit = (event) => { 
    event.preventDefault()

    const newProductToAdd = {
      id: crypto.randomUUID(),
      ...newProduct
    }
    handleAdd(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)
    setIsSubmited(true)

    displaySuccesMessage()
   }

   const displaySuccesMessage = () => { 
    setTimeout(() => {
      setIsSubmited(false)
    }, 2000);
    }

   const handleChange = (event) => {
    const {name, value} = event.target 
    setNewProduct({ ...newProduct, [name]: value})
    }

    const inputTexts = getInputTextsConfig(newProduct)

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ImagePreview imagesSource={newProduct.imagesSource} title={newProduct.title}/>
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput {...input} key={input.id} onChange={handleChange} version="minimalist"/>
        ) )}
      </div>
      <div className="submit">
        <Button 
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmited && <SubmitMessage />}
      </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`
