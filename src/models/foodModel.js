import prisma from '../utils/prismaClient.js';

export const create = async (data) => {
    return await prisma.exemplo.create({ data });
};

export const findAll = async (filters = {}) => {
    const { nome, descricao, ano, preco } = filters;
    const where = {};

    if (nome) where.nome = { contains: nome, mode: 'insensitive' };
    if (descricao) where.descricao = { contains: descricao, mode: 'insensitive' };
    if (ano !== undefined) where.ano = parseInt(ano);
    if (preco !== undefined) where.preco = parseFloat(preco);

    return await prisma.exemplo.findMany({
        where,
        orderBy: { createdAt: 'desc' },
    });
};

export const findById = async (id) => {
    return await prisma.exemplo.findUnique({
        where: { id: parseInt(id) },
    });
};

export const update = async (id, data) => {
    return await prisma.exemplo.update({
        where: { id: parseInt(id) },
        data,
    });
};

export const remove = async (id) => {
    return await prisma.exemplo.delete({
        where: { id: parseInt(id) },
    });
};