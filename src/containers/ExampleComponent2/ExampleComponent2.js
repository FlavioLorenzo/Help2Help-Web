import React from 'react'

import ImageCard from '../../components/UI/ImageCard/ImageCard'
import SplitGradientCard from '../../components/UI/SplitGradientCard/SplitGradientCard'
// import FullGradientCard from '../../components/UI/FullGradientCard/FullGradientCard'
import ClosedVerticalCard from '../../components/UI/ClosedVerticalCard/ClosedVerticalCard'
import ClosedHorizontalCard from '../../components/UI/ClosedHorizontalCard/ClosedHorizontalCard'
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

    return (
        <Auxiliary>
            <ImageCard cardBorder="BorderBottomRight" hasPadding imageSrc={environmentImage} height="200px"></ImageCard>
            <SplitGradientCard cardBorder="BorderBottomRight" hasPadding></SplitGradientCard>
            <HorizontalScrollingCardWrapper>{listVCards}</HorizontalScrollingCardWrapper>
            <VerticalScrollingCardWrapper >{listHCards}</VerticalScrollingCardWrapper>
        </Auxiliary>
    )
}

export default exampleComponent2