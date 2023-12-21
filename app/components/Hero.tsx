import Link from "next/link";
import Image from "next/image";
import { FaEnvira, FaUtensils } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

export default function Hero() {
  return (
    <section>
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="mx-auto md:basis-1/2 lg:basis-2/5">
          <Image
            src="/home-image.png"
            alt="logo"
            width={300}
            height={30}
            className="w-60 md:w-full animate-movingY"
          />
        </div>
        <div className="text-center md:text-start md:basis-1/2 lg:basis-3/5">
          <h1 className="home__title">HAPPY TIME WITH TESTY BURGER</h1>
          <div className="separator mx-auto md:mx-0"></div>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            accusantium, nostrum necessitatibus ullam eos laborum pariatur
            suscipit assumenda nulla.
          </p>
          <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div className="text-center">
              <div className="text-secondaryColor text-4xl">
                <FaUtensils />
              </div>
              <br />
              <div className="">Delicious</div>
            </div>
            <div className="text-center">
              <div className="text-secondaryColor text-4xl">
                <FaDroplet />
              </div>
              <br />
              Fresh
            </div>
            <div className="text-center">
              <div className="text-secondaryColor text-4xl">
                <FaEnvira />
              </div>
              <br />
              Organic
            </div>
          </div>
          <Link href="/" className="btn btn-primary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
