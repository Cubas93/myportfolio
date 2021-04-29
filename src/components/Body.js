import React from 'react';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import './App.css';





    class Nav extends React.Component {
constructor(props){
    super(props);
    this.state = {
        isAboutVisible: false,
        isWorkVisible: false,
        isSkillsVisible:false,
      };
      this.handleAbout = this.handleAbout.bind(this);
      this.handleWork = this.handleWork.bind(this);
      this.handleSkills = this.handleSkills.bind(this);
}        
        
        handleAbout(){
            this.setState(state =>({isAboutVisible:!state.isAboutVisible}));
        }
        handleWork(){
            this.setState(state =>({isWorkVisible:!state.isWorkVisible}));
        }
        handleSkills(){
            this.setState(state =>({isSkillsVisible:!state.isSkillsVisible}));
        }
        
      
        render() {
            
            return (
                <div className = 'Nav'>
                <ul>
                    <h2 onClick={this.handleAbout}  class= "title">about me.</h2>
                    {this.state.isAboutVisible ? <About /> : null }
                    <h2 onClick={this.handleWork} class= "title">work.</h2>
                    {this.state.isWorkVisible ? <Work /> : null }
                    <h2 onClick={this.handleSkills} class= "title">skills.</h2>
                    {this.state.isSkillsVisible ? <Skills /> : null }
                    
                </ul>
            </div>
                
             )};
    

} 

    



export default Nav;




