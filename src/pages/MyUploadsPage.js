import React from 'react';

import BookList from '../Book/components/BookList';

const books = [
    {
        title: "Windows OS training" ,
        description: "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."+
                    "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."
                ,
        linkTxt: "Library Genesis"
    },
    {
        title: "Programming" ,
        description: "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."+
                    "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."
                ,
        linkTxt: "Amazon"
    },
    {
        title: "Windows OS training" ,
        description: "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."+
                    "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."
                ,
        linkTxt: "Library Genesis"
    },
    {
        title: "Programming" ,
        description: "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."+
                    "Get in-depth exam prep for Exam 70-271, a core "+
                    "requirement for MCDST certification on Microsoft"+
                    "Windows XP-as you build real-world job skills. "+
                    "The kit includes 425 practice questions, full review"+
                    ", case studies, troubleshooting labs, trial software, and more."
                ,
        linkTxt: "Amazon"
    }
];
const MyUploadsPage = () => {
    return (
        <div className="container ">
            <BookList books={books}/>
        </div>
    );
};
export default MyUploadsPage;