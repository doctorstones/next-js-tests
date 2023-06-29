/* eslint-disable no-console */
import { type NextFetchEvent, type NextRequest, NextResponse } from 'next/server';
import type { MiddlewareFactory } from './types';

export const withConsole2: MiddlewareFactory = next => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const res = await next(request, _next);
    
    sleep(2000);
    console.log('Done2 in ',request.nextUrl.pathname,new Date().toISOString());

    return res;
  };
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));