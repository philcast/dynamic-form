import * as React from 'react';
import styled from 'styled-components';
import { getBreakpoint } from './hooks/useWindowSize';

export const SidePanel: React.FC = () => {
  const lgBreakpoint = getBreakpoint('lg');
  
  const PanelDiv = React.useMemo(() => styled.div`
  min-height: 300px;

  @media (max-width: ${lgBreakpoint}px) {
    margin-top: 1rem;
  }
  `, []);
  
  return (
    <PanelDiv className="card shadow bg-primary h-100">
      <div className="card-body">
        <h5 className="card-title text-white">Side Panel</h5>
        <div className="card-text">
        </div>
      </div>
    </PanelDiv>
  );
};