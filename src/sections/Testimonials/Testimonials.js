import { Section, TestimonialBox } from '../../components'
import './Testimonials.css'
import TestimonialsData from './TestimonialsData'

const Testimonials = () => {
    const testimonials = TestimonialsData.map(testimonial => {
        return <TestimonialBox key={testimonial.id} img={testimonial.img} rate={testimonial.rate} full_name={testimonial.full_name} title={testimonial.title} content={testimonial.content} />
    })
    return (
        <Section name="testimonials" title="Testimonials" grey={true}>
            {testimonials}
        </Section>
    )
}

export default Testimonials