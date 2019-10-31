import * as React from 'react';
import classNames = require('classnames');
import { VerticalFormGroup } from './formGroup/VerticalFormGroup';
import { HorizontalFormGroup } from './formGroup/HorizontalFormGroup';

const HORIZONTAL_FORM_MIN_WIDTH = 350;

interface BlockProps {
  id: string;
  className?: string;
}

export const Block: React.FC<BlockProps> = ({ id, className }) => {
  const cardEl = React.useRef<HTMLDivElement>(null);
  const [isSmallBlock, setSmallBlock] = React.useState(false);

  React.useLayoutEffect(() => {
    const cardWidth = cardEl.current.clientWidth;
    setSmallBlock(cardWidth < HORIZONTAL_FORM_MIN_WIDTH);
  })

  const FormGroup = isSmallBlock ? VerticalFormGroup : HorizontalFormGroup;

  return (
    <div className={classNames('my-3', className || 'col-md-6')}>
      <div className="card shadow bg-white rounded" ref={cardEl}>
        <div className="card-body">
          <h5 className="card-title">{id}</h5>
          <div className="card-text">
            {
              [1, 2, 3].map(fieldIndex => {
                const fieldId = `${id}-field-${fieldIndex}`;
                return (
                  <FormGroup inputId={fieldId} key={fieldIndex}>
                    <input type="text" id={fieldId} className="form-control" />
                  </FormGroup>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};