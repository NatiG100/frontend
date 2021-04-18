import React from 'react';
import BookList from '../Book/components/BookList';

const books = [
    {
        id: 1,
        title: "Popular Windows OS training" ,
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
        linkTxt: "Popular Library Genesis"
    },
    {
        id: 2,
        title: "Popular Programming" ,
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
        linkTxt: "Popular Amazon"
    },
    {
        id: 3,
        title: "Popular Windows OS training" ,
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
        linkTxt: "Popular Library Genesis"
    },
    {
        id: 4,
        title: "Popular Programming" ,
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
        linkTxt: "Popular Amazon"
    }
];
const PopularPage = () => {
    return (
        <div className="container ">
            <BookList books={books}/>
        </div>
    );
};
export default PopularPage;