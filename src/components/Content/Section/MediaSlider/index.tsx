import { IImage } from 'graphql-cms/types'
import { useEffect, useRef, useState } from 'react'
import { Flex } from 'theme-ui'
import ResponsiveImage from '~/components/Generic/Image'
import { isMobileDevice } from '~/utils'

export interface MediaSlide {
  sys: {
    id: string
  }
  title: string
  media: IImage
}

interface Props {
  autoplaySpeed: number
  slides: MediaSlide[]
}

const MediaSlider: React.FC<Props> = ({ autoplaySpeed = 0, slides }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = async () => {
      const mobile = (await isMobileDevice()) || window.innerWidth < 832
      setIsMobile(mobile)
    }
    checkMobile()
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any | null>(null)
  const speed = autoplaySpeed * 1000

  const mediaVerticalPosition = () => {
    const positions = ['top', 'center', 'bottom']
    const random = Math.floor(Math.random() * positions.length)
    return positions[random]
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        padding: ['30px 0px', '30px 0px', '60px 0px'],
        '& .slick-list': {
          maxHeight: '700px',
        },
      }}
    >

    </Flex>
  )
}

export default MediaSlider
