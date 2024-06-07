import { useState } from 'react';
import { ImageList, ImageListItem, Box } from "@mui/material";


const PackagesImages = ({packageDetails}) => {
    const [mainImage, setMainImage] = useState(packageDetails.mainImage || packageDetails.images[0]);
    return (
        <div className="flex flex-col items-center md:items-start">
            {/* Main Image Display */}
            <Box sx={{ width: '100%', maxWidth: 800 }}>
                <img
                    src={mainImage}
                    alt="Main"
                    className="w-full h-[500px] object-contain"
                    loading="lazy"
                />
            </Box>

            {/* Thumbnails Carousel */}
            <Box sx={{ width: '100%', maxWidth: 800, overflowX: 'auto', marginTop: 2 }}>
                <ImageList sx={{ display: 'flex', flexWrap: 'nowrap' }} cols={packageDetails.images.length} gap={8}>
                    {packageDetails.images.map((image, index) => (
                        <ImageListItem key={index} sx={{ minWidth: 100 }}>
                            <img
                                src={`${image}?w=100&h=100&fit=crop&auto=format`}
                                alt={`Thumbnail ${index}`}
                                className="cursor-pointer"
                                onClick={() => setMainImage(image)}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    );
};

export default PackagesImages;