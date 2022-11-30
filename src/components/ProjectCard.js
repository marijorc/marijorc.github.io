import { useNavigate } from "react-router-dom";

function ProjectCard({ projectImage, projectTitle, projectDescription, projectLink, projectTags }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(projectLink)
  }

  const renderedProjectTags = projectTags.map((tag, index) => {
    return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">{tag}</span>
  })

  return(
    <div className="max-w-xs rounded overflow-hidden shadow-lg hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-100" onClick={handleCardClick}>
    <img className="w-full" src={projectImage} alt={`${projectTitle} project cover`}/>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{projectTitle}</div>
      <div className="h-20">
        <p className="line-clamp-3 text-gray-800 text-base">{projectDescription}</p>
      </div>
    </div>
    <div className="px-6 pb-4">{renderedProjectTags}</div>
  </div>
  );
}

ProjectCard.defaultProps = {
  projectImage: "https://picsum.photos/1920/1080", 
  projectTitle: "Project Title", 
  projectDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", 
  projectLink: "/", 
  projectTags:["sample", "tag", "items"] 
}
 
export default ProjectCard;