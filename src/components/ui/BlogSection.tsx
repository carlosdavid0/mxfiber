'use client';
import Carousel from "react-multi-carousel";

export async function BlogSection() {

    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
                <div className="mx-auto max-w-screen-xl text-start mb-8 lg:mb-12">
                    <h2 className="text-4xl tracking-tight font-normal text-blue-700">
                        MX Notícias: Fique por dentro de tudo!
                    </h2>

                </div>

                {/* <div className='lg:flex items-center gap-6  grid md:grid-cols-3 grid-cols-1 lg:px-10 '>
                    <div className="bg-mx-blue-700 h-[200px] w-full lg:w-[300px] rounded-lg"></div>
                    <div className="bg-mx-blue-700 h-[200px] w-full lg:w-[300px] rounded-lg"></div>
                    <div className="bg-mx-blue-700 h-[200px] w-full lg:w-[300px] rounded-lg"></div>

                </div> */}


                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}

                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 4 ,
                            slidesToSlide: 3,
                            partialVisibilityGutter: 20
                        },
                        mobile: {
                            
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            slidesToSlide: 1,
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 3,
                            slidesToSlide: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    shouldResetAutoplay
                    showDots={false}
                    className="gd-carousel"
                    slidesToSlide={1}
                    ssr={true}
                    swipeable
                >


                  {Array.from({ length: 10 }).map((_, index) => (
                      <div className="bg-mx-blue-700 h-[200px] w-full lg:w-[300px] rounded-lg flex items-center justify-center">
                           <h1 className="text-white"> {index}</h1>
                      </div>
                  ))}
                </Carousel>
            </div>
        </section>
    )
}