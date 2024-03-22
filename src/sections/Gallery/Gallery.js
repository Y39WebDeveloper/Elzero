import { GalleryBox, Section } from '../../components'
import './Gallery.css'
import GalleryData from './GalleryData'

const Gallery = () => {
    const GalleryImgs = GalleryData.map(img => <GalleryBox key={img.id} img={img.img} /> )
    return (
        <Section name="gallery" grey={true} title="Gallery" >
            {GalleryImgs}
        </Section>
    )
}

export default Gallery