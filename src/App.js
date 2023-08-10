import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {

  const [value, setValue] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if (/\d/.test(key)) {
      
        setValue(value + key);
      } else if (key === 'Backspace') {
        
        setValue(value.slice(0, -1));
      } else if (key === 'Escape') {
      
        setValue('');
      } else if (key === 'Enter') {
        
        evaluateExpression();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [value]);


  const evaluateExpression = () => {
    try {
      const calculate = new Function(`return ${value}`);
      const calculatedResult = calculate();
      setValue(calculatedResult);
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <form action="">
          <div className='display'>
            <input type='text' defaultValue={value}/>
          </div>

          <div>
            <div>
              <input type='button' value='AC' onClick={() => setValue('')}/>
              <input type='button' value='DE' onClick={() => setValue(value.slice(0, -1))}/>
              <input type='button' value='.' onClick={() => setValue(value + '.')}/>
              <input type='button' value='/' onClick={() => setValue(value + '/')}/>
            </div>

            <div>
              <input type='button' value='7' onClick={() => setValue(value + '7')}/>
              <input type='button' value='8' onClick={() => setValue(value + '8')}/>
              <input type='button' value='9' onClick={() => setValue(value + '9')}/>
              <input type='button' value='*' onClick={() => setValue(value + '*')}/>
            </div>

            <div>
              <input type='button' value='4' onClick={() => setValue(value + '4')}/>
              <input type='button' value='5' onClick={() => setValue(value + '5')}/>
              <input type='button' value='6' onClick={() => setValue(value + '6')}/>
              <input type='button' value='+' onClick={() => setValue(value + '+')}/>
            </div>

            <div>
              <input type='button' value='1' onClick={() => setValue(value + '1')}/>
              <input type='button' value='2' onClick={() => setValue(value + '2')}/>
              <input type='button' value='3' onClick={() => setValue(value + '3')}/>
              <input type='button' value='-' onClick={() => setValue(value + '-')}/>
            </div>

            <div>
              <input type='button' value='00' onClick={() => setValue(value + '00')}/>
              <input type='button' value='0' onClick={() => setValue(value + '0')}/>
              <input type='button' value='=' className='equal' onClick={evaluateExpression}/>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}


export default App;