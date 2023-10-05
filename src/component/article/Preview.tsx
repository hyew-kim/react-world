'use client';
import Image from 'next/image';
import { use, useEffect } from 'react';
import { getData } from '@/api';

const AUTHOR_IMG_SIZE: number = 32;
export function Preview() {
  // useEffect(() => {
  //   const a: any = use(getData());
  //   console.log(a);
  // }, []);
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="/profile/eric-simons">
          <Image
            src="https://api.realworld.io/images/demo-avatar.png"
            alt="author-img"
            width={AUTHOR_IMG_SIZE}
            height={AUTHOR_IMG_SIZE}
          />
        </a>
        <div className="info">
          <a href="/profile/eric-simons" className="author">
            Eric Simons
          </a>
          <span className="date">January 20th</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <a href="/article/how-to-build-webapps-that-scale" className="preview-link">
        <h1>How to build webapps that scale</h1> {/* title */}
        <p>This is the description for the post.</p> {/* description */}
        <span>Read more...</span>
        <ul className="tag-list">
          <li className="tag-default tag-pill tag-outline">realworld</li>
          <li className="tag-default tag-pill tag-outline">implementations</li>
        </ul>
      </a>
    </div>
  );
}
