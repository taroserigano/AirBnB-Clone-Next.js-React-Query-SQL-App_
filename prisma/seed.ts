import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sampleProperties = [
  {
    name: "Cozy Mountain Cabin",
    tagline: "Escape to nature in this peaceful mountain retreat",
    category: "cabin",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    country: "US",
    description:
      "A beautiful wooden cabin nestled in the mountains with stunning views. Perfect for a peaceful getaway with modern amenities and rustic charm. Features a fireplace, fully equipped kitchen, and a large deck overlooking the forest.",
    price: 150,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    amenities: "wifi,tv,kitchen,heating,workspace",
  },
  {
    name: "Beachfront Villa Paradise",
    tagline: "Wake up to ocean waves and sandy beaches",
    category: "cottage",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    country: "MX",
    description:
      "Luxurious beachfront property with direct beach access. This stunning villa offers panoramic ocean views, a private pool, and outdoor dining area. Modern interior with high-end finishes and all the comforts of home.",
    price: 350,
    guests: 8,
    bedrooms: 4,
    beds: 5,
    baths: 3,
    amenities: "wifi,tv,kitchen,heating,workspace,pool,parking",
  },
  {
    name: "Urban Loft Downtown",
    tagline: "Modern living in the heart of the city",
    category: "warehouse",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    country: "GB",
    description:
      "Stylish converted warehouse loft in downtown area. Exposed brick walls, high ceilings, and industrial design meet modern comfort. Walking distance to restaurants, shops, and entertainment.",
    price: 200,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: "wifi,tv,kitchen,heating,workspace,gym",
  },
  {
    name: "Countryside Cottage Retreat",
    tagline: "Charming cottage surrounded by rolling hills",
    category: "cottage",
    image:
      "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?w=800&q=80",
    country: "FR",
    description:
      "Traditional stone cottage in the French countryside. Beautifully restored with original features, garden with fruit trees, and peaceful surroundings. Perfect for a romantic getaway or family vacation.",
    price: 180,
    guests: 6,
    bedrooms: 3,
    beds: 3,
    baths: 2,
    amenities: "wifi,tv,kitchen,heating,parking,garden",
  },
  {
    name: "Lakeside Tiny House",
    tagline: "Minimalist living with maximum views",
    category: "tiny",
    image:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80",
    country: "CA",
    description:
      "Beautifully designed tiny house on the lake shore. Efficient use of space with all essentials included. Large windows provide stunning lake views. Perfect for couples seeking a unique experience.",
    price: 120,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: "wifi,kitchen,heating,workspace",
  },
  {
    name: "Desert Airstream Adventure",
    tagline: "Vintage airstream under the stars",
    category: "airstream",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    country: "US",
    description:
      "Restored vintage Airstream in the desert with modern upgrades. Experience stargazing like never before from your private outdoor space. Solar powered and eco-friendly.",
    price: 100,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: "wifi,kitchen,heating",
  },
  {
    name: "Forest Treehouse Magic",
    tagline: "Sleep among the trees in this magical treehouse",
    category: "magic",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
    country: "NZ",
    description:
      "Unique treehouse built high in the forest canopy. Connected by suspension bridges with incredible views of the surrounding wilderness. A truly magical experience for nature lovers.",
    price: 220,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    amenities: "wifi,kitchen,heating",
  },
  {
    name: "Glamping Tent Experience",
    tagline: "Luxury camping with all the comforts",
    category: "tent",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
    country: "AU",
    description:
      "Safari-style glamping tent with proper beds, electricity, and private bathroom. Located in a stunning natural setting with wildlife viewing opportunities. Includes guided nature walks.",
    price: 130,
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    amenities: "wifi,kitchen,heating",
  },
  {
    name: "Vintage Caravan Getaway",
    tagline: "Retro charm meets modern comfort",
    category: "caravan",
    image:
      "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80",
    country: "ES",
    description:
      "Beautifully restored vintage caravan on a peaceful farm. Surrounded by olive groves with mountain views. Compact but complete with kitchenette and cozy sleeping area.",
    price: 90,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: "wifi,kitchen,heating,parking",
  },
  {
    name: "Modern Container Home",
    tagline: "Sustainable architecture with style",
    category: "container",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80",
    country: "NL",
    description:
      "Contemporary shipping container conversion featuring modern design and eco-friendly features. Open plan living with floor-to-ceiling windows. Located in trendy neighborhood.",
    price: 160,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    amenities: "wifi,tv,kitchen,heating,workspace,parking",
  },
];

async function main() {
  console.log("Start seeding...");

  // Create a sample profile (you'll need to replace this clerkId with a real one after signing up)
  const profile = await prisma.profile.upsert({
    where: { clerkId: "sample_clerk_id" },
    update: {},
    create: {
      clerkId: "sample_clerk_id",
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
  });

  console.log(`Created profile with id: ${profile.id}`);

  // Create sample properties
  for (const property of sampleProperties) {
    const created = await prisma.property.create({
      data: {
        ...property,
        profileId: profile.clerkId,
      },
    });
    console.log(`Created property: ${created.name}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
