import React from 'react';
import styled from 'styled-components'
import HeaderAppToDoList from './HeaderAppToDoList'

const InputList = styled.input`
margin-left: 10px;
padding: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 5px;
width: 70%;
height: 25px;
font-family: Comic Sans MS, Comic Sans, cursive;

::placeholder {
  color: black;
}
`;
 
const ButtonMangaeToDo = styled.button`
 background: ${props => props.Add ? "palevioletred" : "white"}; 
 color: ${props => props.Add ? "white" : "palevioletred"};
 width: ${props => props.Add? "20em" : "13em"};
 padding: 10px 25px;
 border-radius: 5px;
 margin: 10px;
 font-family: Comic Sans MS, Comic Sans, cursive;
 `
const ContainerInput = styled.div
`background-color: #E0E0E9;
`

const ContainerList = styled.div
`background-color: #DB7093;
text-align: center;
`
const ElementList = styled.p
`font-family: Comic Sans MS, Comic Sans, cursive;
 font-size: 30px;
 text-decoration: ${props=> props.completed? "line-through": "none"}
`
 


function AppToDoList() {

  const [itemsData, setItemsData] = React.useState("");
  // let itemsList = [{}]
  
  const [itemsList, setitemsList] = React.useState([]);

  const listenerChangeInputToDo = (e) =>{ 
   setItemsData(e.target.value);
  }

  const generateQuickGuid = () =>{
     return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

  const onClickAddToDoList = () =>{
      let item = {
      "task": itemsData,
      "id": generateQuickGuid(),
      "completed": false
    }
//    setitemsList(...item);
    const copy = [ ...itemsList]
    copy.push(item)

    setitemsList(copy); 


  console.log(copy)

  console.log(itemsList)

   // setItemsData("");
  }


 const onClickClearItems = () =>{
 

}

  const completedItem = (e) =>{
    console.log(e.target.value);
   //De indetificat dupa id
   //De facut element list sa aiba decoration uderline false daca ii true sa fie daca nu 
   //dupa ce gasim actualizam info din false ii facem true;
  
 }


  return (
    <React.Fragment>
    <HeaderAppToDoList/>
    <ContainerInput>
    <InputList placeholder="...insert new todo"  type="text" onChange = {listenerChangeInputToDo} value = {itemsData}/>
    <ButtonMangaeToDo Add onClick = {onClickAddToDoList}>Add</ButtonMangaeToDo> 
    <ButtonMangaeToDo Clear onClick = {onClickClearItems}>Clear Completed</ButtonMangaeToDo> 
    </ContainerInput>
    <ContainerList>
   {
     itemsList.map((element) => 
     <ElementList completed = {element.completed} onClick ={ (event)=>{
      // console.log("salut",element.task+" "+""+element.completed); 
       
      const newItemsList = itemsList.map((el) =>{
        if(element.id===el.id)
        {
          const objectItem = {...el,completed:!el.completed}

          return objectItem
        }
        return el
        //console.log(el)
      })
      setitemsList(newItemsList);
      //element.completed = true;
      //setItemsData("");
      // console.log("salut",element.task+" "+""+element.completed);  
    }
    }>{element.task}</ElementList>
     )
   }
  </ContainerList>
    </React.Fragment>
    );
}

export default AppToDoList;
