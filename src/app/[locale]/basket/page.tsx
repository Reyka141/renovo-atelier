import { Basket, Footer, Header, OurServicesSlider } from '@/components';

export default async function BasketPage() {
    return (
        <div className="bg-white">
            <Header textColor="black" />
            <main className="flex flex-col gap-9 pt-[102px] md:pt-[120px] lg:pt-[136px] xl:gap-16 2xl:gap-28">
                <Basket />
                {/* Another offers */}
                <OurServicesSlider />
                <Footer />
            </main>
        </div>
    );
}
