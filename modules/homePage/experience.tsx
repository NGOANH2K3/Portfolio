const Card = () => {
    return(
        <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-2xl uppercase">🏢 Company Name</h4>
            <p className="p-light2">
                4/2025 | Web Developer
            </p>
            <p className="p-light2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
                magnam voluptatem repudiandae modi exercitationem amet laborum distinctio iure consequatur
                asperiores eos optio accusamus delectus recusandae magni soluta minus cupiditate quidem?
            </p>
        </div>
    )
}


export function Experiencs(){
    return (
        <section id="experience" className="bg-background2">
            <div className="container relative">
                <div className="py-14 border-t border-stone-800 flex flex-col gap-6 ">
                    <div>
                        <h2 className="heading-01">Work History</h2>
                    </div>

                    <div className="border-l border-stone-800 py-6 pl-6 md:pl-10 md:py-10">
                        <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}