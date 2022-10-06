import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabItem from './TabItem';

function CustomNavigation({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem key={index}
          type={label}
          active={isFocused}
          onPress={onPress}
          onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    height: 76,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    backgroundColor: 'black',
    shadowColor: '#F6F6F6',
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
})


export default CustomNavigation;