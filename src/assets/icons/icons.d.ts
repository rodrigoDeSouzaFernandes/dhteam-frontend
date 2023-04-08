declare module '*.svg' {
  import { type ReactComponent } from 'react';

  const content: ReactComponent;
  export default content;
}
