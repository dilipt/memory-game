import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { tileSelected } from './store/game-slice';
import { RootState } from './store/store';

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

type TileProps = {
  value: number,
};

export function Tile({ value }: TileProps) {
  const { hideAll, matchedNumbers } = useSelector((state: RootState) => state.game);
  const [selected, setSelected] = useState<boolean>(false);
  const [matched, setMatched] = useState<boolean>(false);
  const dispatch = useDispatch();

  const toggleSelected = () => {
    if (!selected) {
      dispatch(tileSelected({ tile: value }));
    }
    setSelected(!selected);
  };

  useEffect(() => {
    let handle: number;
    if (hideAll) {
      handle = window.setTimeout(() => setSelected(false), 1000);
    }
    return () => clearTimeout(handle);
  }, [hideAll]);

  useEffect(() => {
    setMatched(matchedNumbers.some((n) => n === value));
  }, [matchedNumbers]);

  return (
    <Container onClick={toggleSelected} selected={selected} matched={matched}>{value}</Container>
  );
}
