import React, { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import Histogram from '../components/Histogram';
import './Predictions.css';

function Predictions() {
  const [predictionData, setPredictionData] = useState(null);

  const handlePredictionUpdate = (data) => {
    setPredictionData(data);
  };

  return (
    <div className="predictions gradient-background">
      <h2 className="f2">Predictions</h2>
      <PredictionForm onPredictionUpdate={handlePredictionUpdate} />
      {predictionData && (
        <div className="chart-container" style={{ width: '60%', margin: 'auto' }}>
          <Histogram data={predictionData} />
        </div>
      )}
    </div>
  );
}

export default Predictions;
