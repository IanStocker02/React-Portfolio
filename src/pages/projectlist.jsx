import React from 'react';
import Project from '../components/project';

const projects = [
    { 
        title: '4096', 
        deployedUrl: 'https://joeyvedder.github.io/4096/', 
        repoUrl: 'https://github.com/JoeyVedder/4096',
        description: 'Collaborative project where I primarily focused on the JavaScript and game logic. Assisted in troubleshooting various bugs.'
    },
    { 
        title: 'Employee Tracker', 
        repoUrl: 'https://github.com/IanStocker02/employee-tracker',
        description: 'A command-line application to manage company departments, roles, and employees efficiently.'
    },
    { 
        title: 'Vehicle Builder', 
        repoUrl: 'https://github.com/IanStocker02/vehicleBuilder',
        description: 'CLI tool for creating vehicles with customizable options such as Year, Make, and Model.'
    },
    { 
        title: 'README Autogenerator',  
        repoUrl: 'https://github.com/IanStocker02/readmegenerator',
        description: 'CLI application that generates a README.md file based on user input through a series of questions.'
    },
    { 
        title: 'Weather App',  
        repoUrl: 'https://github.com/IanStocker02/weather-app',
        description: 'Website that uses open weather API to display current weather and forecast for a given city.'
    },
];

function ProjectList() {
    return (
        <section className="portfolio">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    deployedUrl={project.deployedUrl}
                    repoUrl={project.repoUrl}
                />
            ))}
        </section>
    );
}

export default ProjectList;