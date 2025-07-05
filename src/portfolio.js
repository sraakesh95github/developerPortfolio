/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mayssa Elloumi",
  title: "Hey y'all, I'm Mayssa",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1WKJ_iCsCoY52wPpmoraDOFJyyhwKg81O/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharishi International University",
      logo: require("./assets/images/MIULogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "April 2024 - December 2025",
      desc: "A curriculum focused on practical and enterprise-ready skills. Key courses include Enterprise Architecture, Software Engineering, Cloud Computing, Algorithms, and Relational Database Management Systems (RDBMS), equipping me with the foundations for scalable, secure, and efficient software systems.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "École Nationale des Sciences de l'Informatique",
      logo: require("./assets/images/ENSILogo.jpg"),
      subHeader: "Master of Science in Daata Science",
      duration: "May 2021 - September 2022",
      desc: "Focused on Machine Learning, Deep Learning, Data Modeling & Design, Financial Data Science, and Data Processing. Conducted advanced research in cybersecurity and peer-to-peer energy exchange, culminating in the publication of an IEEE research paper on secure transactions in electric vehicle networks.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "École Nationale des Sciences de l'Informatique",
      logo: require("./assets/images/ENSILogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - September 2022",
      desc: "Built strong foundations in software development, algorithms, and systems programming through rigorous theoretical and practical coursework.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (Full Stack)",
      company: "DECADE",
      companylogo: require("./assets/images/DEACADELogo.jpg"),
      date: "September 2023 – April 2024",
      desc: "JAVA/JEE, SpringBoot, SAP Hybris, JavaScript, ReactJS,  MongoDB, IntelliJ, Git, bucket.",
      descBullets: [
        "Debugged and enhanced full-stack geolocation services in the store locator feature using Java, Spring Boot (backend), & ReactJs (frontend), integrated with AWS Lambda to improve user experience & increase store traffic",
        "Implemented RESTful APIs and microservices architecture to support various frontend functionalities",
        "Developed and tested RESTful APIs with Spring Boot and Postman for e-commerce functionalities, ensuring data accuracy and performance while implementing automated integration tests using JUnit",
        "Resolved a login issue for newly created fidelity accounts, where users were unable to log in due to a network layer problem. Diagnosed and fixed the issue by debugging the authentication flow, improving account registration success and reducing login errors by 30%"
      ]
    },
    {
      role: "Software Developer",
      company: "RGI Insurance",
      companylogo: require("./assets/images/RGIInsuranceCropped.PNG"),
      date: "May 2017 – May 2018",
      desc: "Java, Spring Boot, AngularJS, OracleDB, Apache Kafka, JMS, AWS CodeCommit, AWS CodeBuild, AWS CodeDeploy, JUnit, Selenium, Microservices Architecture, Repository Design Pattern, In-memory Caching, CI/CD Pipelines",
      descBullets: [
  "Optimized insurance claims processing systems by implementing custom validation logic in Java & Spring Boot.",
  "Collaborated with cross-functional teams to enhance system scalability during high insurance claim volumes by optimizing OracleDB queries and introducing caching mechanisms in Spring Boot services.",
  "Integrated Kafka into the claim validation subsystem to enable real-time, scalable processing of submitted insurance claims, decoupling request submission from synchronous backend processing.",
  "Decomposed legacy monolithic services into modular Spring Boot microservices, enabling independent deployment, improved maintainability, and horizontal scalability.",
  "Implemented JMS-based messaging for critical fraud detection workflows to ensure guaranteed delivery and transactional integrity.",
  "Developed and implemented CI/CD pipelines using AWS CodeCommit, CodeBuild, and CodeDeploy for Java and Spring Boot apps, reducing deployment time by 40%.",
  "Engineered role-based access controls for internal policy and claims platforms using Java, AngularJS, and AWS RDS (OracleDB), improving security compliance.",
  "Built advanced search functionality for insurance customer records using Java and OracleDB, applying the Repository Design Pattern to ensure clean separation between business and data layers.",
  "Refactored service controller logic using query optimization and in-memory caching, reducing claim lookup latency and improving customer service responsiveness.",
  "Wrote automated unit and integration tests using JUnit and Selenium to validate critical application components and ensure release stability.",
  "Participated in Agile ceremonies and performed cross-functional code reviews to improve team delivery cadence and code quality."
]
    },
    {
      role: "Research Engineer",
      company: "University of Ottawa",
      companylogo: require("./assets/images/UOttawaLogo.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Solidity, JavaScript, ReactJS, Node.js, Python, SVM, KNN, Docker, Kubernetes, Smart Contracts, IEEE Research, Game Theory Algorithms",
      descBullets: [
  "Conducted research and development of a blockchain-based P2P energy exchange platform using Solidity for smart contract logic, and JavaScript, ReactJS, and Node.js for decentralized application interfaces.",
  "Developed a game theory algorithm for smart contracts to dynamically optimize pricing strategies in energy trading environments.",
  "Built and integrated machine learning models (SVM, KNN) using Python for real-time anomaly detection, reducing cybersecurity vulnerabilities by 35%.",
  "Containerized the solution using Docker and deployed it in distributed environments using Kubernetes to ensure high availability and scalability.",
  "Authored and presented an IEEE research paper introducing a novel False Data Injection Detection Protocol for secure peer-to-peer energy transactions between Connected Electric Vehicles (CEVs)."
]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IEEE Research Paper Published",
      subtitle:
        "Published at a time when blockchain was gaining momentum as a cornerstone of cybersecurity innovation, this IEEE research by Mayssa Elloumi tackled a pressing challenge in smart IoT ecosystems. The paper introduced a novel machine learning–based False Data Injection Detection Protocol for peer-to-peer energy transactions between Connected Electric Vehicles (CEVs), positioning it at the intersection of blockchain, cybersecurity, and Industry 4.0. Its timely contribution addressed key vulnerabilities in decentralized energy systems and set a foundation for secure, scalable IoT infrastructures.",
      image: require("./assets/images/IEEE.png"),
      imageAlt: "IEEE Logo",
      footerLink: [
        {
          name: "Research Paper Link",
          url: "https://ieeexplore.ieee.org/document/9794999"
        },
        {
          name: "Conference Link",
          url: "https://ieeexplore.ieee.org/document/10044067"
        }
      ]
    },
    {
      title: "AWS Certified Developer Associate",
      subtitle:
        "Developed a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices", 
      image: require("./assets/images/AWSAssociateDeveloper.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification Link",
          url: "https://www.credly.com/badges/5cb2f8be-f703-414c-8b3f-0a99cedd2583/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 641-233-9607",
  email_address: "mayssaelloumi23@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
