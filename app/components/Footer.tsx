import Link from 'next/link'

import { FaTwitter, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bottom-0 mx-auto flex   flex-col items-center px-0  md:px-14  border shadow-lg  dark:bg-[#020817] relative w-full p-3 border-t dark:border-t-[#1E293B] border-t-[#E2E8F0]">
      <div className="mx-auto flex w-full flex-col justify-between gap-12 p-4 md:flex-row">
        {/* Logo and Tagline */}
        <div className="flex flex-col text-primary">
          <Link href="/" className="flex cursor-pointer items-center gap-2">
            <img
              src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              alt="Logo"
              width={300}
              height={200}
              className="size-16 rounded-full"
            />
            <div className="flex flex-col">
              <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1 text-4xl font-extrabold tracking-tighter text-transparent">
                100xDevs
              </span>
              <p className="text-lg leading-none tracking-tight text-primary">
                because 10x ain &apos;t enough.
              </p>
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex flex-col gap-4 py-8 ">
            <h4 className="font-semibold tracking-tight text-foreground">Follow us</h4>
            <div className="flex gap-4">
              <Link href="https://x.com/kirat_tw" target="_blank" className="rounded-lg bg-blue-500/10 p-2 text-primary">
                <FaTwitter className="size-6 transition-all duration-300 hover:text-blue-600" />
              </Link>
              <Link href="https://www.instagram.com/kirat_ins/" target="_blank" className="rounded-lg bg-blue-500/10 p-2 text-primary">
                <FaInstagram className="size-6 transition-all duration-300 hover:text-blue-600" />
              </Link>
              <Link href="https://www.youtube.com/@harkirat1" target="_blank" className="rounded-lg bg-blue-500/10 p-2 text-primary">
                <FaYoutube className="size-6 transition-all duration-300 hover:text-blue-600" />
              </Link>
              <Link href="https://github.com/code100x" target="_blank" className="rounded-lg bg-blue-500/10 p-2 text-primary">
                <FaGithub className="size-6 transition-all duration-300 hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg tracking-tighter text-primary">100x Links</h4>
          <div className="flex flex-col gap-1 text-lg tracking-tighter">
            <Link href="https://projects.100xdevs.com" target="_blank" className="text-foreground/75 transition-all duration-300 hover:text-blue-600">
              Projects
            </Link>
            <Link href="https://report-100xdevs.vercel.app/" target="_blank" className="text-foreground/75 transition-all duration-300 hover:text-blue-600">
              Report
            </Link>
          </div>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg tracking-tighter text-primary">100x Legal</h4>
          <div className="flex flex-col gap-1 text-lg tracking-tighter">
            <Link href="/tnc" className="text-foreground/75 transition-all duration-300 hover:text-blue-600">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="text-foreground/75 transition-all duration-300 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/refund" className="text-foreground/75 transition-all duration-300 hover:text-blue-600">
              Refund & Cancellation
            </Link>
          </div>
        </div>
       
      </div>
      <p className="text-center text-7xl md:text-7xl lg:text-[10rem] xl:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-white dark:from-blue-600 dark:to-blue-100">
  100xDevs
</p>

    </div>
  )
}

export default Footer
