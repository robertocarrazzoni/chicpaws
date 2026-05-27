import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const apparel = await prisma.category.upsert({
    where: { slug: "fashion" },
    update: {},
    create: {
      name: "Fashion",
      slug: "fashion"
    }
  });

  await prisma.product.upsert({
    where: { slug: "camiseta-basica-premium" },
    update: {},
    create: {
      name: "Camiseta Básica Premium",
      slug: "camiseta-basica-premium",
      description: "Peça essencial com acabamento premium para a vitrine inicial do ecommerce.",
      price: 129.9,
      stock: 24,
      categoryId: apparel.id
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
