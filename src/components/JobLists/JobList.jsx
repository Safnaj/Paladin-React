import React, { useEffect, useState } from 'react'
import JobListItem from './JobListItem';


const JobList = () => {

    const [jobList, setJobList] = useState([]);
    const [randomList, setRandomList] = useState([]);

    useEffect(() => {
        loadData()
    }, [jobList])

    const loadData = async () => {
        await fetch("https://api.rooster.jobs/core/public/jobs")
            .then((response) => response.json())
            .then((responseJSON) => {
                setJobList(responseJSON.body.results);
                //console.log(responseJSON.body.results);
            });
    }

    function shuffleArray() {
        var array = jobList;
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        setRandomList(array);
        //console.log(randomList);
    }

    return (
        <>
            <div className="container">
                <div className="mt-5 mb-4">
                    <h3>Careers at Paladin</h3>
                </div>
                <button type="button" className="btn btn-primary btn-block" onClick={() => shuffleArray()}>Shuffle Jobs</button>


                {
                    randomList.length === 0 ? (
                        jobList.map((job) => {
                            //console.log(job);
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
                    ) : (
                        randomList.map((job) => {
                            //console.log(job);
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
                    )

                }

            </div>
        </>
    )
}

export default JobList
