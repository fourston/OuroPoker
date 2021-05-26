import { ImageURISource } from 'react-native';

declare module '*.svg' {
  const content: any;
  export default content;
}
