import './App.css';
import CertificationDisplay from './components/Certification.js';
import EducationDisplay from './components/Education.js';
import ExperienceDisplay from './components/Experience.js'; 
import ProfileDisplay from './components/Profile.js';
import SkillsDisplay from './components/Skills.js';

function App() {
  return (
    <div className="App">
      <ProfileDisplay></ProfileDisplay>
      <EducationDisplay></EducationDisplay>
      <CertificationDisplay></CertificationDisplay>
      <ExperienceDisplay></ExperienceDisplay>
      <SkillsDisplay></SkillsDisplay>
    </div>
  );
}

export default App;
