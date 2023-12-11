import React from "react";
import "./skills.css";
import HtmlCssJs from "../../assets/html_js_css.png"
import ReactTsNext from "../../assets/framework.png"
import NodeMongodb from "../../assets/frameworks.png" 

const Skills = () => {
    return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          Throughout my journey in web development, I've acquired a diverse skill set that seamlessly connects front-end and back-end expertise. This multifaceted experience enables me to create holistic, innovative digital solutions. My proficiency spans the entire web development spectrum, from crafting captivating user interfaces to architecting robust back-end systems.
        </span>
      
      <div className="skillBars">

        <div className="skillBar">
          <img src={HtmlCssJs} alt="HtmlCssJs" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front-End Mastery: Crafting Engaging Web Interfaces with HTML, CSS, JavaScript, and Tailwind CSS.</h2>
            <p>My expertise in web development is grounded in a solid foundation of HTML, CSS, and JavaScript. These core technologies allow me to craft and fine-tune the structure, design, and interactivity of web applications. Moreover, I've delved into the power of Tailwind CSS, a utility-first CSS framework that seamlessly complements these technologies. This comprehensive skill set enables me to create visually engaging and highly functional user interfaces that lay a strong foundation for dynamic web applications.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={ReactTsNext} alt="ReactTsNext" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Modern Web Development Expertise: Leveraging React, Next.js, and TypeScript for High-Performance Applications.</h2>
            <p>Building upon my front-end expertise, I've expanded into the world of modern web development with React, Next.js, and TypeScript. React empowers me to construct interactive and efficient user interfaces, while Next.js elevates these applications by enabling server-side rendering and seamless routing. My proficiency in TypeScript ensures strong type checking and enhanced code maintainability throughout the development process. This combination of technologies enables me to construct robust, high-performance web applications.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={NodeMongodb} alt="NodeMongodb" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Bridging Front-End to Back-End: Seamless Integration with API, Node.js, and MongoDB.</h2>
            <p>My technical knowledge extends beyond the front end into the realm of back-end development. I specialize in API integration, leveraging my skills in Node.js and MongoDB. Node.js provides a robust and efficient server-side environment, allowing for the creation of scalable web applications. Additionally, my experience with MongoDB enables the effective management and querying of data in NoSQL databases. These competencies facilitate seamless integration of data and services, forming a crucial bridge between the front-end and back-end components of web applications.</p>
          </div>
        </div>

      </div>
    
    </section>
  );
}

export default Skills;