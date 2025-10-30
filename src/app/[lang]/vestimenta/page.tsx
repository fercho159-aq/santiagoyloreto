import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/lib/i18n-config";

type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const getImages = (dict: any): ImagePlaceholder[] => [
    {
      "id": "dress-code-welcome-1",
      "description": dict.data.dress_code_images.welcome_1,
      "imageUrl": "/images/dress-code-welcome/5 (1).jpg",
      "imageHint": "beach fashion"
    },
    {
      "id": "dress-code-welcome-2",
      "description": dict.data.dress_code_images.welcome_2,
      "imageUrl": "/images/dress-code-welcome/4 (2).png",
      "imageHint": "mens beachwear"
    },
    {
      "id": "dress-code-welcome-3",
      "description": dict.data.dress_code_images.welcome_3,
      "imageUrl": "/images/dress-code-welcome/6 (1).jpg",
      "imageHint": "cocktail dress"
    },
    {
      "id": "dress-code-wedding-1",
      "description": dict.data.dress_code_images.wedding_1,
      "imageUrl": "/images/dress-code-wedding/1 (1).jpg",
      "imageHint": "garden wedding"
    },
    {
      "id": "dress-code-wedding-2",
      "description": dict.data.dress_code_images.wedding_2,
      "imageUrl": "/images/dress-code-wedding/(1).png",
      "imageHint": "formal suit"
    },
    {
      "id": "dress-code-wedding-3",
      "description": dict.data.dress_code_images.wedding_3,
      "imageUrl": "/images/dress-code-wedding/2.jpg",
      "imageHint": "elegant gown"
    }
];

export default async function DressCodePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);
  const pageDict = dict.dressCodePage;
  const images = getImages(dict);

  const welcomeImages = [
    images.find((img) => img.id === "dress-code-welcome-1"),
    images.find((img) => img.id === "dress-code-welcome-2"),
    images.find((img) => img.id === "dress-code-welcome-3"),
  ];

  const weddingImages = [
    images.find((img) => img.id === "dress-code-wedding-1"),
    images.find((img) => img.id === "dress-code-wedding-2"),
    images.find((img) => img.id === "dress-code-wedding-3"),
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header dictionary={dict.nav} />
      <main className="flex-1">
        <div className="bg-secondary py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl text-primary">{pageDict.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {pageDict.subtitle}
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              <section>
                <div className="text-center mb-8">
                  <h2 className="font-headline text-3xl text-primary">{pageDict.welcomeTitle}</h2>
                  <p className="mt-2 text-muted-foreground">
                    {pageDict.welcomeSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {welcomeImages.map((image, index) =>
                    image ? (
                      <Card key={index} className="overflow-hidden bg-background shadow-lg">
                        <div className="aspect-[2/3] relative">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 33vw"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      </Card>
                    ) : null
                  )}
                </div>
              </section>

              <section>
                <div className="text-center mb-8">
                  <h2 className="font-headline text-3xl text-primary">{pageDict.weddingTitle}</h2>
                  <p className="mt-2 text-muted-foreground">
                    {pageDict.weddingSubtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                  {weddingImages.map((image, index) =>
                    image ? (
                      <Card key={index} className="overflow-hidden bg-background shadow-lg">
                        <div className="aspect-[2/3] relative">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 33vw"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      </Card>
                    ) : null
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer dictionary={dict.footer} />
    </div>
  );
}
