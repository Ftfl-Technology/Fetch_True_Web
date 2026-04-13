'use client'

import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/src/components/Footer/Footer";
import { ModuleProvider } from "@/src/context/ModuleContext";
import { HomeRecommendedProvider } from "@/src/context/HomeRecommendedContext";
import { HomeMostPopularProvider } from "@/src/context/HomeMostPopularContext";
import { CategoriesProvider } from "@/src/context/CategoriesContext";
import { RecommendedServicesProvider } from "@/src/context/RecommendedContext";
import { MostPopularProvider } from "@/src/context/MostPopularContext";
import { TopTrendingProvider } from "@/src/context/TopTrendingContext";
import { RecommendedProvidersProvider } from "@/src/context/RecommendedProviderContext"
import { BannerCategorySelectionProvider } from "@/src/context/BannerContext"
import { SubCategoryProvider } from "@/src/context/SubCategoriesContext";
import { ServiceDetailsProvider } from "@/src/context/ServiceDetailsContext";
import { RecommendedServiceByCategoryIdProvider } from "@/src/context/RecommendedServiceByCategoryIdContext";
import { MostPopularServiceByCategoryProvider } from "@/src/context/MostPopularServiceByCategoryIdContext";
import { TopTrendingServiceByCategoryIdProvider } from "@/src/context/TopTrendingServiceByCategoryIdContext";
import { OfferProvider } from "@/src/context/OfferContext";
import { ModulewiseServiceProvider } from "@/src/context/ModulewiseServiceContext";
import { PopularProvidersProvider } from "@/src/context/PopularProviderContext";
import { TrendingProvidersProvider } from "@/src/context/TrendingProviderContext";
import { RecommendedCategoryProvidersProvider } from "@/src/context/RecommendedCategoryProviderContext";
import { TrendingCategoryProvider } from "@/src/context/TrendingCategoryProviderContext";
import { WhyChooseServiceProvider } from "@/src/context/WhyJustOurServiceContext";
import { CategorywiseServiceProvider } from "@/src/context/CategorywiseServiceContext";
import { ReviewProvider } from "@/src/context/ReviewContext"
import { CheckoutProvider } from "@/src/context/CheckoutContext"
import { CouponProvider } from "@/src/context/CouponsContext"
import { CommissionProvider } from "@/src/context/PlatformFeeContext"
import { HomeTopTrendingProvider } from "@/src/context/HomeTopTrendingContext"
import { TopRatedProviders } from "@/src/context/HomeTopRatedProvider"
import { FranchiseModelProvider } from "@/src/context/FranchiseContext";
import { ServicewiseProviderProvider } from "@/src/context/ServicewiseProviderContext";
import { AuthProvider } from "@/src/context/AuthContext";
import { ResetPassProvider } from "@/src/context/ResetPassContext";
import { UserProvider } from "@/src/context/UserContext";
import { FavouriteProvider } from "@/src/context/FavouriteContext";
import { WalletProvider } from "@/src/context/WalletContext";
import { LeadsProvider } from "@/src/context/LeadsContext";
import { FiveXProvider } from "@/src/context/FiveXContext";
import { SubscribedServicesProvider } from "@/src/context/OnDemandSubscriberContext"
import { SubscribedCategoryServicesProvider } from "@/src/context/OnDemandSubscriberCategoryContext"
import { usePathname } from "next/navigation";
import { PayoutProvider } from "@/src/context/PayoutContext";
import { ServiceCustomerProvider } from "@/src/context/ServiceCustomerContext";
import { AllCouponProvider } from "@/src/context/CoupanContext";
import { CategoryBannerProvider } from "@/src/context/CategoryBannerContext";
import { BannerProvider } from "@/src/context/CarouselBannerContext";
import { PackageProvider } from "@/src/context/PackageContext";
import { FavouriteProvidersProvider } from "@/src/context/FavouriteProviderContext";
import { AllServicesProvider } from "@/src/context/AllServicesContext";
import GetUserLocation from "@/src/components/UserLocation/GetUserLocation";

