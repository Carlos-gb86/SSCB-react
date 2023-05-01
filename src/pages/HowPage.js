import React from 'react';
import Card from '../components/Card';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className="how-it-works gradient-background">
      <h2 className="f2">How It Works</h2>
      <Card
        src="/logo.png"
        title="Step 1"
        description="sit esse id amet ullamco sunt exercitation excepteur 
        ullamco eiusmod enim velit ex magna ex pariatur exercitation tempor 
        ut est sunt id dolor voluptate irure pariatur Lorem duis pariatur duis 
        aliqua sunt irure culpa quis duis nulla aute cillum incididunt fugiat
         non cillum ut sint reprehenderit consectetur ipsum proident tempor 
         fugiat duis Lorem sint consectetur laborum sit tempor fugiat sit incididunt 
         labore aliqua dolore quis et exercitation dolor culpa sint irure ut 
         aute reprehenderit duis deserunt minim laborum ipsum irure ipsum 
         excepteur pariatur voluptate anim tempor dolor aliqua ullamco sit 
         non adipisicing elit id nisi laborum fugiat adipisicing laboris qui"
        imageLeft={true}
      />
      <div class="container">
        <img className='diagram2' src="./diagram2.png" alt="Set-based Design diagram" />
        <div class="overlay-container" id="overlay1">
          <div class="tooltip">SET 1 includes all the solutions</div>
        </div>
        
        <div class="overlay-container" id="overlay2">
          <div class="tooltip">SET 2 includes only the solutions that fulfill the safety and performance requirements</div>
        </div>

        <div class="overlay-container" id="overlay3">
          <div class="tooltip">SET 3 filters out solutions that do not meet the geometrical specifications</div>
        </div>

        <div class="overlay-container" id="overlay4">
          <div class="tooltip">OPT includes only the optimal solution for each profile</div>
        </div>
      </div>
      <Card
        src="/logo.png"
        title="Step 2"
        description="sit esse id amet ullamco sunt exercitation excepteur 
        ullamco eiusmod enim velit ex magna ex pariatur exercitation tempor 
        ut est sunt id dolor voluptate irure pariatur Lorem duis pariatur duis 
        aliqua sunt irure culpa quis duis nulla aute cillum incididunt fugiat
         non cillum ut sint reprehenderit consectetur ipsum proident"
        imageLeft={false}
      />
      <Card
        src="/logo.png"
        title="Step 3"
        description="This is the description for step 3."
        imageLeft={true}
      />
    </div>
  );
}

export default HowItWorks;
