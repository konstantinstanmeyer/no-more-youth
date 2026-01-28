import Image from "next/image"
import Link from "next/link"

export default function Footer (){
    return (
        <footer
            className="h-40 md:h-54 w-full absolute bottom-0 z-50 bg-cover"
            style={{ backgroundImage: 'url(/footer-bg.webp)'}}
        >
            <div className="w-full h-full flex flex-col md:flex-row justify-end md:justify-center md:items-end items-center">
                <div className="flex-row md:mb-10 w-[240px] justify-between md:justify-normal md:w-auto hidden md:flex">
                    <Link className="mx-3" target="_blank" href="">
                        <Image className='invert' height={25} width={25} src="/bandsintown.svg" alt="social"/>
                    </Link>
                    <Link className="mx-3" target="_blank" href="https://www.instagram.com/nomoreyouthma/">
                        <Image className='invert' height={25} width={25} src="/instagram.svg" alt="social"/>
                    </Link>
                    <Link className="mx-3" target="_blank" href="https://www.facebook.com/nomoreyouthma/">
                        <Image className='invert' height={25} width={25} src="/facebook.svg" alt="social"/>
                    </Link>
                </div>
                <Image
                    src="/no-more-youth-logo.png"
                    className="h-[75px] w-[250px] object-contain md:mb-4"
                    width={200}
                    height={50}
                    alt="NO MORE YOUTH"
                />
                <div className="flex flex-row mb-6 md:mb-10 w-[240px] justify-between md:justify-normal md:w-auto">
                    <Link className="mx-3" target="_blank" href="https://music.apple.com/ca/artist/no-more-youth/1693960049">
                        <Image className="invert" height={25} width={25} src="/applemusic.svg" alt="social2"/>
                    </Link>
                    <Link className="mx-3" target="_blank" href="https://open.spotify.com/artist/7G2ogxJ8vNshWwonYuLwH6">
                        <Image className="invert" height={25} width={25} src="/spotify.svg" alt="social2"/>
                    </Link>
                    <Link className="mx-3" target="_blank" href="https://www.youtube.com/@NoMoreYouth">
                        <Image className="invert" height={25} width={25} src="/youtube.svg" alt="social2"/>
                    </Link>
                    <Link className="mx-3 md:hidden" target="_blank" href="">
                        <Image className='invert' height={25} width={25} src="/bandsintown.svg" alt="social"/>
                    </Link>
                    <Link className="mx-3 md:hidden" target="_blank" href="https://www.instagram.com/nomoreyouthma/">
                        <Image className='invert' height={25} width={25} src="/instagram.svg" alt="social"/>
                    </Link>
                    <Link className="mx-3 md:hidden" target="_blank" href="https://www.facebook.com/nomoreyouthma/">
                        <Image className='invert' height={25} width={25} src="/facebook.svg" alt="social"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}