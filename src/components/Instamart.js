import { useState } from "react";
const Section = ({ name, discription ,isVisual,setIsVisual }) => {
    // const [isVisual, setIsVisual] = useState(false);
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="text-xl font-bold">{name}</h3>
            {isVisual ?
                <button onClick={() => setIsVisual(false)}>
                    Hide</button>
                : <button onClick={() => setIsVisual(true)}>
                    show</button>
            }
            {isVisual && <p>{discription}</p>}
        </div>
    )
}

const Instamart = () => {
    const [isVisualSection,setIsVisualSection] = useState();
    return (
        <div>
            <h1 className="text-3xl font-bold">Instamart</h1>
            <Section name={"About Instamart"} discription={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
            isVisual={isVisualSection==="about"}
            setIsVisual={isVisualSection ? ()=>setIsVisualSection():()=>setIsVisualSection("about")}
            />
            <Section name={"About Team member"} discription={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."} 
            isVisual={isVisualSection==="team"}
            setIsVisual={isVisualSection ? ()=>setIsVisualSection():()=>setIsVisualSection("team")
            }
            />
            <Section name={"Currier"} discription={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}
             isVisual={isVisualSection==="Currier"}
             setIsVisual={isVisualSection ? ()=>setIsVisualSection():()=>setIsVisualSection("Currier")
             }
             />
        </div>
    )
}

export default Instamart;