import { useContext } from "react";
import { ModeContext } from "../../contexts/modeContext";
import { testimonials, TestimonialType } from "../../data/testimonials";

export function Testimonials({}) {
    const mode = useContext(ModeContext);
    return (
        <section id="testimonials" className="bg-grey-light-50 px-28 py-24 flex flex-col gap-12">
            <div className="self-center text-center flex flex-col gap-4">
                <span className="rounded-xl bg-grey-light-200 px-5 py-1 text-body-3-all text-grey-light-600 self-center">Testimonials</span>
                <p className="text-subtitle-all text-grey-light-600">What poeple have said about me</p>
            </div>
            <div>
                <ul className="grid grid-cols-3 gap-12">
                    {
                        testimonials.map(testimonial => {
                            return <li key={testimonial.name}>
                                <Testimonial testimonial={testimonial} />
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

function Testimonial({testimonial}: {testimonial: TestimonialType}) {
    return (
        <div className="bg-grey-light-default shadow-md rounded-xl p-12 flex flex-col gap-6 items-center">
            <img src={testimonial.imageUrl || '/images/testifiers/avatar.png'} alt={testimonial.name} className="w-16 h-16 rounded-full" />
            <p className="text-body-2-all text-grey-light-600">
                "{testimonial.message}"
            </p>
            <div className="flex flex-col gap-1 items-center">
                <span className="text-subtitle-all font-semibold text-grey-light-900">{testimonial.name}</span>
                <span className="text-body-3-all text-grey-light-600">{testimonial.title}</span>
            </div>
        </div>
    );
}