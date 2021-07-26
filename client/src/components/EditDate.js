import React, {Fragment, useState} from "react";

const EditDate = ({peak}) => {
  console.log(peak);
  const [bag_date, setDate] = useState(peak.bag_date);

  const onSubmitForm = async(e) => {
      e.preventDefault();

      try {
          const body = {bag_date};
          const response = await fetch(`http://localhost:5000/peak/${peak.peak_id}`,{
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
          });
          window.location = "/";
      } catch (err) {
          console.error(err.message);
      };
  };

  return <Fragment>

      <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target={`#id${peak.peak_id}`}>Edit</button>
      <div class="modal" id={`id${peak.peak_id}`} onClick={() => setDate(bag_date)}>
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h4 class="modal-title">Edit Date</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setDate(bag_date)}></button>
                  </div>

                  <div className="modal-body">
                      <input type="text" className="form-control" placeholder="YYYY-MM-DD" onChange={e => setDate(e.target.value)}/>
                  </div>

                  <div class="modal-footer">
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={e => onSubmitForm(e)}>Confirm</button>
                      <button type="button" class="btn btn-danger"  data-bs-dismiss="modal" onClick={() => setDate(bag_date)}>Exit</button>
                  </div>
              </div>
          </div>
      </div>
  </Fragment>;
};

export default EditDate;