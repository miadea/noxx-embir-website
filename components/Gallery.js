import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('./_gallery.js'),
  {
    ssr: false
  }
)

export default DynamicComponent;
