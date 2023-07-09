import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import { Helmet } from 'react-helmet-async';
import ExtraSection from '../ExtraSection/ExtraSection';
import ChooseUsSection from '../ChooseUsSection/ChooseUsSection';
import QuickFacts from '../QuickFacts/QuickFacts';
import Reviews from '../Reviews/Reviews';
import MusicalInstruments from '../MusicalInstruments/MusicalInstruments';

const HomePage = ({theme}) => {
    
    return (
        <div>
        <Helmet>
            <title>Home | MusicMentor</title>
        </Helmet>
            <Banner></Banner>
            <ChooseUsSection></ChooseUsSection>
            <QuickFacts></QuickFacts>
            <MusicalInstruments></MusicalInstruments>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;