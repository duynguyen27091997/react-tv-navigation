/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { useFocusable } from '../../useFocusable';

interface MenuItemBoxProps {
  focused: boolean;
}

const MenuItemBox = styled.div<MenuItemBoxProps>`
  width: 171px;
  height: 51px;
  background-color: #b056ed;
  border-color: white;
  border-style: solid;
  border-width: ${({ focused }) => (focused ? '6px' : 0)};
  box-sizing: border-box;
  border-radius: 7px;
  margin-bottom: 37px;
`;

export default function MenuItem() {
  const { ref, focused } = useFocusable();

  return <MenuItemBox ref={ref} focused={focused} />;
}
