import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
        original: 'images/peaceful-hacienda-sonora.png',
        thumbnail: 'images/peaceful-hacienda-sonora.png',
        description: `Peaceful Hacienda porch. (San Bernardo, Sonora, Mexico)`,
        originalHeight: '450px',
    },
    {
        original: 'images/motorbiking-hobby.jpg',
        thumbnail: 'images/motorbiking-hobby.jpg',
        description: `Off-road motorbiking in Sonora. (2024)`,
        originalHeight: '450px',
    },
    {
        original: 'images/sonoran-ranch.png',
        thumbnail: 'images/sonoran-ranch.png',
        description: `Sonoran Ranch. (2024)`,
        originalHeight: '450px',
    },
    {
        original: 'images/pitaya-fruit-sonoran-mountains.png',
        thumbnail: 'images/pitaya-fruit-sonoran-mountains.png',
        description: `A juicy Pitaya fruit in the Madre Occidental Mountain Range.`,
        originalHeight: '450px',
    },
    {
        original: 'images/ruins-kyoto-japan.png',
        thumbnail: 'images/ruins-kyoto-japan.png',
        description: `Old ruins in the mountains of Kyoto, Japan. (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/golden-temple-kyoto-japan.png',
        thumbnail: 'images/golden-temple-kyoto-japan.png',
        description: `Kinkkaku-Ju in Kyoto, Japan. (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/yukatas-downtown-osaka.png',
        thumbnail: 'images/yukatas-downtown-osaka.png',
        description: `Yukatas in downtown Osaka, Japan. (2019)`,
        originalHeight: '450px',
    },
    {
        original: 'images/carne-asada-grill.png',
        thumbnail: 'images/carne-asada-grill.png',
        description: `Carne Asada on the Ranch. (2024)`,
        originalHeight: '450px',
    },
    {
        original: 'images/mayo-river-sonora.png',
        thumbnail: 'images/mayo-river-sonora.png',
        description: `The Mayo River, San Bernardo, Sonora.`,
        originalHeight: '450px',
    }

];

function GalleryPage() {
    return (
    <>
    <h2>Gallery Collection</h2>
    <p> This is a collection of personal photographs from travels, my favorite spots to enjoy nature, and hobbies. Feel free to flip through the collection of photographs by pressing the arrows below. </p>
    <article> 
        <ImageGallery items={images} />
    </article>
    </>
    );
}
export default GalleryPage;