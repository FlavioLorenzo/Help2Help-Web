import React from 'react'

import ImageCard from '../../components/UI/ImageCard/ImageCard'
import SplitGradientCard from '../../components/UI/SplitGradientCard/SplitGradientCard'
import FullGradientCard from '../../components/UI/FullGradientCard/FullGradientCard'
import ClosedVerticalCard from '../../components/UI/ClosedVerticalCard/ClosedVerticalCard'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

import environmentImage from '../../assets/images/example_environment.jpg'
import healthImage from '../../assets/images/example_health.jpg'
import HorizontalScrollingCardHolder from '../HorizontalScrollingCardHolder/HorizontalScrollingCardHolder'

const exampleComponent2 = props => {

    const itemSelectedHandler = title => console.log("Clicked " + title + "!")

    let listCards = []
    listCards.push(<ClosedVerticalCard key="test" title="Prima prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listCards.push(<ClosedVerticalCard key="test2" title="Seconda prova" subtitle="Oggi è una bella giornata" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)

    return (
        <Auxiliary>
            <ImageCard cardBorder="BorderBottomRight" hasPadding imageSrc={environmentImage} height="200px"></ImageCard>
            <SplitGradientCard cardBorder="BorderBottomRight" hasPadding></SplitGradientCard>
            <HorizontalScrollingCardHolder items={listCards}></HorizontalScrollingCardHolder>
            <div>Hello 2</div>
        </Auxiliary>
    )
}

export default exampleComponent2