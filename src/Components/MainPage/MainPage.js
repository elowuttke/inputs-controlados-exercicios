import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [checkEmail, setCheckEmail] = useState("")
  const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {setName(event.target.value)}
  const onChangeAge = (event) => {setAge(event.target.value)}
  const onChangeEmail = (event) => {setEmail(event.target.value)}
  const onChangeCheckEmail = (event) => {setCheckEmail(event.target.value)}

  const sendData = () => {
    //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
    if (
      age >= 18 &&
      name.length >= 10 &&
      name.length <= 30 &&
      email.includes("@") &&
      email.substring(email.length - 4) === ".com" &&
      email.includes(".com") &&
      email === checkEmail
    ){
      setFormFlow(2)
    } else if (
      age == "" ||
      name === "" ||
      email === "" ||
      checkEmail === ""
    ){
      alert("todos os campos devem ser preenchidos")
    } else {
      alert("o formulário deve ser respondido corretamente")
    }
  }

  // ConfirmationForm
  const [birthday, setBirthday] = useState("")
  const [phone, setPhone] = useState("")
  const [selfDeclaration, setSelfDeclaration] = useState("")

  const onChangeBirthday = (event) => {setBirthday(event.target.value)}
  const onChangePhone = (event) => {setPhone(event.target.value)}
  const onChangeSelfDeclaration = (event) => {setSelfDeclaration(event.target.value)}

  const sendDataForm2 = () => {
    if(birthday === "" || phone === ""){
      alert("todos os campos devem ser preenchidos")
    } else {
      alert("Cadastro realizado com sucesso")

      setBirthday("")
      setPhone("")
    }
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
        // insira aqui suas props
        name={name}
        onChangeName={onChangeName}

        age={age}
        onChangeAge={onChangeAge}

        email={email}
        onChangeEmail={onChangeEmail}

        checkEmail={checkEmail}
        onChangeCheckEmail={onChangeCheckEmail}   

        sendData={sendData}
        // confirmEmail={confirmEmail}
        /> : <ConfirmationForm 
        birthday={birthday}
        onChangeBirthday={onChangeBirthday}

        phone={phone}
        onChangePhone={onChangePhone}

        selfDeclaration={selfDeclaration}
        onChangeSelfDeclaration={onChangeSelfDeclaration}

        sendDataForm2={sendDataForm2}

        setFormFlow={setFormFlow}
        />
      }
    </MainContainer>
  )
}

export default MainPage