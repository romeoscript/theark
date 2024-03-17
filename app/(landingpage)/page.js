import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Resources from "@/components/Resources";
import Stories from "@/components/Stories";
import Sub from "@/components/Sub";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Offer />
      <Stories />
      <Resources />
      <Sub />
      <Faq />
    </main>
  );
}
