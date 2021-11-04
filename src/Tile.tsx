import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type TileProps = {
  value: number,
  selectHandler: Function,
  selectCount: number,
};

type StyleProps = {
  selected: boolean,
  matched: boolean,
};

const Container = styled.div<StyleProps>`
  border: 2px solid ${({ selected, theme }) => (selected ? theme.colors.secondary : theme.colors.tertiary)};
  background-color: ${({ theme }) => theme.colors.main}; 
  color: ${({ theme, selected }) => (selected ? theme.colors.lightFont : theme.colors.main)};
  border-radius: 6px;
  visibility: ${({ matched }) => (matched ? 'hidden' : 'visible')};
  text-align: center;
  padding: 2rem;
  margin: 1rem;
  cursor: pointer;
`;

export function Tile({ value, selectHandler, selectCount }: TileProps) {
  const [selected, setSelected] = useState<boolean>(false);

  const toggleSelected = () => {
    if (!selected) {
      selectHandler(value);
    }
    setSelected(!selected);
  };

  useEffect(() => {
    if (selectCount === 0) {
      setSelected(false);
    }
  }, [selectCount]);

  return (
    <Container onClick={toggleSelected} selected={selected} matched={value === 0}>{value}</Container>
  );
}
