import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function About() {
  return (
    <section>
      <div className="container flex flex-col gap-10 md:flex-row">
        <div className="flex-1">
          <Image
            src="/about.jpg"
            alt="about image"
            width={450}
            height={20}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="section__title">
            FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.
          </h2>
          <div className="separator"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est,
            suscipit animi et atque exercitationem eaque? Dicta obcaecati
            temporibus inventore at commodi, nemo facilis voluptatibus tempore
            libero eius ullam? Deserunt.
          </p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            <li className="text-sm text-paragraphColor flex gap-1">
              <FaCheck className="text-secondaryColor" />
              Best Price
            </li>
            <li className="text-sm text-paragraphColor flex gap-1">
              <FaCheck className="text-secondaryColor" />
              Best Service
            </li>
            <li className="text-sm text-paragraphColor flex gap-1">
              <FaCheck className="text-secondaryColor" />
              Fresh Ingredient
            </li>
            <li className="text-sm text-paragraphColor flex gap-1">
              <FaCheck className="text-secondaryColor" />
              Health Protocol
            </li>
          </ul>
          <Link href="/" className="btn btn-primary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
