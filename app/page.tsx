"use client";

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/auth");
  // redirect('/onboarding/step1');
  // redirect('/onboarding/step2');
  //redirect('/overview');
}
