import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PostProps {
  id: string;
  user: string;
  title: string;
  date: string;
  text: string;
  codeSnippet?: string;
  language?: string;
}

export const Post = ({
  id,
  user,
  title,
  date,
  text,
  codeSnippet,
  language,
}: PostProps) => {
  return (
    <div className="relative bg-[#1d1d1d] rounded-lg p-4 mb-4 border border-gray-500 hover:border-gray-400 text-gray-100 transition">
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        color="white"
        className="absolute top-2 right-2 cursor-pointer"
      />
      <div className="flex items-center mb-2">
        <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-lg font-bold">
            {user.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="ml-2">
          <span className="text-primary">{user}</span>
          <span className="block text-gray-400 text-sm">{date}</span>
        </div>
      </div>
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <div className="max-h-56 overflow-hidden relative">
        <p className="text-white mb-2">{text}</p>
        {codeSnippet && (
          <pre className="bg-black p-2 rounded-lg overflow-auto">
            <code className={`language-${language}`}>{codeSnippet}</code>
          </pre>
        )}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#242323] to-transparent" />
      </div>
    </div>
  );
};
