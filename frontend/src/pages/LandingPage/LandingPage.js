// src/pages/LandingPage.js
import React from 'react';
import FeaturedGrid from '../../components/Elements/FeatureGrid'
import { GridHoverHero } from '../../components/UI/Hero'
import FAQ from '../../components/Elements/FAQ'

const LandingPage = () => {

  return (
    <div>
      <GridHoverHero />
      
      <FeaturedGrid />

      <FAQ />
    </div>
  );
};

export default LandingPage;
