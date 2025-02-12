const ShowTimer = (props) => {
const {hourse, 
    minutes, 
    seconds, 
    isPaused, 
    handlePause, 
    handleReset, 
    handleResume
} = props;

return (<div className='show-container'>
    <div className='timer-box' >
      <div>{hourse < 10 ? `0${hourse}` : hourse}</div>
      <span>:</span>
      <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
      <span>:</span>
      <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
    </div>

      <div className='action-box'>
        { 
          !isPaused && <button 
          className='timer-button' 
          onClick={handlePause}>Pause</button>
        }
           { 
            isPaused && <button 
            className='timer-button' 
            onClick={handleResume}>Resume</button>
          }
        <button className='timer-button' onClick={handleReset}>Reset</button>
      </div>
    </div>);


}
export default ShowTimer;
