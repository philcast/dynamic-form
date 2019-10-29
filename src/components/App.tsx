import * as React from 'react';
import { Form } from './Form';
import { useWindowSize, getBreakpoint } from './hooks/useWindowSize';
import { SidePanel } from './SidePanel';
import styled from 'styled-components';



export const App: React.FC = () => {
  const windowSize = useWindowSize();
  console.log('windowSize', windowSize);
  
  const lgBreakpoint = getBreakpoint('lg');
  
  const FormDiv = React.useMemo(() => styled.div`
  @media (max-width: ${lgBreakpoint}px) {
    padding-left: 0;
  }
  `, []);


  return (
    <div className="app container-fluid px-0 py-0">
      <div className="row bg-secondary">
        <FormDiv className="col-lg-8 col-xl-9 pr-0">
          <Form></Form>
        </FormDiv>
        <div className="col-lg-4 col-xl-3 pr-0">
          <SidePanel/>
        </div>
      </div>
    </div>
  );
}