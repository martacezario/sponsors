import React,{useState, useEffect} from "react";
import Amazon from "./assets/amazon.png"
import Sirio from "./assets/sirio.png"
import VNW from "./assets/vnw.png"
import estudante from "./assets/estudantes.png"
import armazem from "./assets/armazem.jpg"
import hospital from "./assets/hospital.jpg"
import styled from "styled-components"
import{createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: "Poppins", sans-serif;
  }
  
`
const Patrocinadores = styled.div`
display: flex;
justify-content: space-around;
align-items: center;


  
`

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 76vh;
  
  
`
const H2 = styled.h2`
  font-size:2rem;
  color: #686868;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)
`

const Img1 = styled.img`
width: 10vw;

  
`

const Img2 = styled.img`
  width:10vw;
`
const Img3 = styled.img`
   width:10vw;
`




const Img = styled.img`
  width: 30vw;
  border-radius:10px;
`
function App(){

  const[marca, setMarca] = useState (VNW)
  const[back, setBack] = useState ()


  
  useEffect(()=>{
if(marca === VNW ){
document.querySelector("div").style.backgroundColor="#F8BF15"
document.querySelector("div").style.transition="ease-in-out 0.8s"
}else if (marca === Amazon){
  document.querySelector("div").style.backgroundColor="#232F3E"
  document.querySelector("div").style.transition="ease-in-out 0.8s"
}else if(marca === Sirio){
  document.querySelector("div").style.backgroundColor="#FFFFFF"
  document.querySelector("div").style.transition="ease-in-out 0.8s"
} 

  })




  return(

   <section>
    <GlobalStyle/>

    <Info>
      <Img src={marca} alt="#" />
      <H2>PATROCINADORA OFICIAL DO CICLO TALENTOS DIGITAIS</H2>
    </Info>

    <Patrocinadores>
      <Img1 onClick={()=>{setMarca(Amazon)}}src={Amazon} alt="" />
      <Img2 onClick={()=>{setMarca(VNW)}}src={VNW} alt="" />
      <Img3 onClick={()=>{setMarca(hospital)}}src={Sirio} alt="" />


    </Patrocinadores>

    
    
    </section>
    
  )
}

export default App