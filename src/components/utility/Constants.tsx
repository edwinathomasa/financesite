export const MOVING_IMAGES_CONFIG = {
  DEFAULT_SPEED: 2000,
  TRANSITION_DURATION: 500,
}

export const IMAGE_CONFIG = {
  DEFAULT_SIZE: 667,
  BORDER_RADIUS: 'var(--border-radius-md)',
  SHADOW: 'var(--shadow-md)',
}

export const NAVIGATION_CONFIG = {
  LOGO_HEIGHT: 80,
  PADDING_TOP: 80,
}

export const APP_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  ACCOUNTING: '/accounting',
  RESOURCES: '/resources',
  CONTACT: '/contact',
} as const

export const HOME_IMAGES = [
  '/src/assets/homeAssets/nyc.jpg',
  '/src/assets/homeAssets/mumbai.jpg',
  '/src/assets/homeAssets/kochi.jpg',
] as const