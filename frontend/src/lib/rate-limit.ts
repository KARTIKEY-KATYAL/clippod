import type { NextRequest } from "next/server";

const attempts = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(request: NextRequest, limit = 10, windowMs = 60000) {
  const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'anonymous';
  const now = Date.now();
  const current = attempts.get(ip);

  if (!current || now > current.resetTime) {
    attempts.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return { success: false, remaining: 0, resetTime: current.resetTime };
  }

  current.count++;
  return { success: true, remaining: limit - current.count };
}

// const _limit = 10; // or remove if not needed
// const _windowMs = 60 * 1000; // or remove if not needed