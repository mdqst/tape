import type { Context, HonoRequest, Next } from "hono";
import { cors as corsMiddleware } from "hono/cors";

const allowedOrigins = [
  "https://tape.xyz",
  "https://www.tape.xyz",
  "https://embed.tape.xyz",
  "https://og.tape.xyz",
];

const getIp = (req: HonoRequest) =>
  req.header("x-forwarded-for") || req.header("remote-addr");

export const ipRestriction = async (c: Context, next: Next) => {
  const origin = c.req.header("Origin");
  const ua = c.req.header("User-Agent");
  const ip = getIp(c.req);
  console.info(
    `[${c.req.method}] method from [${origin ?? ua}] with with ip [${ip}] to [${c.req.path}]`,
  );
  //   if (origin && !allowedOrigins.includes(origin)) {
  //     return c.text('Forbidden', 403)
  //   }
  await next();
};

export const cors = corsMiddleware({
  origin: allowedOrigins,
  allowMethods: ["GET", "POST", "OPTIONS"],
});
