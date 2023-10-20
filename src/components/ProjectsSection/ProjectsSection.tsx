import styles from './ProjectsSection.module.scss';

function ProjectsSection(): JSX.Element {
    return <section className={styles.projectsSection}>
        <h3>My <span className={styles.colorHighlight}>projects</span></h3>
    </section>;
}

export default ProjectsSection;
