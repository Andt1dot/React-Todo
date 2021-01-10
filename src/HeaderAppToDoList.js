import React from 'react';
import styled from 'styled-components';
import logoImageHeader from './picture/logo.png';


const HeaderApp = styled.section
`
  padding: 1em;
  background: #86A8E7;  
`
const TitleHeader = styled.h1
`
  font-size: 2em;
  text-align: center;
  color: white;
  font-family: Comic Sans MS, Comic Sans, cursive;
  `
  const HeaderImg = styled.img.attrs({
    src: `${logoImageHeader}`
  })`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  `


function HeaderAppToDoList(){

    return (
        <HeaderApp>
            <TitleHeader>MY TO-DO LIST</TitleHeader>
            <HeaderImg></HeaderImg>
        </HeaderApp>
        );

}


export default HeaderAppToDoList;