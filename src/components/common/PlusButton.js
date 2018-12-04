import React from 'react';
import { subscribePush, unsubscribePush } from 'utils/webpush';
import './PlusButton.css';

const PlusButton = () => (
  <>
    <div className="button-kakao" onClick={unsubscribePush}>
      +
    </div>
    <div className="button-float" onClick={subscribePush}>
      구독
    </div>
  </>
);

export default PlusButton;
