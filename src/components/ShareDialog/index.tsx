import * as React from 'react';
import { Modal } from 'react-bootstrap';
import OptionList from '../../components/OptionList';
import IValue from '../../types/IValue';
import IAction from '../../types/IAction';

interface IProps {
  value: IValue;
  show: boolean;
  onAction: (action: IAction) => void;
  searchRenderer?: (option: any) => string;
}

const ShareDialog: React.FC<IProps> = ({
  value,
  show,
  onAction,
  searchRenderer = (option: any) => `${option}`,
}) => {
  const filteredBlocks = value.blocks.filter(
    block =>
      block.type === 'search' ||
      block.type === 'group' ||
      block.type === 'sharedWith'
  );

  return (
    <>
      {show ? (
        <Modal.Dialog style={{ minWidth: '620px' }}>
          <Modal.Body className="px-4 py-3">
            <OptionList
              onAction={onAction}
              blocks={filteredBlocks}
              searchRenderer={searchRenderer}
            />
          </Modal.Body>
        </Modal.Dialog>
      ) : null}
    </>
  );
};

export default ShareDialog;
