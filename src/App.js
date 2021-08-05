import './App.scss'
import Section1 from './components/section_1/index.js'
import Section2 from './components/section_2/index.js'
import Section3 from './components/section_3/index.js'
function App(props) {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;