'use client'
import Testimonial from '@/components/testimonial'
import TestimonialImg01 from '@/public/images/testimonial-01.jpg'
import TestimonialImg02 from '@/public/images/testimonial-02.jpg'
import TestimonialImg03 from '@/public/images/testimonial-03.jpg'
import TestimonialImg04 from '@/public/images/testimonial-04.jpg'
import TestimonialImg05 from '@/public/images/testimonial-05.jpg'
import TestimonialImg06 from '@/public/images/testimonial-06.jpg'
import TestimonialImg07 from '@/public/images/testimonial-07.jpg'
import TestimonialImg08 from '@/public/images/testimonial-08.jpg'

export default function Testimonials() {

  const testimonials01 = [
    {
      image: TestimonialImg01,
      name: 'Sarah Chen',
      user: '@sarahcrypto',
      link: '#0',
      content: 'The instant settlement feature is a game-changer! No more waiting days for payments to clear. Our cash flow has never been better.',
    },
    {
      image: TestimonialImg02,
      name: 'Marcus Rodriguez',
      user: '@marcuspay',
      link: '#0',
      content: 'Finally, a checkout that accepts stablecoins without the headache. The one-link setup took literally 2 minutes. Incredible!',
    },
    {
      image: TestimonialImg03,
      name: 'Emma Thompson',
      user: '@emmacrypto',
      link: '#0',
      content: 'Zero chargebacks and lower fees? This is exactly what we needed. Our payment disputes dropped to almost nothing.',
    },
    {
      image: TestimonialImg04,
      name: 'David Kim',
      user: '@davidpay',
      link: '#0',
      content: 'The built-in compliance and accounting features save us hours every week. Tax reporting has never been this simple.',
    },
  ]

  const testimonials02 = [
    {
      image: TestimonialImg05,
      name: 'Alex Johnson',
      user: '@alexcrypto',
      link: '#0',
      content: 'We\'ve reduced our payment processing costs by 60% since switching to this checkout. The savings are incredible!',
    },
    {
      image: TestimonialImg06,
      name: 'Lisa Park',
      user: '@lisapay',
      link: '#0',
      content: 'Our international customers love paying with stablecoins. No more currency conversion hassles or delays.',
    },
    {
      image: TestimonialImg07,
      name: 'Michael Brown',
      user: '@mikecrypto',
      link: '#0',
      content: 'The integration was seamless with our existing e-commerce platform. We were up and running in under an hour.',
    },
    {
      image: TestimonialImg08,
      name: 'Jessica Lee',
      user: '@jessicapay',
      link: '#0',
      content: 'Finally, a crypto payment solution that actually works for businesses. The customer experience is flawless.',
    },
  ]

  return (
    <section className="bg-zinc-800">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">Loved by creators, freelancers and businesses using our checkout worldwide</h2>
          </div>
        </div>
        <div className="max-w-[94rem] mx-auto space-y-6">
          {/* Row #1 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
          {/* Row #2 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]" aria-hidden="true">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div >
        </div >
      </div >
    </section >
  )
}