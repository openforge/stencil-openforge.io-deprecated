import { Component, State, Prop, Watch, h } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { translate } from '../../services/translation.service';

@Component({
  tag: 'app-team-landing',
  styleUrl: 'app-team-landing.scss',
})
export class AppTeamLanding {
  // private allowWebp = localStorage.getItem('allowWebp') === 'true' ? true : false;
  backgroundPhoto: string;
  headshotPhoto: string;
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  @State() chips;
  data = {
    'jedidiah-weller': {
      firstname: 'Jedi',
      surname: 'Weller',
      title: translate('about.team.member.title.founder'),
      headerText:
        'Jedi is our CEO & Head of Technology and a driven community leader who advocates for greater transparency and collaboration throughout business and technology. He believes that by creating and sharing new methodologies of design and development collaboration, businesses can be empowered to accomplish more for their communities. OpenForge was born to bring this vision of innovation and transparency to life. Jedi has spoken at conferences worldwide, including Developer Week, Startup Weekend, Design Management Conference in Boston, and the Web Summit in Ireland. He is considered a mentor and an accomplished application technologist by many, with multiple patents and over 50 applications built worldwide.',
      bodyText:
        'Besides being the chief morale booster, Jedi leads the strategic partnerships and public outreach programs at OpenForge. His boundless energy and ambition means he’s constantly jumping between client calls, networking events, and ensuring the team and clients are happy with the work being done.',
      skills: ['Software Engineering', 'Artificial Intelligence', 'Product Design', 'Business Strategy', 'Software Architecture', 'Marketing', 'Ionic', 'Angular', 'Node.js', 'C#'],
      team: 'ceo',
      backgroundPhoto: '/assets/bios-background-jedi.png',
      headshotPhoto: '/assets/headshot-jedi.png',
      metatags: {
        title: 'Jedi Weller - CEO & Head of Technology | OpenForge',
        description:
          'Besides being the chief morale booster, Jedi leads the strategic partnerships and public outreach programs at OpenForge. His boundless energy and ambition means he’s constantly jumping between client calls, networking events, and ensuring the team and clients are happy with the work being done.',
        keywords: 'Jedi Weller, ceo, head of technology',
        url: 'https://openforge.io/about/jedidiah-weller/',
        image: 'https://openforge.io/assets/bios-background-jedi.png',
      },
    },
    'rachel-bennett': {
      firstname: 'Rachel',
      surname: 'Bennett',
      title: translate('about.team.member.title.designer'),
      headerText:
        'Originally hailing from the Washington, D.C. area, Rachel first came to Philadelphia to study Graphic Design. She has since adopted the city as her second home and currently resides in South Philadelphia. When she’s not solving UX problems, she likes to spend her time drawing, running, and taking pictures of her cats.',
      bodyText:
        'As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs. Whether she is designing, strategizing, or conceptualizing, she approaches each problem with an equal measure of discipline and curiosity.',
      skills: ['UX Design', 'UI Design', 'Web Design', 'Product Design', 'Graphic Design', 'Prototyping'],
      team: 'design',
      backgroundPhoto: '/assets/bios-background-rachel.jpg',
      headshotPhoto: '/assets/headshot-rachel.png',
      metatags: {
        title: 'Rachel Bennett - Visual Designer | OpenForge',
        description:
          'As Lead Designer, Rachel oversees all design projects and communicates directly with our clients for all design related needs. Whether she is designing, strategizing, or conceptualizing, she approaches each problem with an equal measure of discipline and curiosity.',
        keywords: 'Rachel Bennett, designer, visual designer, UIUX',
        url: 'https://openforge.io/about/rachel-bennett/',
        image: 'https://openforge.io/assets/bios-background-rachel.jpg',
      },
    },
    'paulina-gallo': {
      firstname: 'Paulina',
      surname: 'Gallo',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Paulina started her technical journey at a young age through an interest in video games. This interest sparked her drive to study and she received her Bachelor’s in Computer Science and Digital Media. She has spent the past few years developing web and mobile applications for a wide range of start-up and enterprise level clients, all while attending, volunteering, and speaking at various conferences within the development community. Even with all this she still finds time to play video games.',
      bodyText:
        'Besides coding on a daily basis and maintaining her development skills, Paulina is heavily involved with managing the development process. This includes the initial scoping, architecture planning, client communication, and the deployment of all projects. Outside of OpenForge Paulina volunteers for various local tech organizations and is the co-organizer of Angular Philly and Ionic Philly.',
      skills: ['Front-end Wizard ✨', 'Angular', 'Ionic', 'Typescript', 'Cordova', 'Capacitor', 'Firebase', 'RxJS', 'Redux', 'NgRx'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-paulina.png',
      headshotPhoto: '/assets/headshot-paulina.png',
      metatags: {
        title: 'Paulina Gallo - Software Engineer | OpenForge',
        description:
          'Not only does Paulina code and maintain her development skills, she stays heavily involved with managing the full development process of a project, including the initial scoping, architecture planning, client communication management, and deployment involved in all projects. Paulina volunteers for various organizations and is the co-organizer for Angular Philly and Ionic Philly.',
        keywords: 'Paulina Gallo',
        url: 'https://openforge.io/about/paulina-gallo/',
        image: 'https://openforge.io/assets/bios-background-paulina.png',
      },
    },
    'leon-degtar': {
      firstname: 'Leon',
      surname: 'Degtar',
      title: translate('about.team.member.title.operationsDirector'),
      headerText:
        'Leon is an operational and financial leader who has worked in a variety of industries and businesses. He has worked on technology projects with many Fortune 1000 companies. As Director of Operations, Leon focuses on partnering with our clients to solve their business problems with cutting-edge mobile technology.',
      bodyText: 'Leon provides guidance to our clients and team with clear process and a focus on execution and communication.',
      skills: ['Business Analysis', 'Financial Oversight', 'Organizational Development', 'Process Optimization'],
      team: 'dop',
      headshotPhoto: '/assets/headshot-leon.png',
      metatags: {
        title: 'Leon Degtar - Director of Operations | OpenForge',
        description: 'Leon provides guidance to our clients and team with clear process and a focus on execution and communication.',
        keywords: 'Leon Degtar',
        url: 'https://openforge.io/about/leon-degtar/',
        image: 'https://openforge.io/assets/headshot-leon.png',
      },
    },
    'fernando-del-olmo': {
      firstname: 'Fernando',
      surname: 'Del Olmo',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Growing up, Fernando was surrounded by people who loved computers and gaming. This stirred his own interest in learning more about technology, which eventually lead him to becoming a Computer Engineer. After graduating, he worked for a number of different companies, all dealing with web technologies and finally found the perfect fit with OpenForge!',
      bodyText:
        'Fernando helps manage the development process of projects; from the initial scoping and architectural planning aspects, all the way through to the actual development of the product. He is always considering ways to improve the way the development team functions by staying up-to-date on  technology and tools.',
      skills: ['Front-end Wizard ✨', 'Angular', 'Ionic', 'Firebase', 'StencilJS', 'RxJS', 'NGXS', 'NGRX', 'Redux', 'NodeJS'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-fernando.png',
      headshotPhoto: '/assets/headshot-fer.png',
      metatags: {
        title: 'Fernando Del Olmo - Software Engineer | OpenForge',
        description:
          'Fernando is originally from Madrid, Spain where he recieved his Bachelors degree in Computer Engineering from Universidad Autónoma of Madrid. Joining the OpenForge team allowed Fernando to pursue his dream of having a flexible career working remotely and avoiding a life of cubicles.',
        keywords: 'Fernano Del Olmo',
        url: 'https://openforge.io/about/fernando-del-olmo/',
        image: 'https://openforge.io/assets/bios-background-fernando.png',
      },
    },
    'william-holloran': {
      firstname: 'William',
      surname: '(Billy) Holloran',
      title: translate('about.team.member.title.qualityManager'),
      headerText:
        'Billy was born and raised in Philadelphia and started his career training right out of High School. Forgoing the path of college, Billy attended the pre-apprenticeship program at The Urban Technology Project. His tenacity and dedication to starting a career in technology landed him a job in our team as head of Quality Management.',
      bodyText:
        'As Quality Manager, Billy leads the team in testing all company deliverables. Through automated & manual testing strategies, he put tests in place to catch new bugs before they are introduced, as well as testing the applications to ensure that all bugs are found and fixed.',
      skills: ['Quality Assurance', 'Organization', 'Planning', 'Communication', 'Critical Thinking', 'Leadership', 'Problem-solving', 'Sense of Humor'],
      team: 'management',
      backgroundPhoto: '/assets/bios-background-billy.png',
      headshotPhoto: '/assets/headshot-billy.png',
      metatags: {
        title: 'Billy Holloran - QA Manager | OpenForge',
        description:
          'As Project Manager, Billy ensures that our team and your team have the resources and requirements needed in order to successfully launch your product. Heading up our quality assurance process, Billy leads the team in testing all deliverables maintaining high quality standards.',
        keywords: 'William Billy Holloran',
        url: 'https://openforge.io/about/william-holloran/',
        image: 'https://openforge.io/assets/bios-background-billy.jpg',
      },
    },
    'luis-chacon': {
      firstname: 'Luis',
      surname: 'Chacón',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Luis grew up in San José, Costa Rica where he received his Bachelor’s degree in Computer Science and Informatics. He received a full scholarship from the European Union and traveled to Italy and Spain in order to pursue a Master’s degree in Software Engineering. Since then, he has developed a diverse range of mobile applications for companies, start-ups and governmental institutions before joining our team at OpenForge.',
      bodyText:
        'Luis has mastered the agile approach to software development and has the ability to seamlessly transition between tasks and pivot if the necessity arises. His physical distance from the other team members does not stand in the way when it comes to pulling the team together for collaboration to tackle tasks at hand and deliver working code that ourselves and clients can rely on.',
      skills: ['Angular', 'Ionic', 'Typescript', 'Firebase', 'Scrum'],
      team: 'development',
      backgroundPhoto: '/assets/bios-background-luis.png',
      headshotPhoto: '/assets/headshot-luis.png',
      metatags: {
        title: 'Luis Chacon - Software Engineer | OpenForge',
        description:
          'Luis grew up in San José, Costa Rica where he received his Bachelor’s degree in Computer Science and Informatics. Then he traveled to Italy and Spain to study a Masters in Software Engineering with a full scholarship form the European Union. Since then he has developed applications for companies, start ups and government institutions before joining our team at OpenForge.',
        keywords: 'Luis Chacon',
        url: 'https://openforge.io/about/luis-chacon/',
        image: 'https://openforge.io/assets/bios-background-luis.jpg',
      },
    },
    'claudio-del-valle': {
      firstname: 'Claudio',
      surname: 'Del Valle',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Claudio began programming early in High School as a way to learn more about robotics. After being introduced to OpenForge; and stemming from his love for creating and a passion for continuous improvement, Web Development became his main focus. Claudio graduated with a degree in Computer Engineering and still enjoys keeping up with the newest trends in web development; especially those related to Ionic and Angular. He acts as both a Project Manager & Developer.',
      bodyText:
        'Like most of the developers at OpenForge, Claudio is involved in the scoping and development process of mobile apps. He enjoys the discovery process and lends his technical opinion wherever needed to improve the overall product. He enjoys keeping up with the latest web development trends and sharing his knowledge with the rest of the team.',
      skills: ['NodeJS', 'RxJS', 'Angular', 'Ionic', 'StencilJS', 'Firebase'],
      team: 'development',
      headshotPhoto: '/assets/headshot-claudio.png',
      metatags: {
        title: 'Claudio Del Valle - Software Engineer | OpenForge',
        description:
          'Like most of the developers at OpenForge, Claudio is involved in the scoping and development process of mobile apps. He enjoys the discovery process and lends his technical opinion wherever needed to improve the overall product. He enjoys keeping up with the latest web development trends and sharing his knowledge with the rest of the team.',
        keywords: 'Claudio Del Valle',
        url: 'https://openforge.io/about/claudio-del-valle/',
        image: 'https://openforge.io/assets/headshot-claudio.png',
      },
    },
    'min-lee': {
      firstname: 'Min',
      surname: 'Lee',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Min has always been a problem-solver who enjoys optimizing any process and that translated beautifully when he found his passion in development as a result. He has a wide range of experience working Full-Stack Development from Financial to Startup SaaS companies. He enjoys listening to house music and the team tries to get a laugh out of him with the occasional good pun!',
      bodyText:
        'As a developer at OpenForge, Min spends most of his work building out features that deliver value to our clients. Day to day, he could be building out various UIs, endpoints, or scoping out business requirements for development.',
      skills: ['Angular', 'React', 'Ionic', 'Firebase', 'NodeJS', 'Java', 'C#', 'Full-stack'],
      team: 'development',
      headshotPhoto: '/assets/headshot-min.png',
      metatags: {
        title: 'Min Lee - Software Engineer | OpenForge',
        description:
          'As a developer at OpenForge, Min spends most of his work building out features that deliver value to our clients. Day to day, he could be building out various UIs, endpoints, or scoping out business requirements for development.',
        keywords: 'Min Lee',
        url: 'https://openforge.io/about/min-lee/',
        image: 'https://openforge.io/assets/headshot-min.png',
      },
    },
    'may-alkhraisha': {
      firstname: 'May',
      surname: 'Alkhraisha',
      title: translate('about.team.member.title.marketingCoordinator'),
      headerText:
        'After studying business in her home country; Jordan, May undertook a course in Web & Graphic Design. She entered the world of marketing through her work in branding agencies. She became the newest addition to our team after attending a start-up event hosted by OpenForge. May lives in Center City and spends her free time working on her own mobile application, hiking, or climbing.',
      bodyText:
        'May handles branding, marketing & communication efforts within the company. In a turn of fate, she is also responsible for planning the same events that introduced her to OpenForge! May also meets with clients & is happy to introduce them to our process & walk them through it step-by-step.',
      skills: ['Branding', 'Content Writing', 'Editing', 'Marketing'],
      team: 'marketing',
      headshotPhoto: '/assets/headshot-may.png',
      backgroundPhoto: '/assets/bios-background-may.jpg',
      metatags: {
        title: 'May Alkhraisha - Marketing Coordinator | OpenForge',
        description:
          'May handles branding, marketing & communication efforts within the company. In a turn of fate, she is also responsible for planning the same events that introduced her to OpenForge! May also meets with clients & is happy to introduce them to our process & walk them through it step-by-step.',
        keywords: 'May Alkhraisha',
        url: 'https://openforge.io/about/may-alkhraisha/',
        image: 'https://openforge.io/assets/bios-background-may.jpg',
      },
    },
    'mariela-mora-quesada': {
      firstname: 'Mariela',
      surname: 'Mora Quesada',
      title: translate('about.team.member.title.projectManagement'),
      headerText:
        'Mariela is our administrative assistant and is from Coronado; just east of San Jose, Costa Rica. While she has a degree in Physical Therapy, she  accumulated 15 years experience in customer service and interpretation, which makes her an excellent communicator. Her curiosity about web & mobile app development lead her to joining the OpenForge team.',
      bodyText:
        "Mariela is in charge of reviewing the team's schedules and generating both internal and external reports, as well as invoicing. She constantly strives to improve the services we provide.",
      skills: ['Communication', 'Problem Solving', 'Customer Service'],
      team: 'management',
      headshotPhoto: '/assets/headshot-mariela.png',
      metatags: {
        title: 'Mariela Mora Quesada - Project Management | OpenForge',
        description:
          'May handles branding, marketing & communication efforts within the company. In a turn of fate, she is also responsible for planning the same events that introduced her to OpenForge! May also meets with clients & is happy to introduce them to our process & walk them through it step-by-step.',
        keywords: 'May Alkhraisha',
        url: 'https://openforge.io/about/mariela-mora-quesada/',
        image: 'https://openforge.io/assets/headshot-mariela.png',
      },
    },
    'petrell-vereen': {
      firstname: 'Petrell',
      surname: 'Vereen',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Petrell is a mobile developer and software generalist that has been solving software and hardware issues since he was a child. He enjoys breaking down larger, more complex problems into smaller, more manageable pieces; mentoring and teaching web and general programming within his community. He has worked at a range of larger international service companies and start-ups. Petrell is a passionate learner and is constantly challenging himself to push the boundaries of what he previously thought possible.',
      bodyText:
        'As a core developer, Petrell stays up to date with tech trends and modern code patterns to produce software that is secure and stands the test of time. Building out automated testing, discussing architecture, prepping a build pipeline, scoping features, and translating business requirements are all things he could be a part of, on any given day.',
      skills: ['Typescript', 'Angular', 'Vue', 'React', 'Redux', 'NGRX', 'Responsive Design', 'CI/CD', 'Scripting', 'Python', 'Java', 'Docker', 'Firebase'],
      team: 'development',
      headshotPhoto: '/assets/headshot-petrell.png',
      metatags: {
        title: 'Petrell Vereen - Software Engineer | OpenForge',
        description:
          'As a core developer, Petrell stays up to date with tech trends and modern code patterns to produce software that is secure and stands the test of time. Building out automated testing, discussing architecture, prepping a build pipeline, scoping features, and translating business requirements are all things he could be a part of, on any given day.',
        keywords: 'Petrell Vereen',
        url: 'https://openforge.io/about/patrell-vereen/',
        image: 'https://openforge.io/assets/headshot-vereen.png',
      },
    },
    'jared-bradshaw': {
      firstname: 'Jared',
      surname: 'Bradshaw',
      title: translate('about.team.member.title.designCoordinator'),
      headerText:
        'Jared started down the career path of design when he began making cover art for his friends’ music albums. Soon after, he turned a hobby into a profession and landed a job as a Graphic Design Intern for a nonprofit. He’s been engaged with design ever since, and made the transition into the field of Digital Design when he joined OpenForge’s team. Jared relies on his adaptability and communication skills to support his teammates.',
      bodyText:
        'Jared fills a unique role on the OpenForge team as a hybrid between Visual Designer and Project Manager. He uses his skills to assist the design team with numerous projects, while also managing the projects themselves. Always willing to fill in where he’s needed, he’s able to bring stability and a helping hand to OpenForge’s design process.',
      skills: ['Graphic Design', 'UI Design', 'Project Management', 'Quality Assurance'],
      team: 'design',
      headshotPhoto: '/assets/headshot-jared.png',
      metatags: {
        title: 'Jared Bradshaw - Design Coordinator | OpenForge',
        description:
          'Jared fills a unique role on the OpenForge team as a hybrid between Visual Designer and Project Manager. He uses his skills to assist the design team with numerous projects, while also managing the projects themselves. Always willing to fill in where he’s needed, he’s able to bring stability and a helping hand to OpenForge’s design process.',
        keywords: 'Jared Bradshaw',
        url: 'https://openforge.io/about/jared-bradshaw/',
        image: 'https://openforge.io/assets/headshot-bradshaw.png',
      },
    },
    'harry-scheuerle': {
      firstname: 'Harry',
      surname: 'Scheuerle',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Harry is a Villanova alumni who still considers himself a self-taught developer. He graduated with an award for his senior project in natural language processing and graph database management, then immediately spent his prize money on a 49” monitor. Harry became familiar with the quality of corporate software development at the very start of his career. He has since joined the OpenForge team, and is now pursuing the path of expertise one project at a time.',
      bodyText: 'As a developer at OpenForge, Harry applies his Full-Stack experience and problem solving talents to advance the active projects at the company.',
      skills: ['Angular', 'React', 'RxJS', 'NGRX', 'Express', 'MongoDB', 'Firebase', 'Javascript', 'ES', 'Typscript'],
      team: 'development',
      headshotPhoto: '/assets/headshot-harry.png',
      metatags: {
        title: 'Harry Scheuerle - Software Engineer | OpenForge',
        description: 'As a developer at OpenForge, Harry applies his Full-Stack experience and problem solving talents to advance the active projects at the company.',
        keywords: 'Harry Scheuerle',
        url: 'https://openforge.io/about/harry-scheuerle/',
        image: 'https://openforge.io/assets/headshot-harry.png',
      },
    },
    // 'matt-moran': {
    //   firstname: 'Matt',
    //   surname: 'Moran',
    //   title: translate('about.team.member.title.developer'),
    //   headerText:
    //     '',
    //   bodyText:
    //     "",
    //   skills: ['Angular', 'Ionic', 'Firebase', 'NGRX', 'NGXS', 'Thinker', 'Maker', 'Doer'],
    //   team: 'development',
    //   headshotPhoto: '/assets/headshot-matt.png',
    // },
    'carter-simonson': {
      firstname: 'Carter',
      surname: 'Simonson',
      title: translate('about.team.member.title.developer'),
      headerText:
        "Carter is a school student and software developer from small-town Wisconsin, who - like many developers - discovered his passion for software development at an early age through video games. He soon after learned that he loved mobile app development, and hasn't looked back since! Joining the OpenForge team remotely allowed him the flexibility to pursue his software development career while still attending school.",
      bodyText: 'Carter is primarily a mobile developer, and helps our team in the initial setup, planning, and development of new mobile applications.',
      skills: ['Typescript', 'Angular', 'React', 'Ionic', 'Firebase', 'NodeJS'],
      team: 'development',
      headshotPhoto: '/assets/headshot-carter.png',
      metatags: {
        title: 'Carter Simonson - Software Engineer | OpenForge',
        description: 'Carter is primarily a mobile developer, and helps our team in the initial setup, planning, and development of new mobile applications.',
        keywords: 'Carter Simonson',
        url: 'https://openforge.io/about/carter-simonson/',
        image: 'https://openforge.io/assets/headshot-carter.png',
      },
    },
    'griffin-robbins': {
      firstname: 'Griffin',
      surname: 'Robbins',
      title: translate('about.team.member.title.gameDesigner'),
      headerText:
        'A life-long gamer and native of Massachusetts, Griffin’s transition into a Game Designer was a natural transition. Griffin moved to Philadelphia to pursue a degree in Game Design & Production at Drexel University. Although initially somewhat nervous about making such a big move, Griffin now considers his move to Philadelphia to be one of the best things to happen to him; we like to think that his working with us at OpenForge is a contributing factor!',
      bodyText:
        'As a member of the design team, Griffin’s main focus is working on our very own game; Startup Wars! He also contributes by providing a continuous flow of creative ideas on other projects.',
      skills: ['Game Design', 'UI Design', 'Web Design', 'Animation'],
      team: 'design',
      headshotPhoto: '/assets/headshot-griffin.png',
      metatags: {
        title: 'Griffin Robbins - Software Engineer | OpenForge',
        description:
          'As a member of the design team, Griffin’s main focus is working on our very own game; Startup Wars! He also contributes by providing a continuous flow of creative ideas on other projects.',
        keywords: 'Griffin Robbins',
        url: 'https://openforge.io/about/griffin-robbins/',
        image: 'https://openforge.io/assets/headshot-griffin.png',
      },
    },
    'pablo-huerta': {
      firstname: 'Pablo',
      surname: 'Huerta',
      title: translate('about.team.member.title.developer'),
      headerText:
        'Pablo started coding in High School; specifically, java and C++. He soon after found his real passion in web and mobile app development. Pablo derives a true joy from working on a project from start to finish and seeing his hard work come to life.',
      bodyText:
        'As an integral member of the development team, Pablo works hard to ensure that every project he is assigned to behaves in the correct way. His solid foundation in web & mobile app development helps him achieve this.',
      skills: ['Angular', 'Ionic', 'MongoDB', 'C#', 'NodeJS', 'Laravel', 'Java', 'Javascript', 'Firebase'],
      team: 'development',
      headshotPhoto: '/assets/headshot-pablo.png',
      metatags: {
        title: 'Pablo Huerta - Software Engineer | OpenForge',
        description:
          'As an integral member of the development team, Pablo works hard to ensure that every project he is assigned to behaves in the correct way. His solid foundation in web & mobile app development helps him achieve this.',
        keywords: 'Pablo Huerta',
        url: 'https://openforge.io/about/pablo-huerta/',
        image: 'https://openforge.io/assets/headshot-pablo.png',
      },
    },
    'alberto-carniel': {
      firstname: 'Alberto',
      surname: 'Carniel',
      title: translate('about.team.member.title.marketingSpecialist'),
      headerText:
        "Alberto discovered his passion for Digital Marketing and fully embraced his role as a digital marketing manager within the luxury industry. With a bachelor's degree in International Economics and two fully-funded masters in International Marketing Management, Alberto launched his 5-star reviewed brand to discover how fitness, travel and marketing positively impact organizations. Alberto was also as an Associate Professor of Inbound Marketing at an Italian university, and acted as a Digital Director for the US market for a multinational company operating in the media sector.",
      bodyText: 'Alberto supports OpenForge’s online marketing and outreach team, as well as search engine optimization efforts.',
      skills: ['Automation Marketing', 'Social Media Management', 'Search Engine Optimization (SEO)', 'E-commerce', 'Marketplace Management', 'Digital Marketing Strategy'],
      team: 'marketing',
      headshotPhoto: '/assets/headshot-alberto.png',
      metatags: {
        title: 'Alberto Carniel - Marketing Specialist | OpenForge',
        description: 'Alberto supports OpenForge’s online marketing and outreach team, as well as search engine optimization efforts.',
        keywords: 'Pablo Huerta',
        url: 'https://openforge.io/about/alberto-carniel/',
        image: 'https://openforge.io/assets/headshot-carniel.png',
      },
    },
    'matt-moran': {
      firstname: 'Matt',
      surname: 'Moran',
      title: translate('about.team.member.title.developer'),
      headerText:
        "Matt joined OpenForge in 2019 as a member of the development team. A self-taught developer with experience working for large institutions, he has one foot in modern web development, and one in the growing Microsoft ecosystem. Matt is also a strong advocate for Computer Science education, having taught programming to over 1000 students and contributed to graduate-level CS curriculum at the University of Pennsylvania. Alongside his work with OpenForge, Matt continues to tutor programming while fostering dogs at his house in Georgia.",
      bodyText: 'In addition to developing applications, Matt has worked for OpenForge as a database expert, software architect, DevOps specialist, and project lead. With specialties in backend development, database design, and enterprise systems, he focuses on product security, stability, and integrity. He draws upon his continually expanding base of development practices to help customers find solutions for their needs.',
      skills: ['Angular', 'NGRX', 'Cordova', 'Node', 'SQL Server', ' C#', 'ASP.NET', 'Universal Windows Platform', 'Visual Studio', 'IIS', 'Azure', 'Serverless', 'DevOps', 'Git'],
      team: 'development',
      headshotPhoto: '/assets/headshot-matt.png',
      metatags: {
        title: 'Matt Moran - Software Engineer | OpenForge',
        description: 'In addition to developing applications, Matt has worked for OpenForge as a database expert, software architect, DevOps specialist, and project lead. With specialties in backend development, database design, and enterprise systems, he focuses on product security, stability, and integrity. He draws upon his continually expanding base of development practices to help customers find solutions for their needs.',
        keywords: 'Matt Moran',
        url: 'https://openforge.io/about/matt-moran/',
        image: 'https://openforge.io/assets/headshot-matt.png',
      },
    }
  };

  @Watch('match')
  matchHandler() {
    this.changeMetadata();
  }

  componentWillLoad() {
    if (!this.data[this.match.params.member]) {
      this.history.push(`/`, {});
    }
  }

  componentDidLoad() {
    this.changeMetadata();
  }

  componentDidUnload() {
    window.removeEventListener('resize', this.updateBackground, false);
  }

  changeMetadata() {
    if (this.data[this.match.params.member]) {
      // Change meta tags dynamically
      document.querySelector("meta[property='og:title']").setAttribute('content', this.data[this.match.params.member].metatags.title);
      document.querySelector("meta[property='og:description']").setAttribute('content', this.data[this.match.params.member].metatags.description);
      document.querySelector("meta[property='og:url']").setAttribute('content', this.data[this.match.params.member].metatags.url);
      document.querySelector("meta[property='og:image']").setAttribute('content', this.data[this.match.params.member].metatags.image);
      document.querySelector("meta[name='keywords']").setAttribute('content', this.data[this.match.params.member].metatags.keywords);
    }
  }

  changeImageFormat(img: string) {
    // if (img && this.allowWebp) {
    //   const idx = img.lastIndexOf('.');
    //   return `${img.substring(0, idx)}.webp`;
    // }
    return img;
  }

  updateBackground() {
    const hero = document.querySelector('.team-landing > .container-fluid > .hero') as HTMLElement;
    if (window.innerWidth > 767.98) {
      hero.style.backgroundColor = '#292A2D';
      if (this.backgroundPhoto != null) {
        hero.style.backgroundImage = `linear-gradient(90deg, #000000 20%, rgba(255, 255, 255, 0) 70%), url(${this.backgroundPhoto})`;
      }
    } else {
      hero.style.backgroundImage = 'none';
      hero.style.backgroundColor = 'transparent';
    }
  }

  render() {
    this.backgroundPhoto = this.changeImageFormat(this.data[this.match.params.member].backgroundPhoto ? this.data[this.match.params.member].backgroundPhoto : null);
    this.headshotPhoto = this.changeImageFormat(this.data[this.match.params.member].headshotPhoto);
    let style = {};
    if (window.innerWidth > 767.98) {
      style = this.backgroundPhoto
        ? {
          'background-image': `linear-gradient(90deg, #000000 20%, rgba(255, 255, 255, 0) 70%), url(${this.backgroundPhoto})`,
        }
        : {
          'background-color': '#292A2D',
        };
    }
    window.addEventListener('resize', this.updateBackground);

    return (
      <section class="team-landing">
        {/* header - hero */}
        {this.data[this.match.params.member]
          ? [
            <div class="container-fluid">
              <div class="row justify-content-center align-items-center hero" style={style}>
                <div class="col-10 col-sm-12 d-block d-md-none">
                  <app-img class="headshot-mobile" src={this.headshotPhoto} />
                </div>
                <div class="col-11 col-sm-9 col-md-7 col-lg-6 align-self-start">
                  <div class="header-text">
                    <h1>{`${this.data[this.match.params.member].firstname} ${this.data[this.match.params.member].surname}`}</h1>
                    <h3>{this.data[this.match.params.member].title}</h3>
                    <app-img
                      class="d-md-none badge"
                      src={`/assets/team-landing-graphic-${this.data[this.match.params.member].team}-badge.png`}
                      alt="Job Title Badge - Design, Development, Management"
                    />
                    <p>{this.data[this.match.params.member].headerText}</p>
                  </div>
                </div>
                <div class="col-md-4 d-none d-md-block">{!this.backgroundPhoto && <app-img class="headshot" src={this.headshotPhoto} />}</div>
              </div>

              <div class="row align-items-center justify-content-center bio">
                <div class="col-9 col-sm-9 col-md-5 col-lg-4">
                  <app-img
                    class="d-none d-md-block badge"
                    src={`/assets/team-landing-graphic-${this.data[this.match.params.member].team}-badge.png`}
                    alt="Job Title Badge - Design, Development, Management"
                  />
                </div>
                <div class="col-11 col-sm-9 col-md-7 col-lg-5">
                  <h2>
                    <app-translate keyword="about.landing.container.title1" />
                    &nbsp;{this.data[this.match.params.member].firstname}&nbsp;
                      <app-translate keyword="about.landing.container.title2" />
                  </h2>
                  <p>{this.data[this.match.params.member].bodyText}</p>
                  <h4>
                    <app-translate keyword="about.landing.container.skills" />
                  </h4>
                  <div class="chips-container">
                    {this.data[this.match.params.member].skills.map(skill => {
                      return <label class="skill-chip">{skill}</label>;
                    })}
                  </div>
                </div>
              </div>

              <div id="members" class="row justify-content-center members">
                <div class="col-10 col-lg-10">
                  <h2>
                    <app-translate keyword="about.landing.cta.title" />
                  </h2>
                  <app-members-section />
                </div>
              </div>
            </div>,
            <app-footer />,
          ]
          : null}
      </section>
    );
  }
}
