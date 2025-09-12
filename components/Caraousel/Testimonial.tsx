import { TestimonialProps } from "@/interface/testimonial";
import Image from "next/image";
import { FC } from "react"
import { FaStar } from "react-icons/fa";

interface Props {
    data: TestimonialProps[]
}

const TestimonialCarausel: FC<Props> = ({ data }) => {
    const loopData = [...data, ...data, ...data]

    return (
        <div className="flex flex-col gap-5">
            <div style={{ maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)" }} className="relative flex justify-around gap-5 overflow-hidden shrink-0">
                <div className="max-w-full mx-auto">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div className="animate-scrollReverse flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                            {
                                loopData.map((item, index) => (
                                    <div key={index} className="card-testimonial flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                        <p className="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                            "{item.testimonial}"
                                        </p>
                                        <div className="flex overflow-hidden md:h-[28%] h-[30%] gap-1 w-full border-t-[1.2px] border-black/10">
                                            <div className="flex items-center w-3/4 gap-3 px-4 py-3">
                                                <div className="flex flex-col items-start justify-start flex-1 gap-0">
                                                    <h5 className="text-base font-normal md:text-md">{item.name}</h5>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center max-w-full mx-auto">
                                                <div className="rating-card">
                                                    <FaStar color="#f2b100" />
                                                    {item.rating}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)" }} className="relative flex justify-around gap-5 overflow-hidden shrink-0">
                <div className="max-w-full mx-auto">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div className="animate-scroll flex flex-nowrap w-max min-w-full hover:[animation-play-state:paused] overflow-hidden relative gap-5 justify-around shrink-0">
                            {
                                loopData.map((item, index) => (
                                    <div key={index} className="card-testimonial flex flex-col justify-between h-[220px] rounded-sm border-[1.2px] border-white/20 dark:border-black/20 shrink-0 grow-0 md:w-[440px] sm:w-[320px] w-[280px]">
                                        <p className="px-5 py-5 tracking-tight text-md font-extralight md:text-lg">
                                            "{item.testimonial}"
                                        </p>
                                        <div className="flex overflow-hidden md:h-[28%] h-[30%] gap-1 w-full border-t-[1.2px] border-black/10">
                                            <div className="flex items-center w-3/4 gap-3 px-4 py-3">
                                                <div className="flex flex-col items-start justify-start flex-1 gap-0">
                                                    <h5 className="text-base font-normal md:text-md">{item.name}</h5>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center max-w-full mx-auto">
                                                <div className="rating-card">
                                                    <FaStar color="#f2b100" />
                                                    {item.rating}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCarausel;
