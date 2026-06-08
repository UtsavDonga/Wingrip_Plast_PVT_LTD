export const metadata = {
  title: 'Wingrip Studio',
  robots: { index: false, follow: false },
}

// The Sanity Studio renders its own full-screen UI, so this layout deliberately
// omits the site header, footer, and floating actions.
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children
}
