import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Image from "next/image";

export default function Certification() {
  return (
    <>
      <Navigation />
      <section className="w-full py-12 ">

        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              NCA Certification
            </h2>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
              <Image
                src="/NCA-CERT.webp"
                alt="NCA Certification"
                width={500}
                height={350}
                className="h-auto w-full max-w-md object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}