import Image from 'next/image';
import adobe from "../../public/adobe.svg";
import atlassian from "../../public/atlassian.svg";
import google from "../../public/google.svg";
import medium from '../../public/medium.svg';
import framer from '../../public/framer.svg';
import coinbase from '../../public/coinbase.svg';
import { motion } from "framer-motion"

import Link from 'next/link';
import { CoverDemo } from './layout/Cover';
import AnimatedShinyTextDemo from './layout/TopText';

const HeroSection = () => {
  return (
    <>
  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            type: 'spring',
            damping: 10,
            stiffness: 100,
          }}
        >

      <section className="relative container min-w-full pb-10 h-fit py-10 dark:bg-hero-bg-dark bg-hero-bg-light object-contain">
        <div className="flex flex-col items-center pt-10">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              
                <AnimatedShinyTextDemo />
              <CoverDemo />
              <p className="md:w-4/6 w-full text-center my-3 dark:text-[#94A3B8] text-[#64748B] font-medium ">
              Master programming skills and unlock exclusive job and internship opportunities—remote, onsite, or hybrid, we&apos;ve got what you&apos;re looking for
              </p>
            </div>
            <div className="md:w-4/6 w-full flex md:flex-row flex-col  items-center justify-center my-4">
              <Link
                href={'/jobs'}
                aria-label="explore-jobs"
                className="md:w-fit w-full rounded-lg py-2 px-3 bg-[#3259E8] text-sm text-[#FFFF] font-medium hover:bg-[#3e63e9] text-center"
              >
                Explore Jobs
              </Link>
              <Link
                href={'#testimonials'}
                className="md:w-fit w-full rounded-lg py-2 px-3 border text-sm md:ml-3 md:my-0 my-3 bg-transparent dark:bg-slate-900 dark:text-[#94A3B8] text-[#64748B] font-medium   dark:hover:bg-slate-900 hover:bg-slate-100 text-center"
                aria-label="view-testimonals"
              >
                View Testimonials
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center my-5">
            <p className="border border-[#4E7AFF] rounded-lg bg-opacity-10 py-1 px-3 text-[#4E7AFF] text-xs w-fit font-medium">
              Trusted By Leading Companies
            </p>
            <div className="grid md:grid-cols-6 grid-cols-2 items-center gap-1 md:mt-0 mt-4 dark">
              {trustedCompanies.map((company, i) => (
                <Image
                  key={i}
                  className="mx-4 md:w-28 w-24 h-20 md:h-24"
                  src={company.icon}
                  alt={`${company.name}-icon`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      </motion.div>

    </>
  );
};

export default HeroSection;

export const trustedCompanies = [
    {
      icon: adobe,
      name: 'adobe',
    },
    {
      icon: atlassian,
      name: 'atlassian',
    },
    {
      icon: medium,
      name: 'medium',
    },
    {
      icon: coinbase,
      name: 'coinbase',
    },
    {
      icon: framer,
      name: 'framer',
    },
    {
      icon: google,
      name: 'google',
    },
  ];
  
