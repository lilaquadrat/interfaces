export interface MediaMetadata {
  /**
   * e.g. 'untouched' or 'thumbnail_250' or 'optimized'
   */
  type?: string
  width?: number
  height?: number
  ratio?: number
  orientation?: 'landscape' | 'portrait' | 'square' | 'unknown'
  /**
   * in bytes
   */
  size?: number
  mimetype?: string
  copyright?: string
  tags?: string[]
}
