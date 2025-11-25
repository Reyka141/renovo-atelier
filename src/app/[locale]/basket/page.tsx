import { Basket, Footer, Header } from '@/components';

export default async function BasketPage() {
    return (
        <div className="bg-white">
            <Header textColor="black" />
            <main className="flex flex-col gap-9 pt-[136px] xl:gap-16 2xl:gap-28">
                <Basket />
                <Footer />
            </main>
        </div>
    );
}
