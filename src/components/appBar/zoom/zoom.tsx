import React, { useState, ChangeEvent } from 'react';

interface IProps {
  onZoom: (value: number) => void;
}

const Zoom: React.FC<IProps> = ({ onZoom }) => {
  const [zoom, setZoom] = useState<number>(100);

  const handleDecrease = () => {
    const value =
      zoom > 100 ? Math.max(zoom - 25, 25) : Math.max(zoom - 10, 25);
    setZoom(value);
    onZoom(value);
  };

  const handleIncrease = () => {
    const value =
      zoom >= 100
        ? Math.min(zoom + 25, 150)
        : Math.min(Math.ceil((zoom + 10) / 10) * 10, 150);
    setZoom(value);
    onZoom(value);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedZoom = parseInt(event.target.value, 10);
    setZoom(selectedZoom);
    onZoom(selectedZoom);
  };

  return (
    <>
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          color: '#AEADAF',
          border: 'none',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}
        onClick={handleDecrease}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M368.5 240h-225c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7h225c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
        </svg>
      </button>
      <select style={{ width: 60 }} value={zoom} onChange={handleSelectChange}>
        <option value={25}>25%</option>
        <option value={30}>30%</option>
        <option value={40}>40%</option>
        <option value={50}>50%</option>
        <option value={60}>60%</option>
        <option value={70}>70%</option>
        <option value={80}>80%</option>
        <option value={90}>90%</option>
        <option value={100}>100%</option>
        <option value={125}>125%</option>
        <option value={150}>150%</option>
      </select>

      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          color: '#AEADAF',
          border: 'none',
          borderRadius: 4,
          backgroundColor: '#fff',
        }}
        onClick={handleIncrease}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
        </svg>
      </button>
    </>
  );
};

export default Zoom;
