import * as React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import OptionList from '../../components/OptionList';
import IValue from '../../types/IValue';
import IAction from '../../types/IAction';
import ISearchRenderer from '../../types/ISearchRenderer';

interface IProps {
  value: IValue;
  show: boolean;
  onAction: (action: IAction) => void;
  onHide: () => void;
  searchRenderer?: (option: any) => ISearchRenderer;
  loading?: boolean;
  validationCallback?: (
    inputValue: any,
    selectValue: any,
    selectOptions: any
  ) => boolean;
}

const ShareDialog: React.FC<IProps> = ({
  value,
  show,
  onAction,
  onHide,
  searchRenderer,
  loading,
  validationCallback,
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

  const validationCallbackFunction = validationCallback
    ? validationCallback
    : () => {
        return true;
      };

  const searchRendererFunction = searchRenderer
    ? searchRenderer
    : (option: any) => {
        return { label: option, value: option };
      };

  const overlay = (
    <div
      className="h-100 w-100 d-flex justify-content-center align-items-center"
      style={{
        background: 'rgb(244,244,244)',
        position: 'absolute',
        opacity: 0.3,
        zIndex: 10,
      }}
    >
      <Spinner animation="border" role="status" />
    </div>
  );

  return (
    <>
      <Modal onHide={() => onHide()} show={show} style={{ minWidth: '620px' }}>
        {loading ? overlay : null}
        <Modal.Dialog className="my-0">
          <Modal.Body className="px-4 py-3">
            <OptionList
              onAction={onAction}
              blocks={filteredBlocks}
              searchRenderer={searchRendererFunction}
              validationCallback={validationCallbackFunction}
            />
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
};

export default ShareDialog;
