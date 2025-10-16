import  { useEffect, useRef, useState } from 'react';
import Button from './Button';

function App() {
  const [num, setNum] = useState('');
  const [output, setOutput] = useState('');
  const [memory, setMemory] = useState(0);
  const [showMemory, setShowMemory] = useState(false);
  const refInput = useRef('');

  const handleButtonClick = (value) => {
    setNum((prev) => prev + value);
  };

  const handlePowerClick = () => {
    setNum((prev) => prev + '**');
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
      if (num === '') return alert('Please enter an expression');
      const result = eval(num);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const clear = () => {
    setNum('');
    setOutput('');
  };

  const clearAll = () => {
    setNum('');
    setOutput('');
    setMemory(0);
    setShowMemory(false);
  };

  const sin = () => {
    try {
      const result = Math.sin(eval(num) * Math.PI / 180);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const cos = () => {
    try {
      const result = Math.cos(eval(num) * Math.PI / 180);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const tan = () => {
    try {
      const result = Math.tan(eval(num) * Math.PI / 180);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const log = () => {
    try {
      const result = Math.log10(eval(num));
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const ln = () => {
    try {
      const result = Math.log(eval(num));
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const sqrt = () => {
    try {
      const result = Math.sqrt(eval(num));
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const square = () => {
    try {
      const val = eval(num);
      setNum(val + '**2');
    } catch (error) {
      setOutput('Error');
    }
  };

  const percentage = () => {
    try {
      const result = eval(num) / 100;
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  const memoryAdd = () => {
    try {
      const val = output !== '' ? parseFloat(output) : eval(num);
      setMemory(memory + val);
      setShowMemory(true);
    } catch (error) {
      alert('Invalid expression');
    }
  };

  const memorySubtract = () => {
    try {
      const val = output !== '' ? parseFloat(output) : eval(num);
      setMemory(memory - val);
      setShowMemory(true);
    } catch (error) {
      alert('Invalid expression');
    }
  };

  const memoryRecall = () => {
    setNum(memory.toString());
  };

  const memoryClear = () => {
    setMemory(0);
    setShowMemory(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl rounded-3xl p-6 border border-gray-700">
          <h1 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Scientific Calculator
          </h1>
          
          <div className="flex flex-col mb-4">
            <div className="mb-2 flex justify-between items-center">
              {showMemory && (
                <span className="text-xs text-purple-400 font-semibold">M: {memory}</span>
              )}
            </div>
            <input
              className="w-full h-12 px-4 mb-2 rounded-xl bg-gray-800 text-white text-right text-lg border-2 border-gray-700 focus:border-purple-500 focus:outline-none transition-all"
              ref={refInput}
              value={num}
              onChange={(e) => setNum(e.target.value)}
              placeholder="0"
            />
            <input
              type="text"
              className="h-14 w-full text-right px-4 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white text-2xl font-bold border-2 border-purple-500"
              readOnly
              value={output}
              placeholder="Result"
            />
          </div>

          <div className="space-y-2">
            <section className="grid grid-cols-4 gap-2 mb-2">
              <button
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg py-3 font-semibold shadow-lg transition-all transform hover:scale-105"
                onClick={clearAll}
              >
                AC
              </button>
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg py-3 font-semibold shadow-lg transition-all transform hover:scale-105"
                onClick={clear}
              >
                C
              </button>
              <button
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-lg py-3 font-semibold shadow-lg transition-all transform hover:scale-105"
                onClick={popMethod}
              >
                ←
              </button>
              <button
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg py-3 font-semibold shadow-lg transition-all transform hover:scale-105"
                onClick={percentage}
              >
                %
              </button>
            </section>

            <section className="grid grid-cols-4 gap-2 mb-2">
              <Button text="sin" onPress={sin} variant="scientific" />
              <Button text="cos" onPress={cos} variant="scientific" />
              <Button text="tan" onPress={tan} variant="scientific" />
              <Button text="√" onPress={sqrt} variant="scientific" />
            </section>

            <section className="grid grid-cols-4 gap-2 mb-2">
              <Button text="log" onPress={log} variant="scientific" />
              <Button text="ln" onPress={ln} variant="scientific" />
              <Button text="x²" onPress={square} variant="scientific" />
              <Button text="^" onPress={handlePowerClick} variant="operator" />
            </section>

            <section className="grid grid-cols-4 gap-2 mb-2">
              <Button text="M+" onPress={memoryAdd} variant="memory" />
              <Button text="M-" onPress={memorySubtract} variant="memory" />
              <Button text="MR" onPress={memoryRecall} variant="memory" />
              <Button text="MC" onPress={memoryClear} variant="memory" />
            </section>

            <section className="grid grid-cols-4 gap-2">
              <Button text="7" onPress={handleButtonClick} variant="number" />
              <Button text="8" onPress={handleButtonClick} variant="number" />
              <Button text="9" onPress={handleButtonClick} variant="number" />
              <Button text="/" onPress={handleButtonClick} variant="operator" />

              <Button text="4" onPress={handleButtonClick} variant="number" />
              <Button text="5" onPress={handleButtonClick} variant="number" />
              <Button text="6" onPress={handleButtonClick} variant="number" />
              <Button text="*" onPress={handleButtonClick} variant="operator" />

              <Button text="1" onPress={handleButtonClick} variant="number" />
              <Button text="2" onPress={handleButtonClick} variant="number" />
              <Button text="3" onPress={handleButtonClick} variant="number" />
              <Button text="-" onPress={handleButtonClick} variant="operator" />

              <Button text="0" onPress={handleButtonClick} variant="number" />
              <Button text="." onPress={handleButtonClick} variant="number" />
              <Button text="(" onPress={handleButtonClick} variant="number" />
              <Button text=")" onPress={handleButtonClick} variant="number" />
            </section>

            <section className="grid grid-cols-2 gap-2 mt-2">
              <button
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg py-3 font-bold text-lg shadow-lg transition-all transform hover:scale-105"
                onClick={calculate}
              >
                =
              </button>
              <Button text="+" onPress={handleButtonClick} variant="operator" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;