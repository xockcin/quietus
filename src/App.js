import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "react-bootstrap";
import {useState} from 'react'

const projects = [
  {
    title: "project1",
    subtitle: "a project that does the one",
    color: "danger",
    steps: [
      "brainstorm diary file",
      "figma prototype",
      "static web prototype",
      "sketch out components",
    ],
  },
  {
    title: "project2",
    subtitle: "a project that is two much",
    color: "warning",
    steps: ["step one", "step two", "step three"],
  },
  {
    title: "project3",
    subtitle: "third project",
    color: "success",
    steps: ["step one", "step two", "step three"],
  },
  {
    title: "project4",
    subtitle: "fourth project",
    color: "primary",
    steps: ["step one", "step two", "step three"],
  },
];

const ProjectButton = (props) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Button
      className="small m-2 p-2 border border-dark"
      onClick={() => setExpanded(!expanded)}
      variant={props.color}
    >
      {props.title}
      <p className="small">{expanded ? props.subtitle : ""}</p>
      <p className="small">{expanded ? props.steps[0] : ""}</p>
    </Button>
  );
}

function App() {
  const buttons = projects.map((project) => (
    <ProjectButton
      expanded={project.expanded}
      color={project.color}
      title={project.title}
      subtitle={project.subtitle}
      steps={project.steps}
    />
  ));

  return (
    <div className="App p-4 d-flex flex-wrap">
      <div className="mt-2">
        {buttons}
      </div>
    </div>
  );
}

export default App;
