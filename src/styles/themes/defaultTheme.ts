import { colors, fonts } from 'styles/styleGuide';

export default {
  title: 'default',

  colors: {
    primary: colors.black.t4,
    secondary: colors.white.t1,
    tertiary: colors.red.t1,

    background: colors.white.t2,
    text: colors.black.t4,
    secondaryText: colors.black.t1,
    tertiaryText: colors.red.t3,

    ...colors,
  },

  fonts: {
    title: fonts.bebasNeue,
    text: fonts.montserrat,
  },

  defaultMaxWidth: '1200px',
};
