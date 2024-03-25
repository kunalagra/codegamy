import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const Content = ({ content, title }) => {

    return (
        <div className="h-[92vh] py-4 w-full overflow-y-scroll">
            <div className={`flex-grow h-[92vh] absolute opacity-20 flex justify-center items-center left-[45%]`}>
                <img 
                    src={`/${title}.png`}
                    alt="title"
                    className="w-96 h-96 object-contain rounded-lg"
                />
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default Content
