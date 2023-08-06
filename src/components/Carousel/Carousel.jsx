import React from 'react'
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';

const css = `
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
`;

const Carousel = () => {
    return (
        <>
            <SlCarousel className="vertical" loop pagination orientation="vertical">
                <SlCarouselItem>
                    <img
                        alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                        src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Big_Banner_N_2_1_1_.jpg"
                    />
                </SlCarouselItem>
                <SlCarouselItem>
                    <img
                        alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
                        src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Big_Banner_11_1_.jpg"
                    />
                </SlCarouselItem>
                <SlCarouselItem>
                    <img
                        alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
                        src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Big_Banner_12_1_.jpg"
                    />
                </SlCarouselItem>
                <SlCarouselItem>
                    <img
                        alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
                        src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Big_Banner_5_1_.jpg"
                    />
                </SlCarouselItem>
            </SlCarousel>
            <style>{css}</style>
        </>
    )
}

export default Carousel