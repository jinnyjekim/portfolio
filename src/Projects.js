import React from "react";
import PropTypes from "prop-types";

function Projects({year, title, summary, thumbnail}){
    return(
        <>            
            <li>
                <a href="http://wwww.naver.com"> 
                    <img src={thumbnail} alt={title} title={title}/>
                    <h3>{title}</h3>
                    <p className="summary">{summary.slice(0,140)}</p>
                </a>
            </li>
        </>
    )
}

Projects.propTypes = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}

export default Projects;