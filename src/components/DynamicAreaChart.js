import React, { useState, useEffect } from 'react';
import InteractiveAreaChart from './InteractiveAreaChart';
import './DynamicAreaChart.css';
import {getMaxProfileHeightVMVN, getMaxProfileHeightVRVT, getMaxProfileHeightVC} from '../utils/getMaxHeight';
import {createHistCurve} from '../utils/createHistogramInput';


const DynamicAreaChart = ({ dataset, geometry }) => {
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(2);
  const [data, setData] = useState(null);

  const filterData = (dataset, geometry, width, height) => {
    let gm = geometry.vm;
    let gn = geometry.vn;
    let gr = geometry.vr;
    let gt = geometry.vt;
    let gc = geometry.vc;

    // Initialize the filteredDataset object
    let filteredDataset = {
        VM: [],
        VN: [],
        VR: [],
        VT: [],
        VC: []
    };
    
    // Filter the Profile array and return corresponding CO2 values
    filteredDataset.VM = dataset.vm.Profile.reduce((result, str, idx) => {
        // Remove the first two characters and convert the remaining string to an integer
        const ii = parseInt(str.slice(2)) - 1;

        if (height < getMaxProfileHeightVMVN(gm.C5[ii], gm.C6[ii], gm.C7[ii], gm.C8[ii], gm.C9[ii], gm.C10[ii], gm.C1[ii], width)) {
        // Add the CO2 value to the result array if the condition is met
        result.push(Math.round(dataset.vm.CO2[idx] / 1000));
        }
        return result;
    }, []);

    filteredDataset.VN = dataset.vn.Profile.reduce((result, str, idx) => {
        // Remove the first two characters and convert the remaining string to an integer
        const ii = parseInt(str.slice(2)) - 1;

        if (height < getMaxProfileHeightVMVN(gn.C5[ii], gn.C6[ii], gn.C7[ii], gn.C8[ii], gn.C9[ii], gn.C10[ii], gn.C1[ii], width)) {
        // Add the CO2 value to the result array if the condition is met
        result.push(Math.round(dataset.vn.CO2[idx] / 1000));
        }
        return result;
    }, []);

    filteredDataset.VR = dataset.vr.Profile.reduce((result, str, idx) => {
        // Remove the first two characters and convert the remaining string to an integer
        const ii = parseInt(str.slice(2)) - 1;

        if (height < getMaxProfileHeightVRVT(gr.C5[ii], gr.C6[ii], gr.C7[ii], gr.C8[ii], gr.C9[ii], gr.C10[ii], gr.C1[ii], width)) {
        // Add the CO2 value to the result array if the condition is met
        result.push(Math.round(dataset.vr.CO2[idx] / 1000));
        }
        return result;
    }, []);

    filteredDataset.VT = dataset.vt.Profile.reduce((result, str, idx) => {
        // Remove the first two characters and convert the remaining string to an integer
        const ii = parseInt(str.slice(2)) - 1;

        if (height < getMaxProfileHeightVRVT(gt.C5[ii], gt.C6[ii], gt.C7[ii], gt.C8[ii], gt.C9[ii], gt.C10[ii], gt.C1[ii], width)) {
        // Add the CO2 value to the result array if the condition is met
        result.push(Math.round(dataset.vt.CO2[idx] / 1000));
        }
        return result;
    }, []);

    filteredDataset.VC = dataset.vc.Profile.reduce((result, str, idx) => {
        // Remove the first two characters and convert the remaining string to an integer
        const ii = parseInt(str.slice(2)) - 1;

        if (height < getMaxProfileHeightVC(gc.C4[ii], width)) {
        // Add the CO2 value to the result array if the condition is met
        result.push(Math.round(dataset.vc.CO2[idx] / 1000));
        }
        
        return result;
    }, []);

    const resultMapping = {
        VM: 'A',
        VN: 'B',
        VR: 'C',
        VT: 'D',
        VC: 'E'
      };
      
      const result = {};
      
      Object.keys(filteredDataset).forEach((key) => {
        const binWidth = (key === 'VN' || key === 'VC') ? 3 : 5;
        const histData = createHistCurve(filteredDataset[key],binWidth);
        const mappedKey = resultMapping[key];
        result[mappedKey] = {
          x: histData.edges,
          y: histData.N
        };
      });
      console.log(height)
    return result;
  };


  useEffect(() => {
    if (!dataset) return;

    const processedData = filterData(dataset, geometry, width, height);
    setData(processedData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  if (!data) {
    return (
      <div className="loader-container">
        <span className="loader">L &nbsp; ading</span>
      </div>
    );
  } else {
    
    return (
        <div className="dynamic-interactive-area-chart">
        <InteractiveAreaChart dataset={data} title="Carbon Emissions Set3"/>
        <div className="sliders">
            <div className="slider-container">
            <label htmlFor="width">Width: {width} m</label>
            <input
                type="range"
                id="width"
                name="width"
                min="2"
                max="5"
                step="0.1"
                value={width}
                onChange={handleWidthChange}
            />
            </div>
            <div className="slider-container">
            <label htmlFor="height">Height: {height} m</label>
            <input
                type="range"
                id="height"
                name="height"
                min="2"
                max="3"
                step="0.1"
                value={height}
                onChange={handleHeightChange}
            />
            </div>
        </div>
        </div>
    );
    }
};

export default DynamicAreaChart;
