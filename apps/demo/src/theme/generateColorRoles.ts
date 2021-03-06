import Color from 'color';
import alphaMixColor from '../theme/alphaMixColor';
import { ColorPrimitivesDeclaration, ColorRoles } from '../theme/colorSystem';
import shiftColor from './shiftColor';

export interface BackdropFactoryParams {
  surfaceColor: string;
  surfaceContent: string;
  name: string;
  primitives: ColorPrimitivesDeclaration;
}

export default function generateColorRoles({
  surfaceColor,
  surfaceContent,
  name,
  primitives
}: BackdropFactoryParams): ColorRoles {
  const softContent = alphaMixColor(surfaceContent, 0.45, surfaceColor);
  // Use transparent because of a bug in the dropdown menu (react-native-paper)
  const inactiveBackground = 'transparent';
  const accentColor = primitives.accent.color;
  const accentBg = primitives.accent.content;
  const secondaryContent = Color(surfaceContent).alpha(0.5).string();
  return {
    name,
    surface: {
      secondaryContent,
      background: surfaceColor,
      content: surfaceContent,
      scrim: primitives.scrim
    },
    hyperlinkColor: accentColor,
    admonition: {
      important: accentColor,
      note: accentColor,
      tip: accentColor,
      caution: '#c59d30',
      warning: '#f54349'
    },
    sheetHandle: {
      slot: shiftColor(surfaceColor, 1, 0.3),
      background: shiftColor(surfaceColor, 0.3, 0.07)
    },
    softDivider: softContent,
    softIconColor: secondaryContent,
    statusBarBackground: primitives.heading.content,
    selectable: {
      inactiveBackground,
      inactiveTint: surfaceContent,
      activeTint: accentBg,
      activeBackground: accentColor,
      ripple: softContent
    },
    pressable: {
      background: inactiveBackground,
      tint: surfaceContent,
      ripple: softContent
    },
    spinnerColor: accentColor,
    switchColor: {
      on: accentColor,
      off: alphaMixColor(surfaceContent, 0.2, surfaceColor)
    },
    trackColor: {
      on: alphaMixColor(accentColor, 0.7, surfaceColor),
      off: alphaMixColor(surfaceContent, 0.5, surfaceColor)
    },
    codeBackground: '#000044'
  };
}
