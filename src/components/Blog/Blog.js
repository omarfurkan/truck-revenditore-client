import React from 'react';
import './Blog.css'


const Blog = () => {
    return (
        <div className='blog container py-5'>
            <h2 className='text-center my-5'>Ques-Ans</h2>
            <div>
                <h3>Ques:1 Difference between javascript and node.js?</h3>
                <p>Javascript is a Scripting language and NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascriptto be run on the server-side.</p>
                <p>Javascript is a programming language that is used for writing scripts on the website.NodeJS is a Javascript runtime environment. </p>
                <p>It is basically used on the client-side.NodeJs mostly used on the server-side.</p>
                <p>Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.</p>
                <p>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.On the other hand V8 is the Javascript engine inside of node.js that parses and runs Javascript.  </p>
                <p>Javascript is used in frontend development.Nodejs is used in server-side development.</p>
                <p>	Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</p>
                <p>	Javascript is the upgraded version of ECMA script that uses Chrome V8 engine written in C++.Nodejs is written in C, C++ and Javascript.</p>
                <h3>Ques: 2 When should we use NodeJS and when should we use MongoDB?</h3>
                <p>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.</p>
                <p>Nodejs is a Javascript engine that we can write any application we want with by programming in the Javascript language. It runs our Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that  use MongoDB for storing data.</p>
                <p>We should use Nodejs for any project that needs a programming environment and a runtime library that offers for basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc. So, if I want to write some kind of stand-alone program or server in Javascript, then I can use nodejs for it.</p>
                <p>On the other hand, we should use MongoDB if our application needs the ability to persistently store data in a way that we can efficiently query or update it later, then we would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB on AWS. Different databases have different strengths.</p>
                <h3>Ques: 3 Differences between sql and nosql databases ?</h3>
                <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.</p>
                <p>SQL databases have fixed or static or predefined schema.NoSQL have dynamic schema</p>
                <p>SQL databases are not suited for hierarchical data storage.NoSQL databases are best suited for hierarchical data storage.</p>
                <p>SQL databases are best suited for complex queries.NoSQL databases are not so good for complex queries</p>
                <p>SQL is vertically Scalable and noSQL is horizontally scalable</p>
                <p>SQL follows ACID (atomicity, consistency, isolation and duration) property. NoSQl Follows CAP(consistency, availability, partition tolerance). </p>
            </div>
        </div>
    );
};

export default Blog;