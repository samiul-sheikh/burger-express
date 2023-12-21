import Image from "next/image";
import Link from "next/link";

export default function Category() {
  return (
    <section>
      <div className="container flex flex-col gap-5 md:flex-row">
        <div className="bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              src="/burger-1.png"
              alt="category image"
              width={200}
              height={200}
              className="absolute w-28 -left-4 -bottom-4"
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">Food</h4>
              <p className="text-sm">Lorem ipsum dolor sit</p>
            </div>
            <Link href="/" className="text-blackColor cursor-pointer">
              Buy Online
            </Link>
          </div>
        </div>

        <div className="bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              src="/snack-1.png"
              alt="category image"
              width={200}
              height={200}
              className="absolute w-28 -left-4 -bottom-4"
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">Snack</h4>
              <p className="text-sm">Lorem ipsum dolor sit</p>
            </div>
            <Link href="/" className="text-secondaryColor cursor-pointer">
              Buy Online
            </Link>
          </div>
        </div>

        <div className="bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
          <div className="basis-1/3 relative">
            <Image
              src="/beverage-2.png"
              alt="category image"
              width={200}
              height={200}
              className="absolute w-28 -left-4 -bottom-4"
            />
          </div>
          <div>
            <div className="mb-2">
              <h4 className="card__title">Beverage</h4>
              <p className="text-sm">Lorem ipsum dolor sit</p>
            </div>
            <Link href="/" className="text-secondaryColor cursor-pointer">
              Buy Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
