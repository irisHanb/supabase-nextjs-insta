"use client";

import { RecoilRoot } from "recoil";

export default function RecoilClientProvider({
  children,
}: React.PropsWithChildren) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
