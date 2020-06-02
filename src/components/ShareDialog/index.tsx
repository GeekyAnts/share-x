import * as React from 'react';
import { Modal } from 'react-bootstrap';
import OptionList from '../../components/OptionList';
import IValue from '../../types/IValue';
import IAction from '../../types/IAction';

interface IProps {
  value: IValue;
  show: boolean;
  onAction: (action: IAction) => void;
  onHide: () => void;
  searchRenderer?: (option: any) => string;
}

const ShareDialog: React.FC<IProps> = ({
  value,
  show,
  onAction,
  onHide,
  searchRenderer = (option: any) => `${option}`,
}) => {
  const filteredBlocks =
    value && value.blocks && Array.isArray(value.blocks)
      ? value.blocks.filter(
          block =>
            block.type === 'search' ||
            block.type === 'group' ||
            block.type === 'sharedWith'
        )
      : [];

  return (
    <>
      <Modal onHide={() => onHide()} show={show} style={{ minWidth: '620px' }}>
        <Modal.Dialog className="my-0">
          <Modal.Body className="px-4 py-3">
            <OptionList
              onAction={onAction}
              blocks={filteredBlocks}
              searchRenderer={searchRenderer}
            />
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default ShareDialog;
