import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: 'Diseño 1',
    description: '',
  }

export default function Page(){

    return (
        <body className="bg-white">
            <section className="flex flex-col gap-y-10 my-5 mx-8 sm:my-10 sm:mx-16">
                <div className="flex flex-col gap-y-5">
                    <h1 className="text-3xl font-normal text-gray-700 sm:text-5xl">Froala Design Blocks</h1>
                    <p className="text-xl font-light text-gray-500 sm:text-2xl">
                        Far far away,behind the word mountains, far from te countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                </div>

                <div className="grid grid-cols-1  gap-y-6 items-center sm:grid-cols-4 sm:gap-4 lg:grid-cols-3">
                    <div className="grid gap-y-1 col-span-1 sm:col-span-2 lg:col-span-1">
                        <Image className="w-full h-40 rounded" src="/blue.jpg" width={800} height={533} alt=""/>
                        <h1 className="text-xl">Feature One</h1>
                        <p className="text-gray-500">
                            Far far away,behind the word mountains, far from te countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.  
                        </p>
                    </div>
                        

                    <div className=" grid gap-y-1  col-span-1 sm:col-span-2 lg:col-span-1">
                        <Image className="w-full h-40 rounded" src="/red.jpg" width={650} height={450} alt=""/>
                        <h1 className="text-xl">Feature Two</h1>
                        <p className="text-gray-500">
                            Far far away,behind the word mountains, far from te countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.  
                        </p>
                    </div>

                    <div className="grid gap-y-1  col-span-1 sm:col-span-2 lg:col-span-1 sm:col-start-2">
                        <Image className="w-full h-40 rounded" src="/yellow.png" width={1920} height={1080} alt=""/>
                        <h1 className="text-xl">Feature Three</h1>
                        <p className="text-gray-500">
                            Far far away,behind the word mountains, far from te countries Vokalia and Consonantia, there live the blind
                            texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.  
                        </p>
                    </div>

                </div>

            </section>

            <div className="flex justify-center gap-x-5">
                <Link href={"/"}>Inicio</Link> 
                <Link href={"/diseno2"}>Diseño 2</Link>
            </div>

        </body>

    )
}