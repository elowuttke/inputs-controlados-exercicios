import React, { useState } from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = ({
  birthday,
  onChangeBirthday,

  phone,
  onChangePhone,

  selfDeclaration,
  onChangeSelfDeclaration,

  sendDataForm2,

  setFormFlow
  }) => {

  return (
    <Form>
      <button onClick={()=>setFormFlow(1)}>Voltar</button>
      <label>
        Data de Nascimento:
        <Input  
          placeholder="00/00/0000" 
          value={birthday} 
          onChange={onChangeBirthday} 
        />
      </label>
      <label>
        Telefone:
        <Input  
          placeholder="0 0000 0000" 
          value={phone} 
          onChange={onChangePhone} 
        />
      </label>
      <label>
        Você se autodeclara:
        <select value={selfDeclaration} onChange={onChangeSelfDeclaration}>
          <option>prefiro não dizer</option>
          <option>Amarela</option>
          <option>Branca</option>
          <option>Indigena</option>
          <option>Negro</option>
          <option>Parda</option>
        </select>
      </label>
      <button onClick={sendDataForm2}>Enviar dados</button>
    </Form>
  )
}

export default ConfirmationForm