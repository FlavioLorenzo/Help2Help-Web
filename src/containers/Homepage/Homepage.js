import React, { useState } from 'react'

import SplitGradientCard from '../../components/UI/SplitGradientCard/SplitGradientCard'
import Button from '../../components/UI/Button/Button'
import SearchBar from '../../components/UI/SearchBar/SearchBar'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import ClosedVerticalCard from '../../components/UI/ClosedCards/ClosedVerticalCard/ClosedVerticalCard'
import HorizontalScrollingCardWrapper from '../../components/UI/ScrollingWrappers/HorizontalScrollingCardWrapper/HorizontalScrollingCardWrapper'

import styles from './Homepage.module.scss'

import environmentImage from '../../assets/images/example_environment.jpg'
import healthImage from '../../assets/images/example_health.jpg'

const Homepage = props => {
    const [searchInput, setSearchInput] = useState('')
    const [currentView, setCurrentView] = useState('all')

    const itemSelectedHandler = title => console.log("Clicked " + title + "!")

    let listVCards = []
    listVCards.push(<ClosedVerticalCard key="test" title="Prima prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test2" title="Secondaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa prova" subtitle="Oggi è una bella giornata + monologo lunghissimo sul senso della vita" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test3" title="Terza prova" subtitle="Lorem ypsylon" imageSrc={environmentImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)
    listVCards.push(<ClosedVerticalCard key="test4" title="Quarta prova" subtitle="Oggi è una bella giornata" imageSrc={healthImage} itemSelected={itemSelectedHandler}></ClosedVerticalCard>)

    const onSearchBarChanged = (event) => {
        console.log(event.target)
        setSearchInput(event.target.value)
    }

    const onSearchBarClicked = () => {
        console.log(searchInput)
    }

    const viewButtonClicked = (buttonValue) => {
        setCurrentView(buttonValue)
    }

    return (
        <Auxiliary>
            <SplitGradientCard cardBorder="BorderBottomRight" hasPadding>
                <div className={styles.CardTitle}><h2>Scopri le offerte di volontariato!</h2></div>
                <div className={styles.SearchBarContainer}>
                    <SearchBar 
                        placeholder="test" 
                        value={searchInput}
                        clicked={onSearchBarClicked} 
                        changed={event => {onSearchBarChanged(event)}}/>
                </div>
                <div className={styles.SearchButtonsContainer}>
                    <span>
                        <Button 
                            btnStyle={(currentView === 'all') ? "White" : "LightBlue"} 
                            clicked={() => viewButtonClicked('all')}>
                                Tutto
                        </Button>
                    </span>
                    <span>
                        <Button 
                            btnStyle={(currentView === 'org') ? "White" : "Orange"} 
                            clicked={() => viewButtonClicked('org')}>
                                Enti
                        </Button>
                    </span>
                    <span>
                        <Button 
                            btnStyle={(currentView === 'evt') ? "White" : "Pink"} 
                            clicked={() => viewButtonClicked('evt')}>
                                Eventi
                        </Button>
                    </span>
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

export default Homepage