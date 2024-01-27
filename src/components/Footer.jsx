import "./css/footer.css";

const Footer = () => {
	return(
       <>
       	<footer>
       	  <div className="scroll_home">
       	  	<div>
             <a href="#navbar"><img src="images/uparrow.png" alt="up arrow" width="50" /></a> 
            </div>
       	  </div>
       	  <div className="contact_logo">
       	  	<div>
               <a href="https://github.com/Vicky-Kushwaha?tab=repositories" target="_blank" rel="noopener noreferrer"><img src="images/github.png" alt="github" width="50" /></a>  
            </div>
       	  	<div>
               <a href="https://www.linkedin.com/in/vicky-kushwaha-352a212ab/" rel="noopener noreferrer" target="_blank" ><img src="images/linkdin.png" alt="linkdin" width="50" /></a>  
            </div>
       	  	<div className="email">
               <a href="mailto:muzvickykerma@gmail.com" target="_blank" rel="noopener noreferrer" ><img src="images/email.png" alt="email" width="50" /></a>  
            </div>
       	  </div>
       	  <p className="copy_right">VICKY KUSHWAHA &copy; 2024</p>	
       	</footer>
       </>
  );
}

export default Footer;