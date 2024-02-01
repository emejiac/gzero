import * as rdd from 'react-device-detect'

export const isMobileDevice = () => {
  const userAgent = rdd.getUA
  const detectedDevice = rdd.deviceDetect(userAgent)

  return detectedDevice.isMobile === true
}
