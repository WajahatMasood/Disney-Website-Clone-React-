import React , {useEffect}from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewrs from './Viewrs'
import Movies from './Movies'
import Detail  from './Detail'
import db from '../firebase'

function Home() {
  
  useEffect(()=>{
      // snapshot grab the data and than send us the data back from the db
      db.collection("movies").onSnapshot((snapshot)=>{
      console.log(snapshot);

      
      } )     
  }, [])
  return (  
    <Container>
            <ImageSlider />
            <Viewrs />
            <Movies />
    </Container>
    
  )
}
export default Home
const Container = styled.main
`
  min-height:calc(100vh - 70px);
  padding : 0 calc(1.5vw + 5px);
  position:relative;
  overflow : hidden;
                                       
  &:before{
      background:url("/images/home-background.png") center center/ cover
      no-repeat fixed;
      content:"";
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:-1;
}
`