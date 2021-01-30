import React from 'react'

import SplitGradientCard from '../../components/UI/SplitGradientCard/SplitGradientCard'
import Button from '../../components/UI/Button/Button'
import SearchBar from '../../components/UI/SearchBar/SearchBar'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import ClosedVerticalCard from '../../components/UI/ClosedCards/ClosedVerticalCard/ClosedVerticalCard'
import HorizontalScrollingCardWrapper from '../../components/UI/ScrollingWrappers/HorizontalScrollingCardWrapper/HorizontalScrollingCardWrapper'

import styles from './Homepage.module.scss'

import environmentImage from '../../assets/images/example_environment.jpg'
import healthImage from '../../assets/images/example_health.jpg'

const homepage = props => {
    const itemSelectedHandler = title => console.log("Clicked " + title + "!")

    let listVCards = []
    listVCards.push(<ClosedVerticalCard key="test" title="Prima prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test2" title="Secondaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa prova" subtitle="Oggi è una bella giornata + monologo lunghissimo sul senso della vita" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test3" title="Terza prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test4" title="Quarta prova" subtitle="Oggi è una bella giornata" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)

    return (
        <Auxiliary>
            <SplitGradientCard cardBorder="BorderBottomRight" hasPadding>
                <div className={styles.CardTitle}><h2>Scopri le offerte di volontariato!</h2></div>
                <div className={styles.SearchBarContainer}><SearchBar>Test</SearchBar></div>
                <div className={styles.SearchButtonsContainer}>
                    <span><Button btnStyle="White">Tutto</Button></span>
                    <span><Button btnStyle="Orange">Enti</Button></span>
                    <span><Button btnStyle="Pink">Eventi</Button></span>
                </div>
            </SplitGradientCard>

            <div className={[styles.ScrollbarTitle, styles.ScrollbarTitleOrg].join(" ")}>
                <h2>Enti</h2>
                <span>scopri di più</span>
            </div>
            <HorizontalScrollingCardWrapper>{listVCards}</HorizontalScrollingCardWrapper>

            <div className={[styles.ScrollbarTitle, styles.ScrollbarTitleEvent].join(" ")}>
                <h2>Eventi</h2>
                <span>scopri di più</span>
            </div>
            <HorizontalScrollingCardWrapper>{listVCards}</HorizontalScrollingCardWrapper>

        </Auxiliary>
    )
}

export default homepage