import { useState } from 'react';
import AppBar from './components/appBar/appBar';
import Constructor from './components/constructor/constructor';
import './App.css';

function App() {
  const [zoom, setZoom] = useState<number>(100);
  const [center, setCenter] = useState<boolean>(false);

  const handleZoom = (value: number) => {
    setZoom(value);
  };

  const handleLocate = () => {
    setCenter(true);
  };

  return (
    <>
      <AppBar onZoom={handleZoom} onLocate={handleLocate} />
      <Constructor
        zoom={zoom}
        center={center}
        onSetCenter={() => setCenter(false)}
      />
    </>
  );
}

export default App;