// export const metadata = {
//   title: "Fetch True",
//   description: "Your App Description",
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();


  const isDashboardPage = pathname?.includes('/providers/');

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <UserProvider>
            <WalletProvider>
              <LeadsProvider>
                <PayoutProvider>
                  <ServiceCustomerProvider>
                    <AllCouponProvider>
                      <CategoryBannerProvider>
                        <BannerProvider>
                          <FavouriteProvider>
                            <FavouriteProvidersProvider>
                              <ResetPassProvider>
                                <FiveXProvider>
                                  <ModuleProvider>
                                    <CategoriesProvider>
                                      <HomeRecommendedProvider>
                                        <HomeMostPopularProvider>
                                          <RecommendedServicesProvider>
                                            <MostPopularProvider>
                                              <TopTrendingProvider>
                                                <RecommendedProvidersProvider>
                                                  <BannerCategorySelectionProvider>
                                                    <SubCategoryProvider>
                                                      <ServiceDetailsProvider>
                                                        <RecommendedServiceByCategoryIdProvider>
                                                          <MostPopularServiceByCategoryProvider>
                                                            <TopTrendingServiceByCategoryIdProvider>
                                                              <PopularProvidersProvider>
                                                                <TrendingProvidersProvider>
                                                                  <RecommendedCategoryProvidersProvider>
                                                                    <TrendingCategoryProvider>
                                                                      <WhyChooseServiceProvider>
                                                                        <CategorywiseServiceProvider>

                                                                          <ModulewiseServiceProvider>
                                                                            <OfferProvider>
                                                                              <ReviewProvider>
                                                                                <CheckoutProvider>
                                                                                  <CouponProvider>
                                                                                    <CommissionProvider>
                                                                                      <HomeTopTrendingProvider>
                                                                                        <TopRatedProviders>
                                                                                          <FranchiseModelProvider>
                                                                                            <ServicewiseProviderProvider>
                                                                                              <SubscribedServicesProvider>
                                                                                                <SubscribedCategoryServicesProvider>
                                                                                                  <PackageProvider>
                                                                                                    <AllServicesProvider>


<GetUserLocation/>
                                                                                                      <main>{children}</main>
                                                                                                    </AllServicesProvider>
                                                                                                  </PackageProvider>



                                                                                                </SubscribedCategoryServicesProvider>

                                                                                              </SubscribedServicesProvider>

                                                                                            </ServicewiseProviderProvider>
                                                                                          </FranchiseModelProvider>

                                                                                        </TopRatedProviders>

                                                                                      </HomeTopTrendingProvider>

                                                                                    </CommissionProvider>

                                                                                  </CouponProvider>



                                                                                </CheckoutProvider>

                                                                              </ReviewProvider>
                                                                            </OfferProvider>
                                                                          </ModulewiseServiceProvider>
                                                                          {!isDashboardPage && <Footer />}
                                                                        </CategorywiseServiceProvider>
                                                                      </WhyChooseServiceProvider>
                                                                    </TrendingCategoryProvider>
                                                                  </RecommendedCategoryProvidersProvider>
                                                                </TrendingProvidersProvider>
                                                              </PopularProvidersProvider>
                                                            </TopTrendingServiceByCategoryIdProvider>
                                                          </MostPopularServiceByCategoryProvider>
                                                        </RecommendedServiceByCategoryIdProvider>
                                                      </ServiceDetailsProvider>
                                                    </SubCategoryProvider>
                                                  </BannerCategorySelectionProvider>
                                                </RecommendedProvidersProvider>
                                              </TopTrendingProvider>
                                            </MostPopularProvider>
                                          </RecommendedServicesProvider>
                                        </HomeMostPopularProvider>
                                      </HomeRecommendedProvider>
                                    </CategoriesProvider>
                                  </ModuleProvider>
                                </FiveXProvider>
                              </ResetPassProvider>
                            </FavouriteProvidersProvider>
                          </FavouriteProvider>
                        </BannerProvider>
                      </CategoryBannerProvider>
                    </AllCouponProvider>
                  </ServiceCustomerProvider>
                </PayoutProvider>
              </LeadsProvider>
            </WalletProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
