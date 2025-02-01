import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';

function App() {
  const [num, setNum] = useState('');
  const [output, setOutput] = useState('');
  const refInput = useRef('');

  const handleButtonClick = (value) => {
    setNum((prev) => prev + value);
  };

  useEffect(() => {
    if (refInput.current) {
      refInput.current.value = num;
      refInput.current.focus();
    }
  }, [num]);

  const popMethod = () => {
    setNum((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      if (num === '') return alert('Please enter a number');
      setOutput(eval(num));
    } catch (error) {
      setOutput('Error');
    }
  };

  const clear = () => {
    setNum('');
    setOutput('');
  };

  const sin = () => {
    try {
      setOutput(Math.sin(eval(num)));
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 shadow-md rounded-lg bg-gray-700">
        <div className="flex flex-col">
          <section className="text-center pb-3 mb-3">
            <input
              className="w-full h-10 p-2 border mb-2"
              ref={refInput}
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            <input
              type="text"
              className="h-10 w-full text-right p-2 border"
              readOnly
              value={output}
            />
          </section>
          <div className=' p-2  w-full rounded-sm'>
            <section className="mt-4 flex justify-between">
              <button
                className="w-1/4 bg-blue-500 text-white rounded-lg py-2"
                onClick={sin}
              >
                Sin
              </button>
              <button
                className="w-1/3 bg-red-500 text-white rounded-lg py-2"
                onClick={clear}
              >
                Clear
              </button>
              <button
                className="w-1/3 bg-gray-500 text-white rounded-lg py-2"
                onClick={popMethod}
              >
                Pop
              </button>
            </section>
            <section className="grid grid-cols-4 gap-1">
              <Button text="7" onPress={handleButtonClick} />
              <Button text="8" onPress={handleButtonClick} />
              <Button text="9" onPress={handleButtonClick} />
              <Button text="/" onPress={handleButtonClick} />

              <Button text="4" onPress={handleButtonClick} />
              <Button text="5" onPress={handleButtonClick} />
              <Button text="6" onPress={handleButtonClick} />
              <Button text="*" onPress={handleButtonClick} />

              <Button text="1" onPress={handleButtonClick} />
              <Button text="2" onPress={handleButtonClick} />
              <Button text="3" onPress={handleButtonClick} />
              <Button text="-" onPress={handleButtonClick} />

              <Button text="0" onPress={handleButtonClick} />
              <Button text="." onPress={handleButtonClick} />
              <Button text="=" onPress={calculate} />
              <Button text="+" onPress={handleButtonClick} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
