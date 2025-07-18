import React, { useState } from 'react';
import { JobListsEmployment } from './JobListsEmployment';
import CardsJobsEmp from './CardsJobsEmp';
import './Jobs.css';
import searchIcon from "./images/search.png";
import './index.css'

const JobsCardsListsEmp = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredJobs = JobListsEmployment.filter((job) => {
        const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const skillsMatch = job.skills.toLowerCase().includes(searchTerm.toLowerCase());
        return titleMatch || skillsMatch;
    });

    return (
        <div>
            <h2 style={{fontFamily:"Arial, sans-serif",fontSize:"60px", marginTop:"95px", marginBottom:"-20px", display:"flex", justifyContent:"center", textShadow: "2px 2px 3px #000000", fontWeight:"normal"}}>FEATURED DEVS</h2>
            <div className="search-container">
                <input
                    type="text"
                    style={{ 
                        backgroundImage: `url(${searchIcon})`,
                        backgroundPosition: "right 10px center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "40px 40px",
                        paddingRight: "50px"
                    }}
                    placeholder="Search for job titles or skills"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="Jobrow">
                {filteredJobs.map((job) => (
                    <div className="col-md-4" key={job.id} style={{marginLeft:"180px", marginBottom:"100px"}}>
                        <CardsJobsEmp {...job} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobsCardsListsEmp;