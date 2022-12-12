import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl px-10 pt-5'>1. What is Context API?</h1>
                <p className='px-10 py-2'><span className='text-xl text-center underline'>Ans:-</span> Context is a built-in API introduced in ​​React. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.</p>
            </div>
            <div>
                <h1 className='text-2xl px-10 pt-5'>2. What Are Semantic HTML Tags?
                </h1>
                <p className='px-10 py-2'><span className='text-xl text-center underline'>Ans:-</span> Semantic HTML tags are tags that define the meaning of the content they contain.
                    For example, tags like header, article, and footer are semantic HTML tags. They clearly indicate the role of the content they contain.
                    On the other hand, tags like div and span are typical examples of non-semantic HTML elements. They serve only as content holders but give no indication as to what type of content they contain or what role that content plays on the page.</p>
            </div>
            <div>
                <h1 className='text-2xl px-10 pt-5'>3. What is the inline element?</h1>
                <p className='px-10 py-2'><span className='text-xl text-center underline'>Ans:-</span> There are two display values: block and inline. A block-level element always starts on a new line and takes up the full width available. An inline element does not start on a new line and it only takes up as much width as necessary.</p>
            </div>
        </div>
    );
};

export default Blogs;