import React from 'react';
import { calculatedMean, calculatedMedian, calculatedMode } from '../../functions';
import './index.css';

function Table({ propertyName, data }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Measure</th>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <th key={classes?.alcohol}>{`Class ${classes?.alcohol}`}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{`${propertyName} Mean`}</td>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <td key={classes?.alcohol}>{calculatedMean(classes?.dataSet, propertyName)}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    <td> {`${propertyName} Median`}</td>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <td key={classes?.alcohol}>{calculatedMedian(classes?.dataSet, propertyName)}</td>
                            )
                        })
                    }
                </tr>
                <tr>
                    <td>{`${propertyName} Mode`}</td>
                    {
                        data && data?.length > 0 && data?.map((classes) => {
                            return (
                                <td key={classes?.alcohol}>{calculatedMode(classes?.dataSet, propertyName)}</td>
                            )
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default Table