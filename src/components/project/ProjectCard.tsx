import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tags?: string[];
  image?: string;
  link?: { href: string; label: string };
}

interface ProjectCardProps {
  project: Project;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const ProjectCard = ({ project, titleAs = 'h3' }: ProjectCardProps) => {
  // 直接渲染标题，避免客户端/服务端不匹配
  const renderTitle = () => {
    // 始终使用相同的标题元素类型
    const TitleTag = titleAs;
    return <TitleTag>{project.name}</TitleTag>;
  };

  return (
    <li className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 relative">
      {/* 右侧中间箭头图标链接 */}
      {project.link && project.link.href && (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <Link
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} project`}
            className="text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {renderTitle()}
          
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            
            {project.tags && project.tags.length > 0 && (
              <>
                <span className="text-gray-400 dark:text-gray-500">|</span>
                <div className="flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.name}-${tag}-${index}`}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {project.image && (
          <div className="md:w-1/3 h-40 md:h-auto">
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover rounded"
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default ProjectCard;