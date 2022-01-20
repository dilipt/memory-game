import React from 'react';

type HeaderProps = {
  children: string,
};

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}
