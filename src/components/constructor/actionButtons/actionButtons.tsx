import './actionButtons.css';

interface IOkProps {
  onSuccess: () => void;
  inProgress: boolean;
}

export const OkButton: React.FC<IOkProps> = ({ onSuccess, inProgress }) => {
  return (
    <button
      onClick={onSuccess}
      style={{
        backgroundColor: inProgress ? '#5AD10B' : '#CECFCD',
      }}
      className="common_button"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
      </svg>
    </button>
  );
};

export const EditButton = () => {
  return (
    <button
      style={{
        backgroundColor: '#CECFCD',
      }}
      className="common_button"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25V21zm2-2.92l9.06-9.06.92.92L5.92 19H5v-.92zM18.37 3.29a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34z"></path>
      </svg>
    </button>
  );
};

interface IRemoveProps {
  onRemove: () => void;
  inProgress: boolean;
}

export const CancelButton: React.FC<IRemoveProps> = ({
  onRemove,
  inProgress,
}) => {
  return (
    <button
      onClick={onRemove}
      style={{
        backgroundColor: inProgress ? '#F7BD32' : '#F54E23',
      }}
      className="common_button"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" strokeWidth="2" d="M7,7 L17,17 M7,17 L17,7"></path>
      </svg>
    </button>
  );
};

interface IAddProps {
  onAdd: (parentId: string) => void;
  parentId: string;
}

export const AddButton: React.FC<IAddProps> = ({ onAdd, parentId }) => {
  return (
    <button
      style={{
        backgroundColor: '#DDDCDF',
      }}
      className="common_button"
      onClick={() => onAdd(parentId)}
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
  );
};

interface IModal {
  openModal: () => void;
}

export const AddModal: React.FC<IModal> = ({ openModal }) => {
  return (
    <button
      style={{
        backgroundColor: '#DDDCDF',
      }}
      className="common_button"
      onClick={openModal}
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
  );
};
