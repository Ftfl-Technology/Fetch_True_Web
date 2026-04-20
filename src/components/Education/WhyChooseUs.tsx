'use client';

import { useWhyChooseService } from "@/src/context/WhyJustOurServiceContext";
import { useEffect } from "react";

type props = {
  moduleId: string;
}
export default function WhyChooseUs({ moduleId }: props) {

  const {
    services,
    loading,
    error,
    fetchWhyServices,
    clearServices,
  } = useWhyChooseService();

  useEffect(() => {
    if (!moduleId) return;
    clearServices();
    fetchWhyServices(moduleId);
  }, [moduleId]);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const mappedServices = services.flatMap((service) =>
    service.items.map((item) => ({
      id: `${service._id}-${item.title}`,
      icon: item.icon,
      title: item.title,
      description: item.description,
      module: service.module,
    }))
  );

  return (
    /*  SECTION CENTERED */
    <section className="w-full max-w-[1218px] mx-auto px-4 md:px-8 py-10">

      {/* HEADER */}
      <div className="mb-8 text-center">
        <h2 className="text-[16px] md:text-[24px] font-semibold text-black">
          What you will get from us
        </h2>
      </div>

      {/* CARDS */}
      <div className="space-y-6">
        {mappedServices.map((item,index) => (
          /*  CARD CENTERED */
          <div
            key={index}
            className="
              flex items-center
              mx-auto
              w-full
              max-w-[1218px]
              gap-8 md:gap-10
              bg-[#F2F2F2]
              rounded-2xl
              px-10 py-10
            "
          >
            {/* ICON */}
            <div className="flex items-center justify-center  rounded-xl">
              {/* <img
                src="/image/eduwcu.png"
                alt="checkicon"
                className="object-contain w-[29px] md:w-[45px]"
              /> */}
              <img src={item.icon} alt="Icon" width={60} height={60} />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-[16px] md:text-[24px] font-semibold text-black leading-tight">
                {item.title}
              </h3>
              <p className="text-[12px] md:text-[18px] text-gray-600 mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

