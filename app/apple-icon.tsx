import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: '#285943',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f4f1ea',
          fontFamily: 'serif',
          fontWeight: 700,
          borderRadius: 40,
          letterSpacing: '-3px',
        }}
      >
        UP.
      </div>
    ),
    {
      ...size,
    }
  )
}
