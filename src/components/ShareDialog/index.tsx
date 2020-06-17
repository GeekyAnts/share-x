import * as React from "react";
import { Modal } from "react-bootstrap";
import OptionList from "../../components/OptionList";
import IValue from "../../types/IValue";
import IAction from "../../types/IAction";
import ISearchRenderer from "../../types/ISearchRenderer";

interface IProps {
  value: IValue;
  show: boolean;
  onAction: (action: IAction) => void;
  onHide: () => void;
  searchRenderer?: (option: any) => ISearchRenderer;
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
  validationCallback
}) => {
  const filteredBlocks =
    value && value.blocks && Array.isArray(value.blocks)
      ? value.blocks.filter(
          block =>
            block.type === "search" ||
            block.type === "group" ||
            block.type === "sharedWith"
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

  return (
    <>
      <Modal onHide={() => onHide()} show={show} style={{ minWidth: "620px" }}>
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
