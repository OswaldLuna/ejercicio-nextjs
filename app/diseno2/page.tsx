import Image from "next/image"
import Link from "next/link"

export default function Page(){

    return (
        <div>
            <section className="grid  justify-center grid-cols-1 m-5 gap-y-5 min-w-[300px] sm:grid-cols-2 sm:gap-x-5">
        
            <div className="grid justify-items-center bg-white p-5 gap-y-7 rounded relative">
                
                <button className="rotate-90 absolute top-[10px] right-0">...</button>
                <Image  className="w-24 rounded-full" src="/perfil1.png" alt="picture" width={100} height={100} />
                <div className="grid justify-items-center">
                    <p className=" text-xl text-black">Sathish Kumar</p>
                    <p className="text-xs text-gray-500">UI/UX Mobile Designer</p>
                </div>
                
                <div className="flex gap-x-7">
                    <div className="grid justify-items-center"><p className="text-xs text-gray-500">Projects</p> <p className="text-black">17</p></div>
                    <div className="grid justify-items-center"><p className="text-xs text-gray-500">Following</p> <p className="text-black">159</p></div>
                    <div className="grid justify-items-center"><p className="text-xs text-gray-500">Followers</p> <p className="text-black">205</p></div>
                </div>
                <center className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adi iscing elit. Sed 
                    et est  et velit ornare ultrices. Ut vitae diam volutpatrisus eget.
                </center>
                <div className="flex gap-x-4">
                    <Image className="w-5 hover:cursor-pointer" src="/twitter.png" alt="picture" width={20} height={20} />
                    <Image className="w-5 hover:cursor-pointer" src="/facebook.png" alt="picture" width={20} height={20} />
                    <Image className="w-5 hover:cursor-pointer" src="/google-plus.png" alt="picture" width={20} height={20} />
                    <Image className="w-5 hover:cursor-pointer" src="/instagram.png" alt="picture" width={20} height={20} />
                </div>
                <button className="border-2 border-gray-300 rounded-xl py-2 px-16 text-sm text-gray-500
                hover:text-white hover:bg-teal-600 hover:shadow-md hover:border-none hover:shadow-zinc-800">View Profile</button>
            
            </div>
        
            <div className="grid justify-items-center bg-white p-5 gap-y-7 rounded relative">
                
                <button className="rotate-90 absolute top-[10px] right-0">...</button>
                <Image  className="w-24 rounded-full" src="/perfil2.png" alt="picture" width={100} height={100} />
                <div className="grid justify-items-center">
                    <p className=" text-xl text-black">Elizabeth Johansson</p>
                    <p className="text-xs text-gray-500">UI/UX Mobile Designer</p>
                </div>
                
                <div className="flex gap-x-7">
                    <div className="grid justify-items-center"><p className="text-xs text-gray-500">Projects</p> <p className="text-black">11</p></div>
                    <div className="grid justify-items-center"><p className="text-xs text-gray-500">Following</p> <p className="text-black">250</p></div>
                    <div className="grid justify-items-center"><p className="text-xs text-gray-500">Followers</p> <p className="text-black">2185</p></div>
                </div>
                <center className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adi iscing elit. Sed 
                    et est  et velit ornare ultrices. Ut vitae diam volutpatrisus eget.
                </center>
                <div className="flex gap-x-4">
                    <Image className="w-5 hover:cursor-pointer" src="/twitter.png" alt="picture" width={20} height={20} />
                    <Image className="w-5 hover:cursor-pointer" src="/facebook.png" alt="picture" width={20} height={20} />
                    <Image className="w-5 hover:cursor-pointer" src="/google-plus.png" alt="picture" width={20} height={20} />
                    <Image className="w-5 hover:cursor-pointer" src="/instagram.png" alt="picture" width={20} height={20} />
                </div>
                <button className="border-2 border-gray-300 rounded-xl py-2 px-16 text-sm text-gray-500
                hover:text-white hover:bg-teal-600 hover:shadow-md hover:border-none hover:shadow-zinc-800">View Profile</button>

            </div>



        </section>

        <div className="flex justify-center gap-x-5">
            <Link href={"/"}>Inicio</Link> 
            <Link href={"/diseno3"}>Diseño 3</Link>
        </div>

    </div>    
    )
}