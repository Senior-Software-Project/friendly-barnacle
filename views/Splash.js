import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { StyleSheet, Animated, Text, Button, Platform, View, TouchableOpacity } from 'react-native'
import AppLoading from 'expo-app-loading'
import { Asset } from 'expo-asset'
import * as SplashScreen from 'expo-splash-screen'
import * as Updates from 'expo-updates'
import { styles } from './Styles'
import PropTypes from 'prop-types'
import getAppStack from '../App'

Splash.propTypes = {
  navigation: PropTypes.object
}

AnimatedAppLoader.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any.isRequired
}

AnimatedSplashScreen.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any.isRequired
}

SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
})

const splashDuration = 3000
/**
 * This function creates and reloads the splash screen
 * @param {*} navigation
 * @returns splash screen
 */
export function Splash ({ navigation }) {
  const onReloadPress = useCallback(() => {
    if (Platform.OS === 'web') {
      location.reload()
    } else {
      Updates.reloadAsync()
    }
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pretty Cool!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Return to Home</Text>
      </TouchableOpacity>
      <Button title='Run Again' onPress={onReloadPress} />
    </View>
  )
}
/**
 * @param {*} children, image
 * @returns instructions for hiding splash screen
 */
export function AnimatedAppLoader ({ children, image }) {
  const [isSplashReady, setSplashReady] = useState(false)

  const startAsync = useCallback(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => Asset.fromModule(image).downloadAsync(),
    [image]
  )

  const onFinish = useCallback(() => setSplashReady(true), [])

  if (!isSplashReady) {
    return (
      <AppLoading
        // Instruct SplashScreen not to hide yet, we want to do this manually
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    )
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>
}
/**
 * This function determines how long the splash screen will be displayed
 * @param {*} children image
 * @returns style of splash screen
 */
function AnimatedSplashScreen ({ children, image }) {
  const animation = useMemo(() => new Animated.Value(1), [])
  const [isAppReady, setAppReady] = useState(false)
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: splashDuration,
        useNativeDriver: true
      }).start(() => setAnimationComplete(true))
    }
  }, [isAppReady])

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync()
      // Load stuff
      Splash(getAppStack())
      await Promise.all([])
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true)
    }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents='none'
          style={[
            StyleSheet.absoluteFill,
            {
              // backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation
            }
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              // resizeMode: Constants.manifest.splash.resizeMode || 'contain',
              transform: [
                {
                  scale: animation
                }
              ]
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  )
}
