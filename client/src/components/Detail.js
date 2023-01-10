// import React from 'react'
// import styled from'styled-components'

// function Detail() {
//   return (
//     <Container>   
//           <Background>
//               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
//           </Background>
//           <ImageTitle>
//               <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
//               <Controls>
//               <PlayButton>
//                     <img src="/images/play-icon-black.png" />
//                     <span>Play</span>
//               </PlayButton>
//               <TrailerButton>
//                     <img src="/images/play-icon-white.png" />
//                     <span>Trailer</span>
//               </TrailerButton>
//               <AddButton>
//                 <span>+</span>
//               </AddButton>
//               <GroupWatchButton>

//               </GroupWatchButton>

//           </Controls>
//           </ImageTitle>
          
//     </Container>
//   )
// }
// export default Detail
// const Container = styled.div
// `
// min-height: calc(100vh -70px);
// padding: 0 calc(3.5vw + 5px);
// position : relative;
// `
// const Background = styled.div
// `
// position: fixed;;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// z-index: -1;
// img{
// width: 108%;
// height: 100%;
// object-fit: cover ;
// }
// `
// const ImageTitle = styled.div
// `
// height: 30vh;
// min-height: 170px;
// width: 35vw;
// min-width: 200px;
// margin-top:50px;
// align:left;
// img{
// width: 100%;
// height: 100%;
// object-fit: contain;
// }
// `
// const Controls = styled.div
// `
// display: flex;
// align-items: center;

// `
// const PlayButton = styled.div
// `
// border-radius: 4px;
// font-size: 15px;
// padding: 0px 24px;
// margin-right: 22px;
// display: flex;
// align-items: center;
// height: 56px;
// background: rgb(249, 249, 249);
// border: none;
// letter-spacing : 1.8px;
// cursor: pointer;
// color: black;
// &: hover{
// background: rgb(198, 198, 198);}



// `
// //trailer button is same as playbutton only color change so wo use upper css like this
// const TrailerButton = styled(PlayButton)
// `
// background: rgba(0, 0, 0, 0.3);
// border: 1px solid white;
// color: white;
// text-transform: uppercase;


// `
// const AddButton = styled.div
// `
// margin-right :16px;
// width: 44px;
// height: 44px;
// display: flex;
// align-items : center;
// justify-content : center;
// border-radius : 50%;
// border: 2px solid white;
// background-color: rgba(0, 0, 0, 0.6);
// cursor: pointer;
// span{
// font-size: 30px;
// color: white;
// }
// `
// const GroupWatchButton = styled.div
// `

// `
import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
        <Background>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' alt=''/>
        </Background>
        <ImageTitle>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' alt=''/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
            <img src='/images/play-icon-white.png' alt=''/>
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupwatchButton>
            <img src='/images/group-icon.png' alt=''/>
            </GroupwatchButton>
        </Controls>
        <Subtitle>
            2018 . 7m . Family, Kids, Animation, Fantasy
        </Subtitle>
        <Description>
        An aging and lonely Chinese Canadian mother suffering from empty nest syndrome, who receives an unexpected second chance at motherhood when she makes a steamed bun (baozi) that comes to life.
        </Description>
    </Container>
  )
}

export default Detail
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
`
const ImageTitle = styled.div`
            height: 30vh;
            min-height: 170px;
            width: 35vw;
            min-width: 200px;
            margin-top: 60px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`
const Controls = styled.div`
        display: flex;
        align-items: center;
`
const PlayButton = styled.button`
        border-radius: 4px;
        font-size: 15px;
        padding: 0px 24px;
        margin-right: 22px;
        letter-spacing: 1.8px;
        display: flex;
        align-items: center;
        height: 56px;
        background: rgb(249, 249, 249);
        border: none;
        cursor: pointer;
    &:hover{
        background: rgb(198, 198, 198);

    }
`
const TrailerButton = styled(PlayButton)`
        background: rgb(0, 0, 0, 0.3);
        border: 1px solid rgb(249, 249, 249);
        color: rgb(249, 249, 249);

`
const AddButton = styled.button`
        height: 44px;
        width: 44px;
        display:flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 2px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        margin-right: 16px;

    span{
        font-size: 30px;
        color: white;
    }
`
const GroupwatchButton = styled(AddButton)`
        background: rgb(0, 0, 0);
`
const Subtitle = styled.div`
        color: rgb(249, 249, 249);
        font-size: 15px;
        min-height: 20px;
        margin-top: 26px;

`
const Description = styled.div`
        line-height: 1.4;
        font-size: 20px;
        margin-top: 16px;
        color: rgb(249, 249, 249);
        max-width: 760px;
`