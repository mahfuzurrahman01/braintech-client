import React from 'react';

const Faq = () => {
    return (
        <div className='md:w-3/4 w-11/12 mx-auto'>
            <section className=" bg-gray-200 rounded md:my-10 my-4  text-gray-700">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-3xl font-semibold sm:text-4xl text-gray-500">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8  text-gray-600">Many students are more comfortable engaging in meaningful discussions online than in a classroom. These students might have hearing or speech impairments; speak different languages; have severe social anxiety; or simply need more time to organize their thoughts.</p>
                    <div className="space-y-4">
                        <details className="w-full border border-gray-500 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-gray-800">How does online education work on a day-to-day basis?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">[Answer] Instructional methods, course requirements, and learning technologies can vary significantly from one online program to the next, but the vast bulk of them use a learning management system (LMS) to deliver lectures and materials, monitor student progress, assess comprehension, and accept student work. LMS providers design these platforms to accommodate a multitude of instructor needs and preferences. While some courses deliver live lectures using video conferencing tools, others allow students to download pre-recorded lectures and use message boards to discuss topics. Instructors may also incorporate simulations, games, and other engagement-boosters to enhance learning. Students should research individual programs to find out how and when they would report to class; how lectures and materials are delivered; how and how much they would collaborate with faculty and peers; and other important details. We address many of these instructional methods and LMS capabilities elsewhere in this guide. </p>
                        </details>
                        <details className="w-full border border-gray-500 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can you really earn online degrees in hands-on fields?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400"> Yes and no. While schools do offer online and hybrid programs in these disciplines, students must usually meet additional face-to-face training requirements. Schools usually establish these requirements with convenience in mind. For example, students in fields like nursing, teaching, and social work may be required to complete supervised fieldwork or clinical placements, but do so through local schools, hospitals/clinics, and other organizations. For example, students enrolled in the University of Virginia’s Engineers PRODUCED in Virginia program can complete all their engineering classes online in a live format while gaining practical experience through strategic internships with employers across the state. </p>
                        </details>
                        <details className="w-full border border-gray-500 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is online education as effective as face-to-face instruction?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">Online education may seem relatively new, but years of research suggests it can be just as effective as traditional coursework, and often more so. According to a U.S. Department of Education analysis of more than 1,000 learning studies, online students tend to outperform classroom-based students across most disciplines and demographics. Another major review published the same year found that online students had the advantage 70 percent of the time, a gap authors projected would only widen as programs and technologies evolve. </p>
                        </details>
                        <details className="w-full border border-gray-500 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> Do employers accept online degrees?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">All new learning innovations are met with some degree of scrutiny, but skepticism subsides as methods become more mainstream. Such is the case for online learning. Studies indicate employers who are familiar with online degrees tend to view them more favorably, and more employers are acquainted with them than ever before. The majority of colleges now offer online degrees, including most public, not-for-profit, and Ivy League universities. Online learning is also increasingly prevalent in the workplace as more companies invest in web-based employee training and development programs. </p>
                        </details>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;