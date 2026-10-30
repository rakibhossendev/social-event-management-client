
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const galleryData = [
  {
    id: 1,
    title: "Community Clean-up",
    category: "Environment",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
    description: "Volunteers working together to keep the city clean.",
  },
  {
    id: 2,
    title: "Tree Plantation",
    category: "Green Community",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    description: "Making our environment greener, one tree at a time.",
  },
  {
    id: 3,
    title: "Food Distribution",
    category: "Social Support",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433",
    description: "Sharing food and bringing smiles to people.",
  },
  {
    id: 4,
    title: "Beach Clean-up",
    category: "Environment",
    image:
      "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5",
    description: "Taking action to protect our natural environment.",
  },
  {
    id: 5,
    title: "Community Volunteering",
    category: "Volunteering",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    description: "People coming together to make a difference.",
  },
  {
    id: 6,
    title: "Helping Hands",
    category: "Social Support",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
    description: "Small acts of kindness can create big changes.",
  },
];

export default function Gallery() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-primary">
            Our Memories
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Moments That <span className="text-primary">Matter</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore the moments, smiles, and meaningful activities created
            by our amazing community of volunteers.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative px-1 sm:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group h-full overflow-hidden border-border bg-card py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-800 backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-card-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Controls */}
            <CarouselPrevious className="-left-3 size-10 border-border bg-card text-foreground hover:bg-primary hover:text-white sm:-left-5" />
            <CarouselNext className="-right-3 size-10 border-border bg-card text-foreground hover:bg-primary hover:text-white sm:-right-5" />
          </Carousel>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Together, we can make every moment meaningful.
        </p>
      </div>
    </section>
  );
}
