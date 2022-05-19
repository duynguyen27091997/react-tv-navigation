import React, { useEffect } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { FocusContext } from '../../useFocusedContext';
import { useFocusable } from '../../index';
import MenuItem from './MenuItem';

const logo = require('../../../logo.png').default;

interface MenuWrapperProps {
  hasFocusedChild: boolean;
}

const MenuWrapper = styled.div<MenuWrapperProps>`
  flex: 1;
  max-width: 246px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ hasFocusedChild }) =>
    hasFocusedChild ? '#4e4181' : '#362C56'};
  padding-top: 37px;
`;

const NmLogo = styled.img`
  height: 57px;
  width: 175px;
  margin-bottom: 51px;
`;

interface MenuProps {
  focusKey: string;
}

export default function Menu({ focusKey: focusKeyParam }: MenuProps) {
  const {
    ref,
    focusSelf,
    hasFocusedChild,
    focusKey
    // setFocus, -- to set focus manually to some focusKey
    // navigateByDirection, -- to manually navigate by direction
    // pause, -- to pause all navigation events
    // resume, -- to resume all navigation events
    // updateAllLayouts -- to force update all layouts when needed
  } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    preferredChildFocusKey: null,
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: 'bar' }
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <MenuWrapper ref={ref} hasFocusedChild={hasFocusedChild}>
        <NmLogo src={logo} />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuWrapper>
    </FocusContext.Provider>
  );
}
