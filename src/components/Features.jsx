import React from 'react';
import { BookOpen, Clock, Users, Award } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <BookOpen className="h-12 w-12 text-indigo-700" />,
            title: "Expert-Led Courses",
            description: "Learn from industry professionals and top educators with carefully curated content."
        },
        {
            icon: <Clock className="h-12 w-12 text-indigo-700" />,
            title: "Flexible Schedule",
            description: "Access courses anytime, anywhere, and learn at your own pace with lifetime access."
        },
        {
            icon: <Users className="h-12 w-12 text-indigo-700" />,
            title: "Community Support",
            description: "Join a vibrant community of learners to share knowledge, collaborate, and grow."
        },
        {
            icon: <Award className="h-12 w-12 text-indigo-700" />,
            title: "Certification",
            description: "Earn recognized certificates to showcase your skills and boost your career."
        }
    ];

    return (
        <div className="text-center mb-12 mx-auto px-4 py-16 md:py-24 lg:px-30 bg-indigo-50 rounded-lg">
            <p className="inline-block text-sm font-medium bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full mb-4">
                Why Choose Learnly
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Features You'll Love</h2>
            <p className="text-indigo-700 max-w-2xl mx-auto mb-12">
                We make learning simple, flexible, and rewarding
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                        <p className="text-indigo-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
