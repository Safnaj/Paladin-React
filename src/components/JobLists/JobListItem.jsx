import React from "react";

function JobListItem(props) {
    return (
        <div className="rooster-job mt-4 px-4 py-4">
            <div className='row'>
                <div className='col-1'>
                    <img src={props.img} height="60" alt="Logo" />
                </div>
                <div className='col-11'>
                    <h6 className="pull-right"><i className="fa fa-clock-o">&nbsp;</i>{getDateDiff(props.date)} Days Ago</h6>
                    <h3>{props.title}</h3>
                    <h5 className='company'>{props.company}</h5>
                    <div className="data-row mt-6">
                        <p className="inline-value mt-3">{props.desc}</p>
                        <div className="mt-4">
                            <span className="fa fa-briefcase mr-5"><i className="ml-2">{props.job_type}</i></span>
                            <span className="fa fa-globe"><i className="ml-2">{props.location}</i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getDateDiff(timestamp) {
    var today = new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2);
    const date = timestamp.substr(0, 10);

    var count = new Date(today) - new Date(date)
    var diffDays = parseInt((count) / (1000 * 60 * 60 * 24), 10);
    //console.log(diffDays);
    return diffDays;

}

export default JobListItem;