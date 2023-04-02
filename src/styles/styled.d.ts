import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      background: string;
      text: string;
      secondaryText: string;
      tertiaryText: string;
      red: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      black: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      brown: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      purple: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      blue: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      pink: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      yellow: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      lightBlue: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      white: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      orange: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
      green: {
        t1: string;
        t2: string;
        t3: string;
        t4: string;
        t5: string;
      };
    };

    fonts: {
      title: string;
      text: string;
    };

    defaultMaxWidth: string;
  }
}
