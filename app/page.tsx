import Link from "next/link"

export default function (){
    return(
        <div className="flex gap-x-5">
            <Link href={'/diseno1'}>Diseño 1</Link>
            <Link href={'/diseno2'}>Diseño 2</Link>
            <Link href={'/diseno3'}>Diseño 3</Link>
        </div>
        
    )
}