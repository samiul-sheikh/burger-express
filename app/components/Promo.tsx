import Image from "next/image";
import Link from "next/link";

export default function Promo() {
  return (
    <section>
      <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
        <div className="bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
          <div className="w-40 mx-auto hover:animate-movingY md:mx-5">
            <Image
              src="/promo-1.png"
              alt="promo image"
              width={200}
              height={200}
            />
          </div>

          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday Promo</p>
            <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, dignissimos.
            </p>
            <Link href="/" className="text-xs text-secondaryColor">
              Buy Online
            </Link>
          </div>
        </div>

        <div className="bg-primaryColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
          <div className="w-40 mx-auto hover:animate-movingY md:mx-5">
            <Image
              src="/promo-2.png"
              alt="promo image"
              width={200}
              height={200}
            />
          </div>

          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday Promo</p>
            <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, dignissimos.
            </p>
            <Link href="/" className="text-xs text-secondaryColor">
              Buy Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
