import React from 'react';
import { ListGroup } from 'react-bootstrap';
import IBlock from '../../types/IBlock';
import SearchListItem from '../SearchListItem';
import GroupListItem from '../GroupListItem';
import IndividualListItem from '../IndividualListItem';

interface IProps {
  blocks: Array<IBlock>;
}

const OptionList: React.FC<IProps> = ({ blocks }) => {
  return (
    <ListGroup>
      {blocks.map((block, index) => {
        if (block.type === 'search') {
          if (index === 0) {
            return <SearchListItem key={block.id} block={block} />;
          } else if (index === blocks.length - 1) {
            return <SearchListItem key={block.id} block={block} />;
          } else {
            return <SearchListItem key={block.id} block={block} />;
          }
        } else if (block.type === 'group') {
          if (index === 0) {
            return <GroupListItem key={block.id} block={block} noUpBorder />;
          } else if (index === blocks.length - 1) {
            return <GroupListItem key={block.id} block={block} noDownBorder />;
          } else {
            return <GroupListItem key={block.id} block={block} />;
          }
        } else if (block.type === 'sharedWith') {
          if (index === 0) {
            return (
              <IndividualListItem key={block.id} block={block} noUpBorder />
            );
          } else if (index === blocks.length - 1) {
            return (
              <IndividualListItem key={block.id} block={block} noDownBorder />
            );
          } else {
            return <IndividualListItem key={block.id} block={block} />;
          }
        } else {
          return null;
        }
      })}
    </ListGroup>
  );
};

export default OptionList;
