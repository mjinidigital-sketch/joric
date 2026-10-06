import Image from "next/image";

export default function Certification() {
    return (
        <section className="relative overflow-hidden bg-primary py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">

                    {/* Text */}
                    <div className="text-center md:text-left">
                        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                            Professional Certification
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight text-accent md:text-4xl lg:text-5xl">
                            NCA <span className="text-white">Certified</span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">
                            We are proud to be certified by the National Construction
                            Authority (NCA), demonstrating our commitment to professionalism,
                            quality, and industry standards.
                        </p>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-white/60 md:text-base">
                            Our certification reflects our dedication to delivering reliable
                            and professional services to our clients.
                        </p>
                    </div>

                    {/* Certificate */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 md:p-6">
                            <div className="overflow-hidden rounded-2xl bg-white">
                                <Image
                                    src="/NCA-CERT.webp"
                                    alt="NCA Certification Certificate"
                                    width={800}
                                    height={600}
                                    className="h-auto w-full object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}