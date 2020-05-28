import IValue from '../types/IValue';
import IAction from '../types/IAction';

const reduce = (oldState: IValue, action: IAction): IValue => {
  for (let i = 0; i < oldState.blocks.length; i++) {
    let block = oldState.blocks[i];
    if (!(block.id === action.payload.blockId)) {
      continue;
    }

    switch (action.type) {
      case 'CHANGE_SELECTION':
        if (block.value.selected) {
          block.value.selected = action.payload.value;
        }
        break;

      case 'DROPDOWN_CHANGE':
        block.value.access = action.payload.value;
        break;

      default:
        break;
    }

    oldState.blocks[i] = block;
  }

  return JSON.parse(JSON.stringify(oldState));
};

export default reduce;
