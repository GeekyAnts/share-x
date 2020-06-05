import IBlock from '../types/IBlock';

const getDropdownValue = (block: IBlock, value: string) => {
  let filteredAccessType = block.accessTypes.filter(
    accessType => accessType.key === value
  );

  if (filteredAccessType.length > 0) {
    return filteredAccessType[0].value;
  }

  return value;
};

export default getDropdownValue;
