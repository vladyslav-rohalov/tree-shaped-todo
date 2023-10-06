interface IElement {
  id: string;
  parent?: string;
  item: React.ReactNode;
  children: IElement[];
  level: number;
}

const findLevel = (
  parentId: string,
  elements: IElement[],
  currentLevel: number = 0,
): number => {
  for (const element of elements) {
    console.log(element.parent, parentId);
    if (element.parent === parentId) {
      return currentLevel;
    }
    if (element.children.length > 0) {
      const childLevel = findLevel(
        parentId,
        element.children,
        currentLevel + 1,
      );
      if (childLevel >= 0) {
        return childLevel;
      }
    }
  }
  return 0;
};

export const getColorByLevel = (level: number): string => {
  switch (level) {
    case 1:
      return '#F68A2A';
    case 2:
      return '#07A3C9';
    case 3:
      return '#ADAFAF';
    default:
      return '#fff';
  }
};

export const getLineOffset = (n: number) => {
  if (n < 2) return '0px';
  let result = n === 2 ? 74 : 74 + (n - 2) * 142;
  return `-${result}px`;
};
