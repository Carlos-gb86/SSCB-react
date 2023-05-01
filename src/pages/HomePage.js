import React from 'react';
import HeroImage from '../components/HeroImage';
import InteractiveAreaChart from '../components/InteractiveAreaChart';
import DynamicAreaChart from '../components/DynamicAreaChart';
import set1 from '../data/co2_set1.json';
import set2 from '../data/co2_set2.json';
import geometry from '../data/geometry.json';
import set2_raw from '../data/set2_raw.json';

import './HomePage.css'

function Home() {
  return (
    <div className='gradient-background'>
      <HeroImage />
      <div className="content tc">
        <h2 className="f2">The Background Data</h2>
        <p className="mw7 center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor fringilla purus, vitae cursus augue ullamcorper id. Quisque tincidunt nisl vitae ultrices consequat. Nulla facilisi. Aliquam erat volutpat. Nunc id orci eu arcu lacinia malesuada non a ligula. Ut venenatis, ex nec bibendum bibendum, mauris augue malesuada velit, et scelerisque mi nisi vitae libero.
        </p>
      </div>
        <section className="image-section w-100 pa4">
          <InteractiveAreaChart dataset={set1} title="Carbon Emissions Set1"/>
          <InteractiveAreaChart dataset={set2} title="Carbon Emissions Set2"/>
          <DynamicAreaChart dataset={set2_raw} geometry={geometry}/>
        </section>
    </div>
  );
}

export default Home;