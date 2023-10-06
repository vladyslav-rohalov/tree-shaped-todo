import './locate.css';

interface IProps {
  onLocate: () => void;
}

const Locate: React.FC<IProps> = ({ onLocate }) => {
  return (
    <button className="locate_button" onClick={() => onLocate()}>
      <svg
        stroke="#AEADAF"
        fill="#AEADAF"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21.7264 2.95706L16.2732 22.0433C16.1222 22.5718 15.7976 22.5958 15.5561 22.1127L10.9998 13.0002L1.92266 9.36931C1.41298 9.16544 1.41929 8.86034 1.9567 8.6812L21.0429 2.31913C21.5714 2.14297 21.8745 2.43878 21.7264 2.95706ZM19.0351 5.0966L6.81197 9.17097L12.4486 11.4256L15.4893 17.507L19.0351 5.0966Z"></path>
      </svg>
    </button>
  );
};

export default Locate;
