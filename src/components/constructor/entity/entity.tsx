import React, { useState } from 'react';
import {
  OkButton,
  CancelButton,
  EditButton,
  AddModal,
} from '../actionButtons/actionButtons';
import { getColorByLevel } from '../../lib/functions';
import './entity.css';

interface IEntityProps {
  id: string;
  level: number;
  onRemove: (id: string) => void;
  onAdd: (parentId: string) => void;
}

const Entity: React.FC<IEntityProps> = ({ id, level, onRemove, onAdd }) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [label, setLabel] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // console.log(level);
  const color = getColorByLevel(level);

  const handleSuccess = () => {
    setIsFilled(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  const handleCreateCategory = () => {
    onAdd(id);
    setModalOpen(false);
  };

  const handleCreateService = () => {
    // What is service???
    setModalOpen(false);
  };

  return (
    <div className="field" id={id}>
      {!isFilled ? (
        <>
          <input
            type="text"
            placeholder="Category name"
            onChange={handleChange}
            value={label}
            className="input"
          />
          <CancelButton onRemove={handleRemove} inProgress={!isFilled} />
          <OkButton onSuccess={handleSuccess} inProgress={!isFilled} />
        </>
      ) : (
        <>
          <div
            style={{
              position: 'relative',
              backgroundColor: color,
            }}
            className="badge"
          >
            {label}
          </div>

          <AddModal openModal={() => setModalOpen(true)} />
          <EditButton />
          <CancelButton onRemove={handleRemove} inProgress={!isFilled} />
          {modalOpen && (
            <div className="modal">
              <p>What do you want to create?</p>
              <div className="btn_row">
                <button className="confirm_btn" onClick={handleCreateCategory}>
                  CATEGORY
                </button>
                <button className="confirm_btn" onClick={handleCreateService}>
                  SERVICE
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Entity;
