import ProjectCard from "../components/ProjectCard";
import SherpaFarmCover from "../images/SherpaFarm/Sherpa_Farm_Cover-01.png";

function Home() {
  const projectsList = [
    {
      image: SherpaFarmCover, 
      title: "Sherpa Farm", 
      description: "A mobile application for precise control and monitoring of Sherpa Farms, which are indoor farms developed by Sherpa Space Inc.", 
      link: "/sherpa-farm", 
      tags: ["React Native", "Mobile App"] 
    },
    {
      image: SherpaFarmCover, 
      title: "Sherpa Farm", 
      description: "A mobile application for precise control and monitoring of Sherpa Farms, which are indoor farms developed by Sherpa Space Inc.", 
      link: "/sherpa-farm1", 
      tags: ["React Native", "Mobile App"] 
    },
    {
      image: SherpaFarmCover, 
      title: "Sherpa Farm", 
      description: "A mobile application for precise control and monitoring of Sherpa Farms, which are indoor farms developed by Sherpa Space Inc.", 
      link: "/sherpa-farm2", 
      tags: ["React Native", "Mobile App"] 
    },
    {
      image: SherpaFarmCover, 
      title: "Sherpa Farm", 
      description: "A mobile application for precise control and monitoring of Sherpa Farms, which are indoor farms developed by Sherpa Space Inc.", 
      link: "/sherpa-farm3", 
      tags: ["React Native", "Mobile App"] 
    },
    {
      image: SherpaFarmCover, 
      title: "Sherpa Farm", 
      description: "which are indoor farms developed by Sherpa Space Inc.", 
      link: "/sherpa-farm4", 
      tags: ["React Native", "Mobile App"] 
    },
    {
      image: SherpaFarmCover, 
      title: "Sherpa Farm", 
      description: "A mobile application for precise control and monitoring of Sherpa Farms, which are indoor farms developed by Sherpa Space Inc.", 
      link: "/sherpa-farm5", 
      tags: ["React Native", "Mobile App"] 
    },
  ]

  const renderedProjectCards = projectsList.map(project => {
    return(
      <ProjectCard 
        key={project.link} 
        projectImage={project.image}
        projectTitle={project.title}
        projectDescription={project.description}
        projectLink={project.link}
        projectTags={project.tags}
      />
    );
  })


  return(
    <div className="flex w-full mb-5 justify-center">
      <div className="flex w-5/6 flex-col">
        <div className="flex flex-col">
          <p className="font-bold text-gray-400 underline decoration-2 underline-offset-8">Hello!</p>

          <p className="mt-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>

          <p className="font-bold text-gray-400 underline decoration-2 underline-offset-8 mb-6">Recent Projects</p>
        </div>

        <div className="flex w-full justify-center flex-wrap gap-6">
          {renderedProjectCards}
        </div>
        
      </div>
    </div>
  );
}
 
export default Home;