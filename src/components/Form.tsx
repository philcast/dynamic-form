import * as React from 'react';
import { Block } from './Block';

export const Form: React.FC = () => (
  <form>
    <div className="form container-fluid px-md-5 pr-0">
      <div className="row mx-md-n5">
        <Block id="A" className="col-12"></Block>
        <Block id="B"></Block>
        <Block id="C"></Block>
        <Block id="D" className="col-md-4"></Block>
        <Block id="E" className="col-md-4"></Block>
        <Block id="F" className="col-md-4"></Block>
        <Block id="Tabs" className="col-12"></Block>
      </div>
    </div>
  </form>
)