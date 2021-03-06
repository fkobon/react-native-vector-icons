import { Platform } from './react-native';

import { NativeIconAPI } from './create-icon-set';

export default function ensureNativeModuleAvailable() {
  if (!NativeIconAPI) {
    if (Platform.OS === 'android') {
      throw new Error(
        'RNVectorIconsModule not available, did you properly integrate the module? Try running `react-native link react-native-vector-icons` and recompiling.'
      );
    }
    throw new Error(
      'RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a? Try running `react-native link react-native-vector-icons` and recompiling.'
    );
  }
}
