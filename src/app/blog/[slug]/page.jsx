import dateFormat from "@/utils/dateformat";
import { Calendar } from 'lucide-react';
import Image from "next/image";
export default function SingleBlog(){
  const tempTags = "SpaceX, Nasa, Exploration"
  // const tempHtml = `
  //    <p>Demo content</p>
  //    <h2> Test h2 </h2>
  // `
    return(<>
       <section>
           <div className="flex flex-col gap-4 items-center">
             <Image className="rounded border w-[90%] md:w-[700px]" src="/thumbnails/dreams.png" width={500} height={250} alt="Page title" />
             <div className="meta-of-a-blog space-y-2">
                  <div className="flex gap-2 items-center">
                      <Calendar className = "text-gray-400 size-4" />
                    <p className="text-gray-400 text-xs">Created on: {dateFormat(new Date())}</p>
                </div>
                <div className="text-xs flex items-center gap-2">
                  <p>Tags:</p>
                  {tempTags.split(",").map(tag=><p className="badge bg-gray-600/30 border border-gray-700 w-fit px-[4px] py-[2px] rounded">{tag}</p>)}
                </div>
                {/* <div className="content" dangerouslySetInnerHTML={{__html: tempHtml}}>   
                </div> */}
                <p className="text-sm w-[90%] md:w-2/3 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo et eaque enim eveniet quod. Deserunt enim totam est accusantium animi aut quasi vero, ea repudiandae officiis exercitationem. Voluptate, quia.
                Expedita sint repudiandae cupiditate dolore maiores necessitatibus corporis et quo vel, illo aliquam eum incidunt fugiat explicabo esse! Debitis illo, voluptatem recusandae numquam necessitatibus placeat libero quia saepe magnam sequi?
                Suscipit enim asperiores odio, eum harum cumque natus voluptatem obcaecati architecto voluptatibus alias nemo, sint quidem accusamus. Nostrum sed minus ipsum fugit corrupti suscipit rem quas, laudantium laborum quis. Ipsam?
                Obcaecati minus explicabo repellendus architecto tenetur ullam veritatis praesentium! Ut et repudiandae quam at deleniti doloremque veniam perferendis aspernatur! Labore architecto fuga voluptatem assumenda eius error quas pariatur quam perferendis.
                Minima deleniti inventore harum soluta! Tempore veniam labore minus, quam est earum eos at id rerum voluptas obcaecati error temporibus autem odit enim placeat ratione amet hic iure suscipit culpa!
                Nihil recusandae consectetur, laboriosam illum harum modi excepturi cupiditate eum facere perspiciatis mollitia nam? Tempore quae officia, commodi possimus cum libero eaque impedit, fugiat consectetur unde corporis ducimus error laborum!
                At cupiditate ipsa quasi voluptatibus optio id excepturi odio possimus aliquid ad nulla nihil obcaecati pariatur repellendus nesciunt delectus animi, rem nobis doloremque exercitationem ducimus itaque atque adipisci sunt. Ad?
                Eum, voluptate error. Cupiditate esse impedit minima! Officia reprehenderit, nihil deserunt quos totam vitae dolore id rem, modi nostrum voluptas esse ratione optio? Veniam reprehenderit hic cupiditate consequuntur expedita sapiente.
                Libero qui aliquam ullam? Aliquid dolores omnis consectetur inventore veniam odit! Perspiciatis deserunt, consequatur nostrum repellendus excepturi corporis saepe sint voluptates nobis quibusdam amet? Fuga molestias hic sequi. Sint, minus.
                Adipisci sed repellendus vero explicabo quia similique, ex, culpa neque vel eum quod atque unde praesentium, architecto mollitia omnis laudantium voluptates. Architecto exercitationem unde quo repellat incidunt quaerat consequuntur? Asperiores?
                Nobis, quas. Enim labore eius quidem molestiae autem natus amet voluptatum, unde dicta nobis. Impedit quaerat, labore quam, eaque reiciendis rem a deserunt incidunt aut consequatur nisi quas architecto quo.
                Consectetur facere itaque incidunt cumque temporibus quibusdam quos, rerum, voluptatem dignissimos deserunt similique, consequuntur suscipit saepe. Consequatur, doloribus? Voluptate sed saepe quae rerum est necessitatibus veritatis possimus similique voluptates omnis!
                Consectetur, magnam cumque unde nesciunt voluptatem possimus commodi exercitationem, corporis facilis impedit similique odit explicabo repellat eligendi laudantium incidunt illo. Veritatis aliquam, quia nisi quisquam animi earum dolorum illum sit.
                Totam officiis modi ex porro corrupti? Aperiam, minima. Vero quibusdam libero tempore commodi nam iure? Culpa voluptates, sed amet eum repudiandae accusantium dolor, corrupti ipsum quia nesciunt explicabo hic rerum?
                At commodi, adipisci labore assumenda veniam odit illo exercitationem placeat repellat sit, quas nostrum dicta rem nulla eos libero reprehenderit est voluptate repudiandae unde. Praesentium quia perspiciatis consectetur similique nam?
                Illum autem recusandae esse itaque aperiam mollitia ipsum, officiis at est harum voluptatem cum ab, laborum architecto laudantium quam. Veniam nulla aut, perspiciatis facilis debitis ullam dolor quaerat placeat vero!
                Blanditiis aspernatur quas ea accusamus sint at nulla tempore doloremque, neque repellat atque veniam, quod a facilis suscipit cumque saepe. Adipisci voluptate neque est, inventore magni veniam incidunt perferendis impedit!
                Dolor, ipsum perspiciatis reprehenderit consectetur consequuntur officia pariatur autem tempore eveniet quaerat illum nemo eum ullam explicabo facere. Aliquam maxime velit, pariatur quae temporibus sed ratione commodi minima provident esse!
                Corporis tenetur a praesentium corrupti possimus magnam, dignissimos ad incidunt, suscipit hic quibusdam sunt aliquam minus illum nesciunt molestiae est odio accusamus? Commodi, atque aut! Culpa, quas. Possimus, inventore quae!
                Ea repellat, nihil cumque qui nesciunt, aliquam eveniet minima ipsum aliquid est laudantium! Praesentium perspiciatis, architecto atque nihil labore impedit ut magni aut voluptatem rem alias repellat ducimus odio autem.
                </p>
             </div>
           </div>
       </section>
    </>)
}