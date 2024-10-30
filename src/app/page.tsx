"use client";
import ButtonDefault from "@/components/Button/ButtonDefault";
import DefaultLayout from "@/layout/DefaultLayout";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout title="Cat Facts">
      <div>
        <div className="mb-6">
          <Link href="./cat/fact">
            <ButtonDefault size="lg" text="Facts" />
          </Link>
        </div>
        <div>
          <Link href="./cat/breed">
            <ButtonDefault size="lg" text="Breeds" />
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}
