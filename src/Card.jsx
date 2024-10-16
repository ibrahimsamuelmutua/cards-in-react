import robotImage from './assets/robotpic.png'

function Card(){
  return(
      <>

          <div className='card'>
            <img src={robotImage} alt="robot image" />
            <h2>Mr. Bot</h2>
            <p className='paragraph'>Hey there! I'm Mr. Bot, your friendly robot assistant, equipped with sleek metallic armor, glowing blue eyes, and flexible arms that extend out for any task. </p>
          </div>
          <div className='card'>
            <img src={robotImage} alt="robot image" />
            <h2>Mr. Bot</h2>
            <p className='paragraph'>Hey there! I'm Mr. Bot, your friendly robot assistant, equipped with sleek metallic armor, glowing blue eyes, and flexible arms that extend out for any task. </p>
          </div>
          <div className='card'>
            <img src={robotImage} alt="robot image" />
            <h2>Mr. Bot</h2>
            <p className='paragraph'>Hey there! I'm Mr. Bot, your friendly robot assistant, equipped with sleek metallic armor, glowing blue eyes, and flexible arms that extend out for any task. </p>
          </div>
        
      </>


  );
}
export default Card