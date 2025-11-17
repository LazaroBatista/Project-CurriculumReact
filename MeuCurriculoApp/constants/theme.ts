import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#1a1a1a',
    background: '#d7e8f7',   // Fundo azul claro
    card: '#ffffff',
    border: '#b8d6eb',
    highlight: '#0bc86e',    
    tint: '#0bc86e',
    icon: '#3d4b5a',
    tabIconDefault: '#5f7b91',
    tabIconSelected: '#0bc86e',
  },

  dark: {
    text: '#ECEDEE',
    background: '#151718',
    card: '#1d1f21',
    border: '#3a3d40',
    highlight: '#0bc86e',
    tint: '#0bc86e',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#0bc86e',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
