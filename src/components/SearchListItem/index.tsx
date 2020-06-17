import React from 'react';
import { ListGroup, Form, Row, Col, Button, Dropdown } from 'react-bootstrap';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import IBlock from '../../types/IBlock';
import IAction from '../../types/IAction';
import IDropdownOptions from '../../types/IDropdownOptions';
import getDropdownValue from '../../utilities/getDropdownValue';
import CreatableSelect from 'react-select/creatable';
import ISearchRenderer from '../../types/ISearchRenderer';

interface IProps {
  block: IBlock;
  onAction: (action: IAction) => void;
  searchRenderer: (option: any) => ISearchRenderer;
  noUpBorder?: boolean;
  noDownBorder?: boolean;
  validationCallback: (
    inputValue: any,
    selectValue: any,
    selectOptions: any
  ) => boolean;
}

const SearchListItem: React.FC<IProps> = ({
  block,
  onAction,
  searchRenderer,
  noUpBorder = false,
  noDownBorder = false,
  validationCallback,
}) => {
  let className = 'border-left-0 border-right-0 px-0 ';
  if (!noUpBorder) {
    className += 'border-top-0 pt-2 pb-0';
  } else if (!noDownBorder) {
    className += 'border-bottom-0 pt-3';
  } else {
    className += ' py-3';
  }

  const components = {
    DropdownIndicator: null,
  };

  const dispatchSelectAction = (selected: any) => {
    if (selected === null) selected = [];
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
      type: 'INVITE_ARBITRARY_USER',
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

  let options = [];
  if (block.searchRecords) {
    for (let record of block.searchRecords) {
      options.push(searchRenderer(record));
    }
  }
  const selectStyles = {
    option: (styles: any) => {
      return {
        ...styles,
        border: 'none!important',

        ':hover': {
          ...styles[':hover'],
          backgroundColor: '#7252D3',
          color: '#fff',
        },
      };
    },
    control: () => ({
      // none of react-select's styles are passed to <Control />
      border: 'none',
    }),
  };

  let selectedValuesLength = 0;
  if (block && block.value && block.value.selected) {
    selectedValuesLength = block.value.selected.length;
  }

  return (
    <ListGroup.Item className={className}>
      <Form.Group as={Row}>
        <Form.Label column md="1" sm="1">
          <strong>{block.caption}</strong>
        </Form.Label>
        <Col className="px-0" md={selectedValuesLength > 0 ? '4' : '10'}>
          {block.value && block.value.selected ? (
            <CreatableSelect
              components={components}
              isClearable={false}
              isMulti
              options={options}
              onChange={(selected: any) => dispatchSelectAction(selected)}
              placeholder="Enter emails"
              value={block.value.selected}
              className="px-0"
              styles={selectStyles}
              isValidNewOption={validationCallback}
            />
          ) : null}
        </Col>
        {selectedValuesLength > 0 ? (
          <Col md="3" sm="3" className="mt-1 pl-0 text-right">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="link-access-dropdown dropdown-toggle-button"
              >
                {getDropdownValue(block, block.value.access)}
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
                      style={accessType.style ? { ...accessType.style } : {}}
                    >
                      {accessType.value}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        ) : null}
        {selectedValuesLength > 0 ? (
          <Col md="4" sm="4" className="mt-1">
            <Button onClick={() => dispatchButtonClick()} block className="p-2">
              {block.buttonText ? block.buttonText : ''}
            </Button>
          </Col>
        ) : null}
      </Form.Group>
    </ListGroup.Item>
  );
};

export default SearchListItem;
