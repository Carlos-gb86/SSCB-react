import React, { useState } from 'react';
import './PredictionForm.css';

function PredictionForm({ onPredictionUpdate }) {
  const [H, setH] = useState('');
  const [B, setB] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const data = { data: [parseFloat(H), parseFloat(B)] };

    try {
      const response = await fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setPrediction(result);
      onPredictionUpdate(result);
      console.log(prediction)

    } catch (error) {
      setErrorMessage('Oops! Something went wrong!');
      setPrediction([0,0,0])
    }
  };

  return (
    <div className="prediction-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="H">Input value for H:</label>
        <input
          type="number"
          step="any"
          id="H"
          value={H}
          onChange={(e) => setH(e.target.value)}
          required
        />

        <label htmlFor="B">Input value for B:</label>
        <input
          type="number"
          step="any"
          id="B"
          value={B}
          onChange={(e) => setB(e.target.value)}
          required
        />

        <button type="submit">Predict!</button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {/* {prediction && <div>Prediction: [{prediction.join(', ')}]</div>} */}
    </div>
  );
}

export default PredictionForm;
