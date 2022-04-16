import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { StyleSheet, Animated, View } from 'react-native'
import { Asset } from 'expo-asset'
import * as SplashScreen from 'expo-splash-screen'
import PropTypes from 'prop-types'

AnimatedAppLoader.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any.isRequired
}

AnimatedSplashScreen.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any.isRequired
}

/* Source: https://github.com/expo/expo/tree/master/packages/expo-splash-screen#-configure-android */
SplashScreen.preventAutoHideAsync()
  .then((result) => console.log('SplashScreen.preventAutoHideAsync() succeeded'))
  .catch(console.warn)

const splashDuration = 3000

export function AnimatedAppLoader ({ children, image }) {
  const [isSplashReady, setSplashReady] = useState(false)

  const startAsync = useCallback(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => Asset.fromModule(image).downloadAsync(),
    [image]
  )

  if (!isSplashReady) {
    startAsync().then(() => setSplashReady(true))
    return null
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>
}

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
      /* See https://github.com/expo/expo/tree/master/packages/expo-splash-screen#-api */
      await SplashScreen.hideAsync()
      // Load stuff
      // Splash(getAppStack())
      await Promise.all([])
    } catch (e) {
      // handle errors
      console.log('Error animating splash screen: ' + e)
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
              opacity: animation
            }
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
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
