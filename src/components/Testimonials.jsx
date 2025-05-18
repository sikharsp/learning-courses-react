import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            location: "New York",
            image: "/hero.jpg",
            content: "This platform transformed how I learn. The courses are engaging and the instructors are top-notch!",
            rating: 5
        },
        {
            name: "David Chen",
            location: "San Francisco",
            image: "/api/placeholder/64/64",
            content: "Flexible learning at my own pace helped me balance work and study. Highly recommend the platform.",
            rating: 5
        },
        {
            name: "Maria Rodriguez",
            location: "Chicago",
            image: "/api/placeholder/64/64",
            content: "Wide variety of courses and excellent support. I’ve gained skills that boosted my career.",
            rating: 4
        }
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24 px-4 md:px-8 lg:px-16">
            <div className="text-center mb-12">
                <p className="inline-block text-sm font-medium bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full mb-4">
                    Student Testimonials
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    What Our Students Say
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Real stories from learners who achieved their goals through our platform.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl border shadow hover:shadow-lg transition duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < testimonial.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"}`}
                                />
                            ))}
                        </div>

                        <p className="text-gray-700 text-sm leading-relaxed">
                            “{testimonial.content}”
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
