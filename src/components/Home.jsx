import Typewriter from 'typewriter-effect';

const Home = () => {
	return(
          <>
      		<div id="home">
     			<div className="little_about">
     				<p>Hi, I'm <span>Vicky</span></p>
     				<p>and I am a passionate</p>
     				<p><span>
                    <Typewriter
                           options={{
                          strings: ['Developer', 'Frontend Developer','Backend Developer'],
                          autoStart: true,
                          loop: true,
                        }}
                      /></span></p>
                    <div className="btn_container">                       
                     <a href="vicky_resume.pdf" target="_blank" rel="noreferrer" ><button className="btn">Resume</button></a> 
                    </div>

     			</div>
     			<div className="img_container">
     				<img src="images/portfolio.png" alt="portfolio" width="450"/>
     			</div>
     		</div>         	

          </>
		)
}

export default Home;