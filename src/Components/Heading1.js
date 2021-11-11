import React from 'react'
import {Container,H1,TEXT,SPN, SECTION} from './styles'


function Heading1() {
    return (
        <SECTION>
        <Container>
           <H1>Heading</H1> 
           <TEXT>ушундай макет бар сиздердин милдетиниздер<br/> ушундай верстканы жасап коздоп чыгышыныздар <br/>керек 
            styled-component колдонгон приоритете<br/>  
            жана компонентный подход колдонуп ойлонуштуруп<br/> 
            компоненттерге болуп аткаргыла <br/>
            Кааласаныздар функционал кошуп корунуздор 
            </TEXT>
            <SPN>view more</SPN>
            </Container>
            </SECTION>
    )
}

export default Heading1
