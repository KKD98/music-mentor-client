import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import { Helmet } from 'react-helmet-async';
import ExtraSection from '../ExtraSection/ExtraSection';

const HomePage = ({theme}) => {
    
    return (
        <div>
        <Helmet>
            <title>Home | MusicMentor</title>
        </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default HomePage;