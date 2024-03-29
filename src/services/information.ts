"use server";

import { InformationType } from "@/lib/types";
import { urls } from "./urls";
import { ApiResponseType } from "../../types/response";
import { buildAsyncResponse, handleBuildErrorResponse } from "@/utils/request";

export async function getInformationList(): Promise<
  ApiResponseType<InformationType[]>
> {
  const res = await fetch(urls.information, {
    headers: {
      accept: "application/json",
    },
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) return handleBuildErrorResponse(res);
  return buildAsyncResponse(await res.json());
}
