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
    <section className="py-4">
      <div className="max-w-6xl mx-auto px-1">
        
        {/* Heading */}
        <h2 className="text-center text-[16px] md:text-[30px] lg:text-[36px] font-semibold text-gray-900 mb-10">
          Why Just Our AI Services
        </h2>


        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mappedServices.map((service) => (
            <div
              key={service.id}
              className="flex items-start gap-4 bg-white rounded-xl p-4 md:p-4 lg:p-8 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12  shrink-0">
                {/* <Bot size={22} /> */}
                <img src={service.icon} alt="Icon" width={32.22} height={32.22} />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-[16px] lg:text-[20px] text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-[14px] lg:text-[18px] text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
