import React, { useState, useRef, useEffect } from 'react';
import Entity from './entity/entity';
import { AddButton } from './actionButtons/actionButtons';
import './constructor.css';
import { Button, Div } from './constructor.styled';
import { getLineOffset } from '../lib/functions';

interface IProps {
  zoom: number;
  center: boolean;
  onSetCenter: () => void;
}

interface IElement {
  id: string;
  parent?: string;
  item: React.ReactNode;
  children: IElement[];
  level: number;
  position?: number;
}

const Constructor: React.FC<IProps> = ({ zoom, center, onSetCenter }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [elements, setElements] = useState<IElement[]>([]);
  const [hrznWidth, setHrznWidth] = useState<number>(0);

  const firstChildRef = useRef<HTMLDivElement>(null);
  const lastChildRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const moovingRef = useRef<HTMLDivElement>(null);
  const offsetX = useRef<number | null>(null);
  const offsetY = useRef<number | null>(null);

  const offset = getLineOffset(elements.length);

  useEffect(() => {
    if (center) {
      const moovingDiv = moovingRef.current;
      if (moovingDiv) {
        moovingDiv.style.left = '50%';
        moovingDiv.style.top = '50%';
        onSetCenter();
      }
    }
  }, [center, onSetCenter]);

  const findAndInsertChild = (
    parentId: string,
    newChild: IElement,
    elements: IElement[],
  ): IElement[] => {
    return elements.map(el => {
      if (el.id === parentId) {
        return {
          ...el,
          children: [...el.children, newChild],
        };
      } else if (el.children.length > 0) {
        return {
          ...el,
          children: findAndInsertChild(parentId, newChild, el.children),
        };
      }

      return el;
    });
  };

  let level = 1;
  const handleCreateEntity = (parentId: string) => {
    const id = Math.random().toString();

    const newElement = {
      id,
      parent: parentId,
      item: (
        <Entity
          id={id}
          level={level}
          onRemove={removeEntity}
          onAdd={handleCreateEntity}
        />
      ),
      children: [],
      level: level,
    };

    if (parentId === 'source') {
      setElements(prevElements => [...prevElements, newElement]);
    } else {
      setElements(prevElements =>
        findAndInsertChild(parentId, newElement, prevElements),
      );
    }
    ++level;
  };

  const removeEntity = (id: string) => {
    setElements(prevElements => {
      const updatedElements = prevElements.filter(el => el.id !== id);

      const removeChildren = (elements: IElement[], id: string) => {
        for (let i = 0; i < elements.length; i++) {
          if (elements[i].id === id) {
            elements.splice(i, 1);
            i--;
          } else {
            removeChildren(elements[i].children, id);
          }
        }
      };

      removeChildren(updatedElements, id);

      return updatedElements;
    });
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => {
        if (
          moovingRef.current &&
          offsetX.current !== null &&
          offsetY.current !== null
        ) {
          const block = moovingRef.current;
          let newX = e.clientX - offsetX.current;
          let newY = e.clientY - offsetY.current;

          block.style.left = `${newX}px`;
          block.style.top = `${newY}px`;
        }
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id !== 'mooving_btn' && target.id !== 'mooving_div') {
      return;
    }

    setIsDragging(true);
    const block = moovingRef.current;
    if (block) {
      offsetX.current = e.clientX - block.offsetLeft;
      offsetY.current = e.clientY - block.offsetTop;
    }
  };

  useEffect(() => {
    const firstChild = firstChildRef.current;
    const lastChild = lastChildRef.current;

    if (firstChild && lastChild) {
      const rectFirst = firstChild.getBoundingClientRect();
      const rectLast = lastChild.getBoundingClientRect();

      const firstChildCenter = rectFirst.left + rectFirst.width / 2;
      const lastChildCenter = rectLast.left + rectLast.width / 2;

      const distance = Math.abs(lastChildCenter - firstChildCenter);

      setHrznWidth(distance + 1);
    }
  }, [elements.length]);

  const renderElement = (el: IElement, index: number) => {
    return (
      <Div
        key={el.id}
        id={el.id}
        // withBefore={elements.length >= 2}
        // margin={elements.length >= 2 ? '24px' : '12px'}
        ref={
          index === 0
            ? firstChildRef
            : index === elements.length - 1
            ? lastChildRef
            : null
        }
      >
        {el.item}
        {el.children.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'row', gap: 12 }}>
            {el.children.map((child, i) => renderElement(child, i))}
          </div>
        )}
      </Div>
    );
  };

  return (
    <div
      id="container"
      className="container"
      ref={containerRef}
      style={{ zoom: `${zoom}%` }}
    >
      <div
        className="mooving_block"
        id="mooving_div"
        ref={moovingRef}
        onMouseDown={handleMouseDown}
      >
        <div className="row">
          <Button
            id="mooving_btn"
            // width={`${hrznWidth}px`}
            // withAfter={elements.length > 1}
            // withBefore={elements.length > 0}
            // offset={offset}
          >
            Categories
          </Button>
          <AddButton onAdd={handleCreateEntity} parentId="source" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 80 }}>
          {elements.map((el, i) => renderElement(el, i))}
        </div>
      </div>
    </div>
  );
};

export default Constructor;
