import React from 'react';
import { ListGroup } from 'react-bootstrap';
import IBlock from '../../types/IBlock';
import IAction from '../../types/IAction';
import SearchListItem from '../SearchListItem';
import GroupListItem from '../GroupListItem';
import IndividualListItem from '../IndividualListItem';

interface IProps {
  blocks: Array<IBlock>;
  searchRenderer: (option: any) => string;
  onAction: (action: IAction) => void;
}

const OptionList: React.FC<IProps> = ({ blocks, onAction, searchRenderer }) => {
  return (
    <ListGroup>
      {blocks.map((block, index) => {
        if (block.type === 'search') {
          if (index === 0) {
            return (
              <SearchListItem
                searchRenderer={searchRenderer}
                onAction={onAction}
                key={block.id}
                block={block}
              />
            );
          } else if (index === blocks.length - 1) {
            return (
              <SearchListItem
                searchRenderer={searchRenderer}
                onAction={onAction}
                key={block.id}
                block={block}
              />
            );
          } else {
            return (
              <SearchListItem
                searchRenderer={searchRenderer}
                onAction={onAction}
                key={block.id}
                block={block}
              />
            );
          }
        } else if (block.type === 'group') {
          if (index === 0) {
            return (
              <GroupListItem
                onAction={onAction}
                key={block.id}
                block={block}
                noUpBorder
              />
            );
          } else if (index === blocks.length - 1) {
            return (
              <GroupListItem
                onAction={onAction}
                key={block.id}
                block={block}
                noDownBorder
              />
            );
          } else {
            return (
              <GroupListItem onAction={onAction} key={block.id} block={block} />
            );
          }
        } else if (block.type === 'sharedWith') {
          if (index === 0) {
            return (
              <IndividualListItem
                onAction={onAction}
                key={block.id}
                block={block}
                noUpBorder
              />
            );
          } else if (index === blocks.length - 1) {
            return (
              <IndividualListItem
                onAction={onAction}
                key={block.id}
                block={block}
                noDownBorder
              />
            );
          } else {
            return (
              <IndividualListItem
                onAction={onAction}
                key={block.id}
                block={block}
              />
            );
          }
        } else {
          return null;
        }
      })}
    </ListGroup>
  );
};

export default OptionList;
