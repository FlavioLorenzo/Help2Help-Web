import React from 'react'

import ImageCard from '../../components/UI/ImageCard/ImageCard'
import SplitGradientCard from '../../components/UI/SplitGradientCard/SplitGradientCard'
// import FullGradientCard from '../../components/UI/FullGradientCard/FullGradientCard'
import ClosedVerticalCard from '../../components/UI/ClosedCards/ClosedVerticalCard/ClosedVerticalCard'
import ClosedHorizontalCard from '../../components/UI/ClosedCards/ClosedHorizontalCard/ClosedHorizontalCard'
import ClosedVolunteerCard from '../../components/UI/ClosedCards/ClosedVolunteerCard/ClosedVolunteerCard'
import HorizontalScrollingCardWrapper from '../../components/UI/ScrollingWrappers/HorizontalScrollingCardWrapper/HorizontalScrollingCardWrapper'
import VerticalScrollingCardWrapper from '../../components/UI/ScrollingWrappers/VerticalScrollingCardWrapper/VerticalScrollingCardWrapper'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

import environmentImage from '../../assets/images/example_environment.jpg'
import healthImage from '../../assets/images/example_health.jpg'


const exampleComponent2 = props => {

    const itemSelectedHandler = title => console.log("Clicked " + title + "!")

    let listVCards = []
    listVCards.push(<ClosedVerticalCard key="test" title="Prima prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test2" title="Secondaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa prova" subtitle="Oggi è una bella giornata + monologo lunghissimo sul senso della vita" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test3" title="Terza prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test4" title="Quarta prova" subtitle="Oggi è una bella giornata" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)

    let listHCards = []
    listHCards.push(<ClosedHorizontalCard key="test" title="Prima prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedHorizontalCard>)
    listHCards.push(<ClosedHorizontalCard key="test2" title="Secondaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa prova" subtitle="Oggi è una bella giornata" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedHorizontalCard>)
    listHCards.push(<ClosedHorizontalCard key="test3" title="Terza prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedHorizontalCard>)
    listHCards.push(<ClosedHorizontalCard key="test4" title="Quarta prova" subtitle="Oggi è una bella giornata" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedHorizontalCard>)

    let listVolunteerCards = []
    listVolunteerCards.push(<ClosedVolunteerCard key="test" fullName="Nome Cognome" age="21" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVolunteerCard>)
    listVolunteerCards.push(<ClosedVolunteerCard key="test2" fullName="Gennara Corinzia" age="18" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVolunteerCard>)
    listVolunteerCards.push(<ClosedVolunteerCard key="test3" fullName="Lucrezia Giacobelli" age="30" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVolunteerCard>)
    listVolunteerCards.push(<ClosedVolunteerCard key="test4" fullName="Filippa Fukushima della terra dei canguri" age="17" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVolunteerCard>)

    return (
        <Auxiliary>
            <SplitGradientCard cardBorder="BorderBottomRight" hasPadding height="200px"></SplitGradientCard>
            <ImageCard cardBorder="BorderBottomRight" hasPadding imageSrc={environmentImage}></ImageCard>
            <HorizontalScrollingCardWrapper>{listVCards}</HorizontalScrollingCardWrapper>
            <VerticalScrollingCardWrapper >{listHCards}</VerticalScrollingCardWrapper>
            <VerticalScrollingCardWrapper >{listVolunteerCards}</VerticalScrollingCardWrapper>
        </Auxiliary>
    )
}

export default exampleComponent2