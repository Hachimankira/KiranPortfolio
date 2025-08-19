import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bikehub from "../../Assets/Projects/bikehub.png";
import lms from "../../Assets/Projects/lms.png";
import recipe from "../../Assets/Projects/recipe.png";
import registration from "../../Assets/Projects/registration.png";
import hachiblog from "../../Assets/Projects/hachiblog.png";
import nsass from "../../Assets/Projects/nsass.png";
import clonify from "../../Assets/Projects/clonify.png";

const projects = [
  {
    imgPath: nsass,
    isBlog: false,
    title: "Surveyor Associations' CMS",
    description:
      "A CMS built with Payload CMS, Next.js, and TypeScript to manage members, notices, automated emails with templates, and SMS notifications.",
    ghLink: "https://github.com/Hachimankira/survey-cms",
    demoLink: "https://nsassociation.org.np/",
  },
  {
    imgPath: clonify,
    isBlog: false,
    title: "Clonify.io Library",
    description:
      "A design resource platform built with Next.js, Tailwind CSS, and TypeScript, featuring 200+ UI components and templates. Enhanced frontend performance, redesigned responsive UI components for consistency across devices, and implemented caching strategies to achieve a 45% reduction in page load times.",
    ghLink: "",
    demoLink: "https://library.clonify.io/",
},
  {
    imgPath: bikehub,
    isBlog: false,
    title: "BikeHub",
    description:
      "Built a Laravel & Blade e-commerce platform for buying and selling second-hand bikes, integrating secure PayPal payments and optimizing for speed with Lighthouse.",
    ghLink: "https://github.com/Hachimankira/ecommerce_bike",
    // demoLink: "https://chatify-49.web.app/",
  },
  {
    imgPath: hachiblog,
    isBlog: false,
    title: "HachiBlog",
    description:
      "I built a dynamic blog with Next.js, leveraging Server-Side Rendering for SEO and performance. This project allowed me to explore Prisma for data management, Firebase Storage for secure image hosting, and React Quill to create a rich text editing experience for crafting engaging blog posts.",
    ghLink: "https://github.com/Hachimankira/AI_For_Social_Good",
    // demoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
  },
  {
    imgPath: registration,
    isBlog: false,
    title: "Civil Regestration System",
    description:
      "Developed an e-governance platform using Laravel and Blade to streamline citizen registrations for birth certificates, death certificates, national IDs, and voter cards. This project fostered my understanding of data visualization, a crucial element for creating informative dashboards.",
    ghLink: "https://github.com/Hachimankira/civil-registration-system",
    // demoLink: "https://blogs.soumya-jit.tech/",
  },
  {
    imgPath: recipe,
    isBlog: false,
    title: "Recipe App",
    description:
      "Built a MERN stack recipe app allowing users to add, edit, delete, and view recipes. This project honed my skills in CRUD operations, JWT authentication for secure user access, and React hooks for efficient component management.",
    ghLink: "https://github.com/Hachimankira/RecipeApp",
    // demoLink: "https://editor.soumya-jit.tech/",
  },
  {
    imgPath: lms,
    isBlog: false,
    title: "CAB Tech",
    description:
      "I delved into design patterns (MVC, Modular, Service, Repository) to build a well-structured and maintainable LMS. Additionally, I implemented custom middleware and a roles & permissions system from scratch, ensuring security and granular user access control.",
    ghLink: "https://gitlab.com/premsingh/cab_modular",
    // demoLink: "https://plant49-ai.herokuapp.com/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;