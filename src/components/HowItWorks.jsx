import React from 'react';
import { Search, BookOpen, Video, Star } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Search className="h-8 w-8 text-indigo-600 group-hover:text-white transition" />,
            title: "Explore Courses",
            description: "Browse a wide variety of expert-led courses tailored to your interests."
        },
        {
            icon: <BookOpen className="h-8 w-8 text-indigo-600 group-hover:text-white transition" />,
            title: "Enroll",
            description: "Sign up and get instant access to your chosen course materials."
        },
        {
            icon: <Video className="h-8 w-8 text-indigo-600 group-hover:text-white transition" />,
            title: "Learn",
            description: "Watch videos, complete tasks, and interact with expert instructors."
        },
        {
            icon: <Star className="h-8 w-8 text-indigo-600 group-hover:text-white transition" />,
            title: "Achieve",
            description: "Earn certificates and proudly showcase your skills to the world."
        }
    ];

    return (
        <section className="py-20 px-6 bg-indigo-50">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm font-semibold text-indigo-700 bg-indigo-100 inline-block px-4 py-1 rounded-full mb-3">
                    Simple Process
                </p>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">How Learnly Works</h2>
                <p className="text-gray-600 mb-12 max-w-xl mx-auto">
                    Learn in just a few guided steps—easy, effective, and designed for your success.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 group-hover:bg-indigo-600 mb-4 transition">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
