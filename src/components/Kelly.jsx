import React from 'react';
import styled from 'styled-components';

const KellyWrap = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 800px;
  color: var(--white);
  background-color: var(--primary);
`;

function Kelly() {
  return (
    <>
      <KellyWrap>
        <h1>HYEYEON</h1>
      </KellyWrap>
    </>
  );
}

export default Kelly;