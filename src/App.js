import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStore,
  faBullhorn,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';

import Text from './components/Text';
import Button from './components/Button';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Image style={styles.app} source={require('./assets/app.png')} />
      </View>
      <View style={styles.title}>
        <Text xxl heavy lineHeight={32}>
          Start selling online with Shopify
        </Text>
      </View>
      <View style={styles.subtitle}>
        <Text secondary>
          The ecommerce platform trusted by over a million businesses worldwide
        </Text>
      </View>
      <View>
        <View style={styles.bulletContainer}>
          <FontAwesomeIcon icon={faStore} />
          <Text bold lg style={styles.bullet}>
            Create your online store
          </Text>
        </View>
        <View style={styles.bulletContainerSpaced}>
          <FontAwesomeIcon icon={faBullhorn} />
          <Text bold lg style={styles.bullet}>
            Grow your audience
          </Text>
        </View>
        <View style={styles.bulletContainerSpaced}>
          <FontAwesomeIcon icon={faClipboardCheck} />
          <Text bold lg style={styles.bullet}>
            Manage from anywhere
          </Text>
        </View>
      </View>
      <Button
        style={styles.buttonSpaced}
        normal
        title
        titleText="Get started"
      />
      <Button secondary normal hyperlink titleText="Log in" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {height: 200, width: 200, marginTop: 80, marginBottom: 56},
  bullet: {marginLeft: 12},
  bulletContainer: {flexDirection: 'row'},
  bulletContainerSpaced: {flexDirection: 'row', marginTop: 12},
  buttonSpaced: {marginTop: 20},
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  imageContainer: {alignItems: 'center'},
  logo: {height: 40, width: 35},
  subtitle: {marginVertical: 16},
  title: {marginHorizontal: '20%'},
});

export default App;
