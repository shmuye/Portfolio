
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css.png'
import jsLogo from '../assets/js.png'
import reactLogo from '../assets/react.png'
import nodeLogo from '../assets/node.png'
import tailwindLogo from '../assets/tailwind.png'

// Add or replace with your actual skill assets and names
const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Tailwind', logo: tailwindLogo },
]

const Skill = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-4">
      <div className="animate-scroll flex gap-8 w-max px-8">
        {skills.concat(skills).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[100px] gap-2"
          >
            <img src={skill.logo} alt={skill.name} className="w-16 h-16" />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
