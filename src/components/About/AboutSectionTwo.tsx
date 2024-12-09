import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Reliable Performance
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We ensure your website runs smoothly and efficiently, providing a seamless experience for your visitors.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Dedicated Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our team is here to assist you every step of the way, offering prompt and effective solutions tailored to your needs.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                User-Friendly Technologies
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Utilizing popular platforms like Shopify, WordPress, and Next.js, we develop websites and eCommerce stores that are not only easy to manage but also designed to scale alongside your business growth.                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 mt-6 border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="gap-8 md:columns-2 sm:columns-1 xs:columns-1 column-sm">
            <div className="mt-3 py-5">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">History</h3>
            <p className="text-base !leading-relaxed text-body-color">
            Founded in 2012, Open Tech Innovations began as a small team with a vision to revolutionize digital marketing. Over the years, we've expanded our offerings to include web design, front-end development, SEO, automations, integrations, and AI services. Our journey has been marked by continuous growth and adaptation to the ever-evolving digital landscape. By embracing cutting-edge technologies, we've been able to deliver smarter, more efficient solutions that drive substantial growth for our clients.            </p>
            </div>
            <div className="mt-3 py-5">
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Innovation with AI</h3>
            <p className="text-base !leading-relaxed text-body-color">
            Innovation is at the core of Open Tech Innovations. We leverage AI to optimize operations, personalize marketing efforts, and provide actionable insights that drive growth. Our AI tools enhance user experiences and streamline processes, ensuring our clients benefit from smarter, more efficient solutions. By integrating AI into our services, we offer a competitive edge that helps businesses thrive in the digital landscape.      </p>      </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
