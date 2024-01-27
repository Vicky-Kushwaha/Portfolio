

const Skills = () => {
	return(
          <>
        <h3 className="heading" id="skills">Skills</h3>
        <div className="skills_container">
   
                <div className="skills">
                    <div><h4>Frontend</h4></div>
                    <div className="skills_logo">
                        <div>
                            <img src="images/html.png" alt="html" width="50"/>
                            <p>Html</p>
                        </div>
                         <div>
                            <img src="images/css.png" alt="css" width="58"/>
                            <p>Css</p>
                        </div>
                         <div>
                            <img src="images/javascript.png" alt="JavaScript" width="50"/>
                            <p>JavaScript</p>
                        </div>
                         <div>
                            <img src="images/react.png" alt="react" width="60"/>
                            <p>ReactJs</p>
                        </div>
                    </div>
                    <div className="proficiency">
                     <h5>Proficiency</h5>
                        <div className="percentage_indicator">
                            <div className="frontend_percentage"></div>
                        </div>
                    </div>    
               </div>

                <div className="skills">
                    <div><h4>Backend</h4></div>
                    <div className="skills_logo">
                        <div>
                            <img src="images/nodejs.png" alt="nodejs" width="50"/>
                            <p>NodeJs</p>
                        </div>
                         <div>
                            <img src="images/express.png" alt="express" width="50"/>
                            <p>Express</p>
                        </div>
                         <div>
                            <img src="images/mongodb.png" alt="mongodb" width="50"/>
                            <p>MongoDb</p>
                        </div>
                        
                    </div>
                    <div className="proficiency">
                     <h5>Proficiency</h5>
                            <div className="percentage_indicator">
                            <div className="backend_percentage"></div>
                        </div>
                    </div>   
               </div>
               
           </div>          	

          </>
		)
}

export default Skills;