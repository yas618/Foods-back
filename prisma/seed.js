import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed...');

    await prisma.food.deleteMany();

    await prisma.food.createMany({
        data: [
            {
                nome: 'Macarrão',
                description: 'Massa, molho de tomate e queijo',
                price: 23.0,
                category: 'Massa',
                available: 4.5,
            },
            {
                nome: 'Poke',
                description: 'Salmão, tomate, manga, cebola e cream tis',
                price: 32.0,
                category: 'fresh food',
                available: 5.0,
            },
            {
                nome: 'Salada',
                description: 'Alface, tomate e cebola',
                price: 20.0,
                category: 'Fresh food',
                available: 5.0,
            },
            {
                nome: 'Espaguete',
                description: 'Massa, molho de tomate e carne moída',
                price: 21.0,
                category: 'Massa',
                available: 4.3,
            },
            {
                nome: 'Parmegiana de Frango',
                description: 'Filé de frango empanado, molho de tomate e muçarela',
                price: 35.0,
                category: 'Carne',
                available: 4.8,
            },
            {
                nome: 'Hambúrguer Gourmet',
                description:
                    'Pão brioche, carne bovino 180 g, queijo cheddar, bacon e maionese temperada',
                price: 39.0,
                category: 'Lanches',
                available: 4.9,
            },
            
        ],
    });

    console.log('✅ Seed concluído com sucesso!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
