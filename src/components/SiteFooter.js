import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
function SiteFooter({ content }) {
  const d = new Date(); 

  return(
      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-400 sm:text-center dark:text-gray-500">© {d.getFullYear()} Maria Jose Reyes. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.linkedin.com/in/marijorc/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noopener noreferrer">
              <AiFillLinkedin size={24}/>
              <span class="sr-only">LinkedIn page</span>
            </a>
            <a href="https://github.com/marijorc" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white" rel="noopener noreferrer">
              <AiFillGithub size={24}/>
              <span class="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </footer>

  );
}
 
export default SiteFooter;