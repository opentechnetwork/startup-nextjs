import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Innovative Solutions for Startups and Established Businesses."
                paragraph="Our mission is to empower small to medium-sized businesses with advanced technology solutions, focusing on enhancing online presence and security through interactive discussions and expert strategies."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Responsive Web Design" />
                    <List text="SEO Strategies" />
                    <List text="E-commerce Solutions" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Digital Marketing" />
                    <List text="Web Development" />
                    <List text="Analytics and Reporting" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-6 gap-5 columns-1">
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Values & Mission</h3>
        <p className="text-base !leading-relaxed text-body-color">Our mission is to empower businesses by providing comprehensive digital solutions that drive growth and efficiency. We value transparency, innovation, and measurable success, ensuring our clients understand the impact of our efforts. At Open Tech Innovations, we are committed to delivering exceptional service and fostering long-term partnerships with our clients
        </p>
        </div>
        <div className="py-5 border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="gap-8 md:columns-2 sm:columns-1 xs:columns-1 column-sm">
            <div className="mt-3 py-5">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Introduction</h3>
              <p className="text-base !leading-relaxed text-body-color">
                Open Tech Innovations is a pioneer in the digital landscape, offering a comprehensive suite of services that blend human expertise with advanced AI technology. Since our inception in 2012, we've been committed to transforming businesses by enhancing their online presence and operational efficiency through innovative solutions.
              </p>
            </div>
            <div className="mt-3 py-5">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Unique Selling Points</h3>
              <p className="text-base !leading-relaxed text-body-color">
                What sets us apart is our holistic approach to digital solutions. By integrating web design, front-end development, SEO, automations, integrations, and AI, we provide a seamless experience that enhances every aspect of your digital presence. Our team of experts collaborates closely with clients to tailor strategies that meet their unique needs and challenges, ensuring optimal results.            </p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutSectionOne;
