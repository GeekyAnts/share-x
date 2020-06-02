import React from 'react';
import { ListGroup, Form, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import IBlock from '../../types/IBlock';
import IAction from '../../types/IAction';
import IDropdownOptions from '../../types/IDropdownOptions';

interface IProps {
  block: IBlock;
  onAction: (action: IAction) => void;
  searchRenderer: (option: any) => string;
  noUpBorder?: boolean;
  noDownBorder?: boolean;
}

const SearchListItem: React.FC<IProps> = ({
  block,
  onAction,
  searchRenderer,
  noUpBorder = false,
  noDownBorder = false,
}) => {
  let className = 'border-left-0 border-right-0 px-0 ';
  if (!noUpBorder) {
    className += 'border-top-0 pt-2 pb-0';
  } else if (!noDownBorder) {
    className += 'border-bottom-0 pt-4';
  } else {
    className += ' py-4';
  }

  const dispatchSelectAction = (selected: any) => {
    onAction({
      type: 'CHANGE_SELECTION',
      payload: {
        blockId: block.id,
        value: selected,
      },
    });
  };

  const dispatchButtonClick = () => {
    onAction({
      type: 'BUTTON_CLICK',
      payload: {
        blockId: block.id,
        value: {
          selected: block.value.selected,
          access: block.value.access,
        },
      },
    });
  };

  const dispatchDropdownAction = (value: any) => {
    onAction({
      type: 'DROPDOWN_CHANGE',
      payload: {
        blockId: block.id,
        value,
      },
    });
  };

  return (
    <ListGroup.Item className={className}>
      <Form.Group as={Row}>
        <Form.Label column md="1" sm="1">
          <strong>{block.caption}</strong>
        </Form.Label>
        <Col md="5" sm="5" className="px-0">
          {block.value && block.value.selected ? (
            <Typeahead
              id={'typeahead-' + block.id}
              labelKey={searchRenderer}
              selected={block.value.selected}
              onChange={selected => dispatchSelectAction(selected)}
              filterBy={block.filterBy ? block.filterBy : []}
              multiple
              options={block.searchRecords ? block.searchRecords : []}
              placeholder="Enter emails"
            />
          ) : null}
        </Col>
        <Col md="3" sm="3">
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="link-access-dropdown dropdown-toggle-button"
            >
              {block.value.access}
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="border-0"
              style={{
                boxShadow: '0 8px 16px 0 rgba(5, 0, 56, 0.12)',
              }}
            >
              {block.accessTypes.map((accessType: IDropdownOptions) => {
                return (
                  <Dropdown.Item
                    key={accessType.key}
                    onClick={() => dispatchDropdownAction(accessType.key)}
                  >
                    {accessType.value}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md="3" sm="3">
          <Button onClick={() => dispatchButtonClick()} block>
            {block.buttonText ? block.buttonText : ''}
          </Button>
        </Col>
      </Form.Group>
    </ListGroup.Item>
  );
};

export default SearchListItem;
