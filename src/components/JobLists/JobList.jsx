import React, { useEffect, useState } from 'react'
import JobListItem from './JobListItem';


const JobList = () => {

    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        await fetch("https://api.rooster.jobs/core/public/jobs")
            .then((response) => response.json())
            .then((responseJSON) => {
                setJobList(responseJSON.body.results);
                //console.log(responseJSON.body.results);
            });
    }

    return (
        <>
            <div className="container">
                <div className="mt-5 mb-4">
                    <h3>Careers at Paladin</h3>
                </div>
                <button type="button" className="btn btn-primary btn-block">Shuffle Jobs</button>


                {
                    jobList.map((job) => {
                        console.log(job);
                        return (
                            <JobListItem
                                key={job.id}
                                title={job.title}
                                company={job.company.name}
                                desc={job.subclass}
                                job_type={job.job_type}
                                location={job.location}
                                img={job.company.logo_url}
                                date={job.created_at}
                            />
                        )
                    })
                }

            </div>
        </>
    )
}

export default JobList
