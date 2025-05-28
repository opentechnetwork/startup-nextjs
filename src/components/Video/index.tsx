"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ReactModal from "react-modal";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Unlock Your Business Potential"
          paragraph="At Open Tech Innovations, we're here to transform your digital presence and drive success. Our team of experts is ready to guide you every step of the way, offering tailored solutions that fit your unique needs. Dive into the possibilities and see how we can elevate your business to new heights."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/video/video.jpg"
                  alt="video image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* React Modal Implementation */}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false} // Ensure accessibility
      >
        <div>
          <iframe
            width="560"
            height="315"
            src="https://youtu.be/DDftVfk0KAc"
            title="YouTube video player - Introduction to React"
            style={{ border: "none" }} // Replaces the deprecated frameBorder attribute
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 rounded bg-primary px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </ReactModal>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
