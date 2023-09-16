import React, { useEffect, useState } from 'react';
import dataSet from '../../dataSet.json';
import Table from '../Table';
import './index.css';

function Home() {
    const [classData, setClassData] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState('Flavanoids');

    useEffect(() => {
        const classObject = {};
        dataSet.forEach((entry) => {
            // looping through the dataSet to find unique classes
            const alcohol = entry["Alcohol"];
            if (!classObject[alcohol]) {
                classObject[alcohol] = [entry];
            } else {
                classObject[alcohol].push(entry);
            }
            // adding the Gamma property to the given dataset
            const gamma = (entry["Ash"] * entry["Hue"]) / entry["Magnesium"];
            entry["Gamma"] = gamma;
        });
        // sorting dataset according to unique classes created
        const classArray = Object.entries(classObject).map(([alcohol, dataSet]) => ({
            alcohol,
            dataSet,
        }));
        setClassData(classArray);
    }, []);

  return (
    <div className='container'>
            <h2>Select Property</h2>
            <div className='select'>
                <select onChange={(e) => setSelectedProperty(e.target.value)}>
                    <option value="Flavanoids">Flavanoids</option>
                    <option value="Gamma">Gamma</option>
                </select>
            </div>
            <Table 
                propertyName={selectedProperty}
                data={classData}
            />
        </div>
  )
}

export default Home