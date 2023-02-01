import './App.css';
import kuva3 from './kuva3.png';

function App() {
  return (
    <div className="App">
<div class="header">
  <h1>How to mask old skin</h1>
</div>

<div class="row">
  <div class="column side">
    <img className='kuva' src={kuva3}></img>
  </div>
  
  <div class="column middle">
    <h3>To disguise older skin and address its issues, consider these steps:</h3>
    <ol className='lista'>
      <li>Cleanse the skin to prepare for masking.</li>
      <li>Use a light exfoliant to remove dead skin cells and smooth the skin's surface.</li>
      <li>Apply a concealer or color corrector to target specific aging issues, such as dark spots or fine</li>
      <li>Blend well to ensure a natural look.</li>
      <li>Finish with a light layer of foundation or powder.</li>
    </ol>
    <h3>Problems with disguising older skin include:</h3>
    <ol className='lista'>
      <li>Poor application technique can make the masking look unnatural.</li>
      <li>Choosing the wrong product or color can draw attention to aging issues rather than disguise them.</li>
      <li>Overuse of heavy makeup can accentuate fine lines and wrinkles.</li>
      <li>Not taking care of the skin underneath the makeup can lead to more aging issues.</li>
      <li>Neglecting to cleanse and moisturize properly can lead to skin irritation and breakouts.</li>
    </ol>

  </div>
  <div class="column side">
    <img className='kuva' src={kuva3}></img>
  </div>
</div>
  <footer class="footer">
    <p>Keywords: older, masking, issues</p>
  </footer>
    </div>
  );
}

export default App;
