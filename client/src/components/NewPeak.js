import React, {Fragment, useState} from "react";

const NewPeak = () => {

    const [peak_name, setPeakDetails] = useState("");
    
    const onSubmitForm = async(e) => {
        e.preventDefault();
        
        try {
            //RAN INTO PROBLEMS HERE.. UNABLE TO FIGURE OUT HOW TO REFERENCE MULTIPLE FIELDS FROM THE STATE, I.E. peak.peak_name, peak.peak_elv, etc 
            const body_name = {peak_name};
            const response = await fetch("/peak", {
                method: "Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body_name),
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        };
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5 text-white">🧗‍♂️Peak Tracker🗻</h1>
            <form className= "d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type = "text" 
                    className="form-control" 
                    placeholder="Peak Name" 
                    onChange={e => setPeakDetails(e.target.value)} //targets the input and gets resulting value
                />

                {/* <input 
                    type = "text" 
                    className="form-control" 
                    value={peak.peak_elv} 
                    onChange={e => setPeakDetails(e.target.value)} //targets the input and gets resulting value
                /> */}

                <button className = "btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}


export default NewPeak;