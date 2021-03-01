import React from 'react';
import { Card } from 'react-bootstrap';
import ContentBlock from './ContentBlock';

const ToyBox: React.FC<Props> = (props) => {
  return (
    <div>
      <ContentBlock
        title={"おもちゃ箱"}
      >
        <h3>ランダムで面白いものが出てくるよ！</h3>
        {/* htmlタグのテストです */}
      </ContentBlock>
    </div>
  );
}

type Props = {};

export default ToyBox;