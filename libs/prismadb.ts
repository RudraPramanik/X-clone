import { PrismaClient } from "@prisma/client"

//not instance by hot reload, prevent creating repeated prisma
declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client