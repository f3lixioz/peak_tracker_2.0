import React, {Fragment, useEffect, useState} from "react";
import EditDate from "./EditDate"


const ListPeak = () => {
    
    const [peak, setPeak] = useState([]);
    
    //Get all
    const getPeak = async () => {
        try {
            
            const response = await fetch("/peak")
            const jsonData = await response.json()

            setPeak(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    //Delete
    const delPeak = async (id) => {
        try {
            const delPeak = await fetch(`/peak/${id}`, {method: "DELETE"});
            setPeak(peak.filter(peak => peak.peak_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect( () => {
        getPeak();
    }, []); //[] To avoid making multiple requests

    return <Fragment>        
        <table class="table mt-5 text-white text-center">
            <thead>
            <tr>
                <th width="300">Mountain Peaks</th>
                <th width="300">Elevation (ft)</th>
                <th width="300">Summit Date</th>
                <th width="10"></th>
                <th width="10"></th>
            </tr>
            </thead>
            <tbody>
            {peak.map(peak => (
                <tr key={peak.peak_id}>
                    <td>{peak.peak_name}</td>
                    <td>{peak.peak_elv}</td>
                    <td>{peak.bag_date}</td>
                    <td><EditDate peak = {peak}/></td>
                    <td className="w3-middle-align"><button className = "btn btn-danger" onClick={() => delPeak(peak.peak_id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
    </table>
        </Fragment>;
    
};

export default ListPeak;