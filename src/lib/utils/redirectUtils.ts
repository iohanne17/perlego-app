import {WebViewProps} from 'react-native-webview';

import {CommonRoutes} from '../../navigation/routes';

import {navigate} from './navigationUtils';

export interface OpenWebViewProps extends Partial<WebViewProps> {
  html: string;
  goBackTitle?: string;
  onBack?: () => void;
  keyArray?: string[];
}

export const openWebView = ({
  onBack,
  html,
  keyArray,
  ...rest
}: OpenWebViewProps) => {
  if (!html) {
    return;
  }
  navigate(CommonRoutes.WEB_VIEW, {
    onBack,
    html,
    keyArray,
    ...rest,
  });
};
