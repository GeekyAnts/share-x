import * as React from 'react';
import { Modal } from 'react-bootstrap';
import OptionList from './components/OptionList';
import IValue from './types/IValue';

interface IProps {
  value: IValue;
}

const ShareDialog: React.FC<IProps> = ({ value }) => {
  return (
    <>
      <Modal.Dialog style={{ minWidth: '620px' }}>
        <Modal.Body className="px-4 py-3">
          <OptionList blocks={value.blocks} />
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
};

export default ShareDialog;
