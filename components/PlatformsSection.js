import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import Link from 'next/link';
import React from 'react';



const PlatformsSection = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
    <section className="c-content-heading">
        <div className="container">
            <div className="c-content-heading__header">
                <h2 className="c-content-heading__header__heading">{blok.Heading}</h2>
                <p className="c-content-heading__header__text">{blok.SubHeading}</p>
            </div>
        </div>
    </section>
    <section className="c-content">
        <div className="container">
            {blok.Platforms?.map((nestedBlok, index) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} count={index + 1} />
            ))}
        </div>
    </section>
    <section className="c-journey">
        <div className="container">
            <h2 className="c-journey__heading">{blok.BottomTextHeading}</h2>
            <p className="c-journey__peragraph">{blok.BottomTextSubHeading}</p>
            <p className="c-journey__contact">
                {blok.BottomTextContact1}
                <Link href="/contact" passHref>
                <a className="text-decoration-none text-reset">
                    <strong> Contact us </strong>
                </a>
                </Link>
                {blok.BottomTextContact2}
            </p>
        </div>
    </section>
    </div>
  )
}

export default PlatformsSection