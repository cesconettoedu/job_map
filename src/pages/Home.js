import styled from 'styled-components';
import 'animate.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Wrapper>
      <div className="job">
        <div> job.map(</div>
        <Link to="/register" className="logsig">Login/Signup</Link>
        <div>)</div>
      </div>
    </Wrapper>

  )
}

const Wrapper = styled.section`
  .job {
    margin: 0;
    padding: 0;
    color: antiquewhite;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 5vw;
    width: 100%;
    height: 95vh;  
    
    animation: zoomInDown; 
    animation-duration: 2s;
  }

 .logsig {
    border-radius: 0.5rem;
    background: rgb(26 26 26);
    font-size: 2vw;
    margin-top: 0.3em;
    color: antiquewhite;
    position: relative;
    z-index: 0;
  } 

  .logsig:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }

  .logsig:active {
    color: #000
  }

  .logsig:active:after {
    background: transparent;
  }

  .logsig:hover:before {
    opacity: 1;
  }

  .logsig:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  } 
`
export default Home